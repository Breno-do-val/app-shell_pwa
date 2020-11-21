'use strict'

if ('serviceWorker' in navigator) {
    const success = () => console.log('[Service Worker] registered');
    const failed = () => console.log('[Service Worker] registration failed');
    navigator.serviceWorker
        .register('sw.js')
        .then(success)
        .catch(failed)
}