function moduloWithDifference(number, moduloIndex) {

    if (moduloIndex <= 0)

        throw new Error("Indicator can not be zero.");

    if (isInt(number) && !isInt(moduloIndex))

        throw new Error("Number or Indicator are not a number.");

    return [Math.floor(number / moduloIndex), number % moduloIndex];

}

function isInteger(number) {

    return number % 1 === 0;

}