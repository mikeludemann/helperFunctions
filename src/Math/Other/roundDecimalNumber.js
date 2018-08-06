function roundDecimalNumber(number, decimalIndex) {

    if ((typeof number !== 'number') || (typeof decimalIndex !== 'number'))

        return false;

    var signature = number >= 0 ? 1 : -1;

    return (Math.round((number * Math.pow(10, decimalIndex)) + (signature * 0.0001)) / Math.pow(10, decimalIndex)).toFixed(decimalIndex);

}