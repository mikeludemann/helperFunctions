function getAllSiblingsUntil(element, stopElement, filter) {

    if (!Element.prototype.matches) {

        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    }

    var parents = [];

    for (; element && element !== document; element = element.parentNode) {

        if (stopElement) {

            if (element.matches(stopElement)) break;

        }

        if (filter) {

            if (element.matches(filter)) {

                parents.push(element);

            }

            continue;

        }

        parents.push(element);

    }

    return parents;

}