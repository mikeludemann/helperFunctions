function maxNumber(array) {

    if (toString.call(array) !== "[object Array]")

        return false;

    return Math.max.apply(null, array);

}