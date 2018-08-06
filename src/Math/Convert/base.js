function base(number, initial, change) {

    if ((initial && change) < 2 || (initial && change) > 36)

        return 'Base between 2 and 36';

    return parseInt(number + '', initial).toString(change);

}