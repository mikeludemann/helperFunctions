function quickSort(array) {

    if (array.length <= 1) {

        return array;

    } else {

        var left = [],
            right = [],
            newArray = [],
            pivot = array.pop(),
            length = array.length;

        for (var i = 0; i < length; i++) {

            if (array[i] <= pivot) {

                left.push(array[i]);

            } else {

                right.push(array[i]);

            }

        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));

    }
}