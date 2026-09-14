import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist')
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

function resolvePath(url = '/') {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname)
  const resolved = path.resolve(dist, `.${path.posix.normalize(pathname)}`)
  if (resolved !== dist && !resolved.startsWith(`${dist}${path.sep}`)) return null
  return resolved
}

const server = createServer(async (req, res) => {
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
