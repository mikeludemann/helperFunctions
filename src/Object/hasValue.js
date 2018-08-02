function hasValue(obj, text) {

    Object.keys(obj).forEach(function (key) {

        if (obj[key] == text) {

            return true;

        } else {

            return false;

        }
        
    });

}