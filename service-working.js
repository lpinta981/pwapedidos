self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/pwapedidos/',
        '/pwapedidos/index.html',
        '/pwapedidos/manifest.json',
        'https://i.postimg.cc/Gpk4qZx4/LOGO-MANA-SAKILLA-3.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
