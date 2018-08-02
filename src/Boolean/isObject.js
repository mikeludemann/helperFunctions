function isObject(value) {

    var Type = typeof value;

    return Type === 'function' || Type === 'object' && !!value;

}