function getValues(obj) {

    var keys = getKeys(obj),
        length = keys.length,
        values = Array(length);

    for (var i = 0; i < length; i++) {

        values[i] = obj[keys[i]];

    }

    return values;

}
function getKeys(obj) {

    if (!isObject(obj)) return [];

    if (Object.keys) return Object.keys(obj);

    var keys = [];

    for (var key in obj) if (_.has(obj, key)) keys.push(key);

    return keys;

}

function isObject(obj) {

    var type = typeof obj;

    return type === 'function' || type === 'object' && !!obj;

} 