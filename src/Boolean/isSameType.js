function isSameType(value_1, value_2) {
    
    if (isNan(value_1) || isNan(value_2)) {

        return isNan(value_1) === isNan(value_2);

    }

    return toString.call(value_1) === toString.call(value_2);

}

function isNan(val) {

    return val !== val;

}