function isURL(string) {

    regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}