function hexadecimalToASCII(string) {

    var hex = string.toString(),
        text = '';

    for (var n = 0; n < hex.length; n += 2) {

        text += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

    }

    return text;

}

function asciiToHexadecimal(string) {
    
    var arr = [];

    for (var n = 0, l = string.length; n < l; n++) {

        var hex = Number(string.charCodeAt(n)).toString(16);

        arr.push(hex);

    }

    return arr.join('');

}