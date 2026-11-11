// Single source of truth for the app version.
// Loaded as a classic script so both the page (<script src>) and the
// service worker (importScripts) can read it. Bump on every shipped change:
// YYYY-MM-DD.N (N increments for same-day builds).
self.APP_VERSION = '2026-11-11.1';
self.CACHE_NAME = 'infucalc-' + self.APP_VERSION;
