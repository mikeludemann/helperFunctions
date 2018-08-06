function isExternalURL(string) {

    var a = document.createElement('a');

    a.href = string;

    if (!a.host || location.host == a.host) {

        return false;

    }

    return true;
    
}