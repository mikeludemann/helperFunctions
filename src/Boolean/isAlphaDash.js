function isAlphaDash(string) {

    regexp = /^[a-zA-Z0-9\_\-]+$/i;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}