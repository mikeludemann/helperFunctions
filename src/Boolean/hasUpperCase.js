function hasUpperCase(string) {
    
    regexp = /^[A-Z]/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}