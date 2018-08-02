function hasLowerCase(string) {
    
    regexp = /^[a-z]/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }

}