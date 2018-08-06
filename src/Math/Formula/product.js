function product(array) {

    if (toString.call(array) !== "[object Array]")
        return false;

    var total = 1;

    for (var i = 0; i < array.length; i++) {

        if (isNaN(array[i])) {

            continue;

        }

        total *= Number(array[i]);

    }

    return total;

}