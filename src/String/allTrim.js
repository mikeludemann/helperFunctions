function Trim(string) {

    var result;

    if (typeof string === 'string') {

        result = string.replace(/^\s+|\s+$/g, '');

        return result;

    }

    else {

        return false;

    }

}

function rightTrim(string) {

    var result;

    if (typeof string === 'string') {

        result = string.replace(/\s+$/g, '');

        return result;

    }

    else {

        return false;

    }

}

function leftTrim(string) {

    var result;

    if (typeof string === 'string') {

        result = string.replace(/^\s+/g, '');

        return result;

    }

    else {

        return false;

    }

}