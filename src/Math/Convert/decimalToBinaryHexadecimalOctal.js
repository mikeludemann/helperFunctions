function decimalToBinaryHexadecimalOctal(number, baseFormat) {

    if (number < 0) {

        number = 0xFFFFFFFF + number + 1;

    }

    switch (baseFormat) {

        case 'B': 
        case 'b':
        case 'Binary':
        case 'binary':
            return parseInt(number, 10).toString(2);
            break;
        case 'H':
        case 'h':
        case 'Hexadecimal':
        case 'hexadecimal':
            return parseInt(number, 10).toString(16);
            break;
        case 'O':
        case 'O':
        case 'Octal':
        case 'octal':
            return parseInt(number, 10).toString(8);
            break;
        default:
            return ("Cannot convert number");

    }

}