function greatestCommonDivisor(x, y) {

    if ((typeof x !== 'number') || (typeof y !== 'number'))

        return false;

    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {

        var t = y;
        y = x % y;
        x = t;
    }

    return x;

}

function greatestCommonDivisorMany(arr) {

    if (toString.call(arr) !== "[object Array]")

        return false;

    var length,
        a,
        b;

    length = arr.length;

    if (!length) {

        return null;

    }

    a = arr[0];

    for (var i = 1; i < length; i++) {

        b = arr[i];
        a = greatestCommonDivisor(a, b);
    }

    return a;

}