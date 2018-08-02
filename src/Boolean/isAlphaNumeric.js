function isAlphaNumeric(string) {

    regexp = /^[A-Za-z0-9]+$/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}