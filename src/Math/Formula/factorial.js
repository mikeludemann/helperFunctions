function factorial(x) {

    if (x === 0) {

        return 1;

    }

    return x * factorial(x - 1);

}

function getFactorialSteps(number) {

    var factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(number)); i += 1) {

        if (number % i === 0) {

            factors.push(i);

            if (number / i !== i) {

                factors.push(number / i);

            }

        }

    }

    factors.sort(function (x, y) {

        return x - y;

    });

    return factors;

}