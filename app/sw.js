// Service worker : met l'appli en cache pour qu'elle s'ouvre même sans connexion.
const CACHE = 'peakmind-v36';
const FONTS = ['chakrapetch-500-latin', 'chakrapetch-500-latin-ext', 'chakrapetch-600-latin', 'chakrapetch-600-latin-ext', 'chakrapetch-700-latin', 'chakrapetch-700-latin-ext',
  'spacegrotesk-latin', 'spacegrotesk-latin-ext'].map(f => `fonts/${f}.woff2`);   // polices intégrées : l'appli garde son style hors ligne dès la 1re visite
const SHELL = ['./', 'index.html', 'styles.css', 'config.js', 'quests.js', 'money.js', 'app.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/mark.png'].concat(FONTS);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;   // classement en ligne, etc. : jamais mis en cache
  // Polices : la copie gardée d'abord (elles ne changent jamais)
  if (url.pathname.includes('/fonts/')) { e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request))); return; }
  // Réseau d'abord (pour recevoir les mises à jour). Si le réseau traîne plus de 3 s (métro, mauvaise 4G),
  // on ouvre la version gardée ; hors ligne, aussi.
  e.respondWith(new Promise(resolve => {
    let done = false;
    const finish = r => { if (!done && r) { done = true; resolve(r); } };
    const saved = () => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined));
    const timer = setTimeout(() => saved().then(finish), 3000);
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      clearTimeout(timer); finish(res);
    }).catch(() => saved().then(r => { clearTimeout(timer); finish(r || Response.error()); }));
  }));
});
