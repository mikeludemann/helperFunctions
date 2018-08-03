var removeWeek = function (date, weeks) {
    
    return new Date(date.getTime() - days * 604800000);

}

var removeDays = function (date, weeks) {
    
    return new Date(date.getTime() - days * 86400000);

}

var removeHours = function (date, hours) {
    
    return new Date(date.getTime() - hours * 3600000);

}

var removeMinutes = function (date, minutes) {

    return new Date(date.getTime() - minutes * 60000);

}

var removeSeconds = function (date, seconds) {
    
    return new Date(date.getTime() - seconds * 1000);

}