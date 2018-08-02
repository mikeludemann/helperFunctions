function isHexadecimal(string) {

    regexp = /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    
    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }
    
}