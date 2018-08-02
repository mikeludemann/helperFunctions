function isHTML(string) {

    regexp = /(<([a-z]+) *[^/]*?>|<\/([a-z]+) *[^/]*?>)/;

    if (regexp.test(string)) {

        return true;

    }

    else {

        return false;

    }
    
}