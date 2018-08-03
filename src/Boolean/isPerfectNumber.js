function isPerfectNumber(number) {

    var tmp = 0;

    for (var i = 1; i <= number / 2; i++) {

        if (number % i === 0) {

            tmp += i;

        }

    }

    if (tmp === number && tmp !== 0) {

        return true;
    }

    else {

        return false;

    }
} 