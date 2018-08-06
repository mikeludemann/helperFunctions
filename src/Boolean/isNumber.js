function isNumber(number) {

    return !isNaN(number) && toString.call(number) === '[object Number]';

}

function isNumeric(number) {

    return !isNaN(parseFloat(number)) && isFinite(number);

}