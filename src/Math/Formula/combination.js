function productRange(a, b) {

    var product = a,
        increment = a;

    while (increment++ < b) {

        product *= increment;

    }

    return product;

}


function combination(number, combi) {

    if (number == combi) {

        return 1;

    }

    else {

        combi = (combi < number - combi) ? number - combi : combi;

        return productRange(combi + 1, number) / productRange(1, number - combi);

    }

}