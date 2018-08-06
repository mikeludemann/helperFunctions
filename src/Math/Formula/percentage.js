function percentage(number, percentage) {

    if (number == null || number == "" || number == 0) {

        return 0;

    }

    if (percentage == null || percentage == "" || percentage == 0) {

        return false;

    }

    return parseFloat((number / 100) * percentage);

}