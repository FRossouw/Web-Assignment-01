var cacheName = 'fjr-pwa';

var filesToCache = [
    '/',
    '/index.html',
    '/css/article-experience.css',
    '/css/article-inspiration.css',
    '/css/article-work-current.css',
    '/css/article.css',
    '/css/body-left-current-work.css',
    '/css/body-left-navigation.css',
    '/css/body-right-skills-media.css',
    '/css/body-right-skills.css',
    '/css/header.css',
    '/css/main-media.css',
    '/css/main.css',
    '/images/bc.jpg',
    '/images/clicks.png',
    '/images/dvt-logo.png',
    '/images/dvt-square.png',
    '/images/hm.png',
    '/images/ibm.png',
    '/images/icdl.gif',
    '/images/pha.jpg',
    '/images/photo_square.jpg',
    '/images/salocums.jpg',
    '/js/main.js'];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});