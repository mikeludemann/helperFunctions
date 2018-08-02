function cocktailSort(arr) 
{
    var switcher;

    do {

        for (var i = 0; i < arr.length - 2; i++) {

            if (arr[i] > arr[i + 1]) {

                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                switcher = true;

            }

        }

        if (!switcher) {

            break;

        }

        switcher = false;

        for (i = arr.length - 2; i > 0; i--) {

            if (arr[i] > arr[i + 1]) {

                var temp1 = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp1;
                switcher = true;

            }

        }

    } while (switcher);

    return arr;

}