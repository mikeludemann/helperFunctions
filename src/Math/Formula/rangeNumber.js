function rangeNumber(startNumber, endNumber) {

    if (endNumber - startNumber === 2) {

        return [startNumber + 1];

    }

    else {

        var list = range(startNumber, endNumber - 1);

        list.push(endNumber - 1);

        return list;

    }

}