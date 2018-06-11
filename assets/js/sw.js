  // Helpful stuff https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
self.addEventListener('install', function(event) {
  // Install
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

  // Cache files
var CACHE_NAME = 'minetracker';
var urlsToCache = [
  '/images/logo.png',
  '/css/main.css',
  '/images/48.png',
  '/images/72.png',
  '/images/96.png',
  '/images/144.png',
  '/images/168.png',
  '/images/192.png',
  
];

'use strict';

// Incrementing CACHE_VERSION will kick off the install event and force previously cached
// resources to be cached again.
const CACHE_VERSION = 2;
let CURRENT_CACHES = {
  offline: 'offline-v' + CACHE_VERSION
};
const OFFLINE_URL = 'offline.html';

  // Activation
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['minetracker-cache'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
