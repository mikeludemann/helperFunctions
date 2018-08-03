function exponent(basis, exponent) {
    
    if (exponent === 0) {

        return 1;

    }

    else {

        return basis * exponent(basis, exponent - 1);

    }

}