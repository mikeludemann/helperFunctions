function getPassedDaysOfYear(d) {

    var current = new Date(d.getTime());
    var previous = new Date(d.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);

}