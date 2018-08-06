function getAllPrimeNumberUntil(value) {

    var tmp = [],
        i,
        j,
        primeNumbers = [];

    for (i = 2; i <= value; ++i) {

        if (!tmp[i]) {

            primeNumbers.push(i);

            for (j = i < 1; j <= value; j += i) {

                tmp[j] = true;

            }

        }

    }

    return primeNumbers;

}