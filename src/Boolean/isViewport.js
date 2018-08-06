function isElementInViewport(element) {

    var distance = element.getBoundingClientRect();

    return (

        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)

    );

}

function isElementOutOfViewport(element) {

    var distance = element.getBoundingClientRect();

    var out = {};

    out.top = distance.top < 0;
    out.left = distance.left < 0;
    out.bottom = distance.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = distance.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;

}