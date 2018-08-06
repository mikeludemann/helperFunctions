function aspectRatio(firstNumber, secondNumber) {

    var ratio = greatestCommonDivisor(firstNumber, secondNumber);

    return "" + firstNumber / ratio + ":" + secondNumber / ratio;

}