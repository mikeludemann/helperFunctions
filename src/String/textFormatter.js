function upperFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

function upperFirstLetterWords(string) {

    return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

}

function lowerFirstLetter(string) {

    return string.charAt(0).toLowerCase() + string.slice(1);

}

function lowerFirstLetterWords(string) {

    return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });

}

function swapCase(string) {

    return string.replace(/([a-z]+)|([A-Z]+)/g, function (match, char) {

        return char ? match.toUpperCase() : match.toLowerCase();

    });

}

function camleCase(string) {

    return string.replace(/\W+(.)/g, function (match, chr) {

        return chr.toUpperCase();

    });

}

function unCamelCase(string, separator) {

    if (typeof (separator) == "undefined") {

        separator = " ";

    }

    var string = string.replace(/[A-Z]/g, function (letter) {

        return separator + letter.toLowerCase();

    });

    return string.replace("/^" + separator + "/", '');

}

function repeat(string, count) {
    
    if (typeof (count) == "undefined") {

        count = 1;
    }

    return count < 1 ? '' : new Array(count + 1).join(string);

}