export default function middleware(req) {
  const url = new URL(req.url)
  const targetUrl = new URL('http://chengtx809-web.hf.space' + url.pathname + url.search)
  
  return fetch(targetUrl, {
    headers: {
      ...req.headers,
      host: targetUrl.host,
    },
    method: req.method,
    body: req.body,
  })
}

export const config = {
  matcher: '/:path*',
}
