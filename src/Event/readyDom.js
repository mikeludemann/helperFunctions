function readyDom(callback) {

    if (typeof callback !== 'function') return;

    if (document.readyState === 'interactive' || document.readyState === 'complete') {

        return callback();

    }

    document.addEventListener('DOMContentLoaded', callback, false);

}