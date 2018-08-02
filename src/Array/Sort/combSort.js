function combSort(arr) {

    function is_array_sorted(arr) {

        var sorted = true;

        for (var i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {

                sorted = false;
                break;

            }

        }

        return sorted;

    }

    var iteration_count = 0,
        gap = arr.length - 2,
        decrease_factor = 1.25;

    while (!is_array_sorted(arr)) {
        
        if (iteration_count > 0)
            gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

        var front = 0,
            back = gap;

        while (back <= arr.length - 1) {

            if (arr[front] > arr[back]) {

                var temp = arr[front];
                arr[front] = arr[back];
                arr[back] = temp;

            }

            front += 1;
            back += 1;
        }

        iteration_count += 1;

    }
    
    return arr;

}