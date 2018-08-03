function subset(array, arraySize) {

    var sets = [],
        result;

    if (arraySize == null || arraySize == 0) {

        return array;

    }

    for (var x = 0; x < Math.pow(2, array.length); x++) {

        result = [];

        i = array.length - 1;

        do {

            if ((x & (1 << i)) !== 0) {

                result.push(array[i]);

            }

        } while (i--);

        if (result.length >= arraySize) {

            sets.push(result);

        }

    }

    return sets;

}