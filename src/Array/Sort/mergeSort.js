function mergeSort(leftArray, rightArray) {

    var i = 0,
        j = 0,
        results = [];

    while (i < leftArray.length || j < rightArray.length) {

        if (i === leftArray.length) {

            results.push(rightArray[j]);
            j++;

        }

        else if (j === rightArray.length || leftArray[i] <= rightArray[j]) {

            results.push(leftArray[i]);
            i++;

        } else {

            results.push(rightArray[j]);

            j++;
        }

    }

    return results;

}