const staticCacheName = 'site-static';
const assets = [
 '/',
 '/index.html',
 '/src/js/app.js',
 '/src/css/bootstrap.min.css',
 '/sw.js',
 '/manifest.json',
 '/src/img/logo.png'
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
});
