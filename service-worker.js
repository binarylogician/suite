"use strict";var precacheConfig=[["/suite/index.html","c8d4d7c353a91e25a13f3892ea2468ec"],["/suite/static/js/0.39d935d3.chunk.js","6f96e86a995eefc4ddb9a5147fa024fd"],["/suite/static/js/1.839336ae.chunk.js","4fad60138c2a8f29d6bb32c062913373"],["/suite/static/js/2.c3a70bd6.chunk.js","7784a0052c50e39df66b03aa972d61f7"],["/suite/static/js/3.486ee39c.chunk.js","f0b520f8ceef012c07971b5233ecbedd"],["/suite/static/js/4.65fb9e68.chunk.js","b7782caaf3f872b6a8e86649128667c8"],["/suite/static/js/5.1d93bc70.chunk.js","6eb2ee7591f8d59f4211f16eb51c7b9f"],["/suite/static/js/6.e874697f.chunk.js","ad43856ef466a61efb0d06c325258cc1"],["/suite/static/js/main.864be1c7.js","0940b26eb78ae9b9fa37a6476c030287"],["/suite/static/media/cosmic_sans_regular.ad656da8.ttf","ad656da8058c1cdfd68f1e95e574dc0e"],["/suite/static/media/mars.e4d67818.jpg","e4d678186d085b497738794a7a3d4566"],["/suite/static/media/mountains.cbabcb15.jpg","cbabcb15f43f7c6ef74976815250c38d"],["/suite/static/media/plane.673b257e.jpg","673b257ed0d1978ef1aa440a2b396886"],["/suite/static/media/seahouse.a61af4e1.jpg","a61af4e1d4df53d25efe5555b3232c0a"],["/suite/static/media/serene.2b309b4d.jpg","2b309b4d6d500cfa6ded5e107723a186"],["/suite/static/media/thumb_mars.f08f3266.jpg","f08f32661bec882fbba9f5a425ce7e6f"],["/suite/static/media/thumb_mountains.54bee223.jpg","54bee22330fb7cb63e3d1eb41fbf86d4"],["/suite/static/media/thumb_plane.d2a54444.jpg","d2a54444b0316df828e9f75dc4a29668"],["/suite/static/media/thumb_seahouse.57f4fe11.jpg","57f4fe11fa84768421ae38fe69c50579"],["/suite/static/media/thumb_serene.e36fa380.jpg","e36fa3801ca144ddd042978fed2b4da4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});