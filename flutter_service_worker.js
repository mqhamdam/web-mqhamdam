'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e571275e885668bca85fb43ff93f6a5d",
"index.html": "71909d94450376641e1402f95cfd5f5d",
"/": "71909d94450376641e1402f95cfd5f5d",
"main.dart.js": "988ffbc1b3fd1f72c709226d819f6f01",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "829132b01429cd571747c93afce68321",
"assets/AssetManifest.json": "f306aabad768b41e7c4c376ab8cba834",
"assets/NOTICES": "3953e8c9226d298b78fb505174e59c3a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "f6a074db9e7da99619bbf781e8bb18b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "423be5772dc1465cd5bfdfae73231866",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/aws-saa.png": "462ab8af22b367375b16261fe657c0bb",
"assets/assets/011-mail.png": "3f6c4c014901200e7b4729ddd403a717",
"assets/assets/010-medium.png": "5c6ebaa8aed3cc2b3da3a410829dd07d",
"assets/assets/aws-dva.png": "0bf9793936700bd058251f9f19e7c44a",
"assets/assets/007-youtube.png": "a04938a02f163104931918076f820c8d",
"assets/assets/003-instagram.png": "4f0a0af6e3156fcb746cc496bad33d50",
"assets/assets/usa.png": "c7ef7aeea67ae3612237fefcaa3b8db3",
"assets/assets/005-kakao-talk.png": "b6595e09a4510f61f7837d93c8163909",
"assets/assets/012-twitter.png": "49c5dfc52d5de40ebe944a39ac98f327",
"assets/assets/006-github.png": "660e52181a6fb5aea21ed4d336b6d306",
"assets/assets/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/aws.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/assets/ru.png": "9ccc56af6a1ea3efa9202acde64f090e",
"assets/assets/013-dribbble.png": "91be1e11c2cb3597477dc69fe8e75881",
"assets/assets/008-browser.png": "cc41a56f2e4e680b887e956aad187a05",
"assets/assets/jp.png": "5ac5e61b29a6a3cbfa2bedd75edd6cd7",
"assets/assets/fr.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/skr.png": "905fcb9b1a36f5f816201b4108a4681a",
"assets/assets/tjk_flag.png": "d0ff4af7e6343b201af07df96b6af11c",
"assets/assets/004-linkedin.png": "acc4847370046088423a6b76190a0e6f",
"assets/assets/009-vkontakte.png": "1a8657bf9f703f314b3cbeab8ceacf1a",
"assets/assets/react.png": "b519e26b769bf77afd55ec162352525f",
"assets/assets/spain.png": "69bf7c3df4b222c445bf6ebffec278e6",
"assets/assets/001-telegram.png": "69cd77ea8e0112204dafeae731f47cd4",
"assets/assets/014-pinterest.png": "4e4de368d557def4f11d3f59c0a6455c",
"assets/assets/MongoDB_SpringGreen.png": "107e5466baea7494733ee8df859b3354",
"assets/assets/aws-serverless.png": "9018b5e382c95b092cfb1d82cf21ad87",
"assets/assets/tjk.png": "c21cf34abe750ac60c39e29d68f08296",
"assets/assets/uzb.png": "8759996756cb2c28dead39acea462f9e",
"assets/assets/mongodb.png": "636f4c87cf5d470039717728ed05e244",
"assets/assets/002-facebook.png": "34fe40762d7fbca5c8ac5be7259467f4",
"assets/assets/nodejs.png": "8b56a713f102ad903f6e26a62e8bf225",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
