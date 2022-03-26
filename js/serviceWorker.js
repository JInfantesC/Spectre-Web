const staticSpectre = "spectre-v1"
const assets = [
  "/",
  "/index.html",
  "/css/spectre-base.css",
  "/css/spectre-web.css",
  "/images/spectre-light-glyph.svg",
  "/images/spectre-light.pdf",
  "/images/spectre-light.png",
  "/images/spectre-light.svg",
  "/images/spectre.pdf",
  "/images/spectre.png",
  "/images/spectre.svg",
  "/images/spectre.webp",
  "/js/main.js",
  "/js/spectre/pbkdf2.js",
  "/js/spectre/scrypt.js",
  "/js/spectre/spectre-algorithm.js",
  "/js/spectre/spectre-service.js",
  "/js/spectre/spectre-types.js",
  "/js/spectre/spectre-worker.js",
  "/plugins/bootstrap/bootstrap.min.css",
  "/plugins/bootstrap/bootstrap.bundle.min.js",
  "/plugins/fontawesome/css/all.min.css",
  "/plugins/jquery/jquery.min.js",
  "/plugins/fontawesome/webfonts/fa-duotone-900.woff2",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSpectre).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  