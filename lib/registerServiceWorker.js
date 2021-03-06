"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.toString());
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = process.env.PUBLIC_URL + "/service-worker.js";
            if (isLocalhost) {
                checkValidServiceWorker(swUrl);
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ');
                });
            }
            else {
                registerValidSW(swUrl);
            }
        });
    }
}
exports.default = register;
function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker) {
                installingWorker.onstatechange = function () {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('New content is available; please refresh.');
                        }
                        else {
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            }
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl) {
    fetch(swUrl)
        .then(function (response) {
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            registerValidSW(swUrl);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=registerServiceWorker.js.map