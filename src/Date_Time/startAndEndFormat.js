function startOfWeek(date) {

    var start = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    return new Date(date.setDate(start));

}

function endOfWeek(date) {

    var end = date.getDate() - (date.getDay() - 1) + 6;

    return new Date(date.setDate(end));

}

function startOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth(), 1);

}

function endOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth() + 1, 0);

}