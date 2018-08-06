function Complex(real, imaginary) {

    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);

}

Complex.transform = function (number) {

    var complex;

    complex = (number instanceof Complex) ? number : complex;
    complex = (typeof number === 'number') ? new Complex(number, 0) : number;

    return complex;

};

function displayComplex(real, imaginary) {

    if (imaginary === '0') return '' + real;

    if (real === 0) return '' + imaginary + 'i';

    if (imaginary < 0) return '' + real + imaginary + 'i';

    return '' + real + '+' + imaginary + 'i';

}

// ---------------------------------------------------------------

function complexAdd(firstNumber, secondNumber) {

    var first, 
    second;

    first = Complex.transform(firstNumber);
    second = Complex.transform(secondNumber);

    var real = first.real + second.real;
    var imaginary = first.imaginary + second.imaginary;

    return displayComplex(real, imaginary);

}

function complexSubtract(firstNumber, secondNumber) {

    var first, 
    second;

    first = Complex.transform(firstNumber);
    second = Complex.transform(secondNumber);

    var real = first.real - second.real;
    var imaginary = first.imaginary - second.imaginary;

    return displayComplex(real, imaginary);

}

function complexMultiply(firstNumber, secondNumber) {

    var first, 
    second;

    first = Complex.transform(firstNumber);
    second = Complex.transform(secondNumber);

    var real = (first.real * second.real) - (first.imaginary * second.imaginary);
    var imaginary = (first.real * second.imaginary) + (first.imaginary * second.real);

    return displayComplex(real, imaginary);

}

function complexDivide(firstNumber, secondNumber) {

    var first, 
    second;

    first = Complex.transform(firstNumber);
    second = Complex.transform(secondNumber);

    var denom = second.imaginary * second.imaginary + second.real * second.real;
    var real = (first.real * second.real + first.imaginary * second.imaginary) / denom;
    var imaginary = (second.real * first.imaginary - first.real * second.imaginary) / denom;

    return displayComplex(real, imaginary);

}