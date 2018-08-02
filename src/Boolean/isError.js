function isError(value) {

    return value instanceof Error || toString.call(input) === '[object Error]';

}