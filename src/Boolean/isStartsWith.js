function isStartsWith(string, suffix) {

    if (((string === null) || (string === '')) || ((suffix === null) || (suffix === ''))) {

        return false;

    } else {

        string = string.toString();
        suffix = suffix.toString();

    }

    return string.indexOf(suffix, string.length - suffix.length) === -1;

}