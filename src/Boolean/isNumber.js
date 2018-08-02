function isNumber(value) {

    return !isNaN(value) && toString.call(value) === '[object Number]';
    
}