function pancakeSort(arr) {

    for (var i = arr.length - 1; i >= 1; i--) {

        var maxID = 0,
            max = arr[0];

        for (var j = 1; j <= i; j++) {

            if (arr[j] > max) {

                max = arr[j];
                maxID = j;

            }

        }

        if (maxID == i)

            continue;

        var new_slice;

        if (maxID > 0) {

            new_slice = arr.slice(0, maxID + 1).reverse();

            for (j = 0; j <= maxID; j++)

                arr[j] = new_slice[j];

        }

        new_slice = arr.slice(0, i + 1).reverse();

        for (j = 0; j <= i; j++)

            arr[j] = new_slice[j];

    }

    return arr;

}