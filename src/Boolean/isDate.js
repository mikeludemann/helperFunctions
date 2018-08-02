function isDate(string) {

    regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}

function isDateEuropean(string) {
    
    regexp = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}