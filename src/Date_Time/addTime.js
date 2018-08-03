var addWeek = function (date, weeks) {
    
    return new Date(date.getTime() + days * 604800000);

}

var addDays = function (date, weeks) {
    
    return new Date(date.getTime() + days * 86400000);

}

var addHours = function (date, hours) {
    
    return new Date(date.getTime() + hours * 3600000);

}

var addMinutes = function (date, minutes) {

    return new Date(date.getTime() + minutes * 60000);

}

var addSeconds = function (date, seconds) {
    
    return new Date(date.getTime() + seconds * 1000);

}