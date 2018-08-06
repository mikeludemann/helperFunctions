function isNaturalNumber(number) {
    
    if (typeof number !== 'number')

        return 'Not a number';

    return (number >= 0.0) && (Math.floor(number) === number) && number !== Infinity;

}