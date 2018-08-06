function rootIndexNumber(number, rootIndex) {

    ng = rootIndex % 2;

    if ((ng == 1) || number < 0)

        number = -number;

    var result = Math.pow(number, 1 / rootIndex);

    rootIndex = Math.pow(result, rootIndex);

    if (Math.abs(number - rootIndex) < 1 && (number > 0 === rootIndex > 0))

        return ng ? -result : result;

}