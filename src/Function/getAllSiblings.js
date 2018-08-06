function getAllSiblings(element) {

    var arr = [],
        firstElement = element.parentNode.firstChild;

    for (; firstElement; firstElement = firstElement.nextSibling) {

        if (firstElement.nodeType === 1 && firstElement !== element) {

            arr.push(firstElement);

        }

    }

    return arr;

}