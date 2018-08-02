function countLowerChar(str) {

    return str.match(/[a-z]/gi).length;

}

function countUpperChar(str) {

    return str.match(/[A-Z]/gi).length;

}

function countVowelChar(str) {

    return str.match(/[aAeEiIoOuUäÄöÖüÜ]/gi).length;

}

function countConsonantlChar(str) {

    return str.match(/[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ]/gi).length;

}