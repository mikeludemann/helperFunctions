function addYear(date, n) {

    return new Date(date.setFullYear(date.getFullYear() + n));

}

function addMonth(date, n) {

    return new Date(date.setMonth(date.getMonth() + n));

}

function addWeek(date, n) {

    return new Date(date.setDate(date.getDate() + (n * 7)));

}

function addDay(date, n) {

    return new Date(date.setDate(date.getDate() + n));

}

function addHours(date, n) {

    return new Date(date.setHours(date.getHours() + n));

}

function addMinutes(date, n) {

    return new Date(date.setMinutes(date.getMinutes() + n));

}

function addSeconds(date, n) {

    return new Date(date.setSeconds(date.getSeconds() + n));

}

function addMilliseconds(date, n) {

    return new Date(date.setMilliseconds(date.getMilliseconds() + n));

}