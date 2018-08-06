function binomialCoefficient(number, range) {

    if ((typeof number !== 'number') || (typeof range !== 'number'))

        return false;

    var coefficient = 1;

    for (var x = number - range + 1; x <= number; x++) 
    
    coefficient *= x;

    for (x = 1; x <= range; x++) 
    
    coefficient /= x;

    return coefficient;

}