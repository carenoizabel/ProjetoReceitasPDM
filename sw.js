let cacheName = "my-first-pwa";
let filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/manifest.json",
  "/massas.html",
  "/doces.html",
  "/carnes.html",
  "/images/carbonara.png",
  "/images/coq-au-vin.png",
  "/images/creme-brulee.png",
  "/images/logotipofi.png",
  "/images/ossobuco.png",
  "/images/profiteroles.png",
  "/images/ratatouille.png",
  "/images/ravioli.png",
  "/images/saltimbocca.png",
  "/images/tiramisu.png",
  "/images/pwa-icon-256.png",
  "/images/pwa-icon-512.png",
];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
