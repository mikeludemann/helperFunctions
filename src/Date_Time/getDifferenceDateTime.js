function getDifferenceYears(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= (60 * 60 * 24);

    return Math.abs(Math.round(diff / 365.25));

}

function getDifferenceMonths(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= (60 * 60 * 24 * 7 * 4);

    return Math.abs(Math.round(diff));

}

function getDifferenceWeeks(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= 60 * 60 * 24 * 7;

    return Math.abs(Math.round(diff));

}

function getDifferenceDays(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= 60 * 60 * 24;

    return Math.abs(Math.round(diff));

}

function getDifferenceHours(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= 60 * 60;

    return Math.abs(Math.round(diff));

}

function getDifferenceMinutes(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    diff /= 60;

    return Math.abs(Math.round(diff));

}


function getDifferenceSeconds(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

    return Math.abs(Math.round(diff));

}

function getDifferenceMilliseconds(firstDate, secondDate) {

    var diff = (secondDate.getTime() - firstDate.getTime());

    return Math.abs(Math.round(diff));

}