/**
 * ===================================================================================
 * PEMANGGILAN SERVICE WORKER
 * ===================================================================================
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register(base_url + 'service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker OK: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker failed: ', err);
        });
    });
}