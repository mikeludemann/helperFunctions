function isString(value) {

    if (Object.prototype.toString.call(value) === '[object String]') {

        return true;

    } else {

        return false;

    }

};