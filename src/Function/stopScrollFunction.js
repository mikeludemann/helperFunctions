function stopScrollFunction(callback) {

    if (!callback || Object.prototype.toString.call(callback) !== '[object Function]') return;

    var isScrolling;

    window.addEventListener('scroll', function (event) {

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(function () {

            callback();

        }, 66);

    }, false);

}