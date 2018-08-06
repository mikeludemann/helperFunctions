function binaryToDecimal(binaryNumber) {

    return parseInt((binaryNumber + '').replace(/[^01]/gi, ''), 2);

}