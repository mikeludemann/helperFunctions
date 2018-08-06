function getUntilElement(element, stopElement, filter) {

    if (!Element.prototype.matches) {

        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    }

    var arr = [];

    element = element.nextElementSibling;

    while (element) {

        if (element.matches(stopElement)) break;

        if (filter && !element.matches(filter)) {

            element = element.nextElementSibling;
            continue;

        }

        arr.push(element);

        element = element.nextElementSibling;

    }

    return arr;

}