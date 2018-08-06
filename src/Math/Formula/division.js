function division(arr) {

    if (Object.prototype.toString.call(arr) === '[object Array]') {

        var result = arr[0];

        if (typeof (result) !== 'number') {

            return false;

        }

        for (var i = 1, length = arr.length; i < length; i++) {

            if (typeof (arr[i]) === 'number') {

                result /= arr[i];

            }

            else

                return false;

        }

        return result;

    }

    else

        return false;

}