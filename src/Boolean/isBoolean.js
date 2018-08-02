function isBoolean(value) {

    return value === true || value === false || toString.call(value) === '[object Boolean]';

}