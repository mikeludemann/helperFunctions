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