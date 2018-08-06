function isPowerOfTwo(number) {

    if (typeof number !== 'number')

        return 'Not a number';

    return number && (number & (number - 1)) === 0;

}