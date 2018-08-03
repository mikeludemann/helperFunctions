function countLowerChar(string) {

    return string.match(/[a-z]/gi).length;

}

function countUpperChar(string) {

    return string.match(/[A-Z]/gi).length;

}

function countVowelChar(string) {

    return string.match(/[aAeEiIoOuUäÄöÖüÜ]/gi).length;

}

function countConsonantChar(string) {

    return string.match(/[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ]/gi).length;

}

function countChar(string) {

    var uniqueCharacter = {};

    string.replace(/\S/g, function (l) { uniqueCharacter[l] = (isNaN(uniqueCharacter[l]) ? 1 : uniqueCharacter[l] + 1); });

    return uniqueCharacter;

}