function changePositionKeyValue(obj) {

    var result = {},
        keys = getKeys(obj);

    for (var i = 0, length = keys.length; i < length; i++) {

        result[obj[keys[i]]] = keys[i];

    }

    return result;

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