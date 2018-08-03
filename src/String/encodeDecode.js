function encode(string) {

    return string.replace(/[^]/g, function (string) {

        return "&#" + string.charCodeAt(0) + ";";

    });

}

function decode(string) {
    
    return string.replace(/&#(\d+);/g, function (match, dec) {

        return String.fromCharCode(dec);

    });

};