function minNumber(array) {

    if (toString.call(array) !== "[object Array]")

        return false;

    return Math.min.apply(null, array);

}