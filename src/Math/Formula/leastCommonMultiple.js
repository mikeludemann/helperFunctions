function leastCommonMultiple(x, y) {

    if ((typeof x !== 'number') || (typeof y !== 'number'))

        return false;

    return (!x || !y) ? 0 : Math.abs((x * y) / greatestCommonDivisor(x, y));

}

function leastCommonMultipleMany(arr) {

    if (toString.call(arr) !== "[object Array]")

        return false;

    var a = 0,
        b = 0,
        l = arr.length;

    for (i = 0; i < l; i++) {

        a = arr[i] % arr[i + 1];

        if (a === 0) {

            arr[i + 1] = (arr[i] * arr[i + 1]) / arr[i + 1]

        }

        else {

            b = arr[i + 1] % a;

            if (b === 0) {

                arr[i + 1] = (arr[i] * arr[i + 1]) / a;

            }

            else {

                arr[i + 1] = (arr[i] * arr[i + 1]) / b;

            }

        }

    }

    return arr[l - 1];

}