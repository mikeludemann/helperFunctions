function isNumberInteger(number) {

    if (typeof number !== 'number')

        return false;

    return !isNaN(number) && parseInt(Number(number)) == number && !isNaN(parseInt(number, 10));

}