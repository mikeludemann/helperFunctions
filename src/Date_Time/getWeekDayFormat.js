function getWeekDayShort(date) {

    shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return shortDays[date.getDay()];

}

function getWeekDayLong(date) {

    longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return longDays[date.getDay()];

}

function getWeekDayNumber(date) {

    return (date.getDay() === 0 ? 7 : date.getDay());

}

function getEnglishDayFormat(date) {

    return date.getDate() + (date.getDate() % 10 == 1 && date.getDate() != 11 ? 'st' : (date.getDate() % 10 == 2 && date.getDate() != 12 ? 'nd' : (date.getDate() % 10 == 3 && date.getDate() != 13 ? 'rd' : 'th')));

}