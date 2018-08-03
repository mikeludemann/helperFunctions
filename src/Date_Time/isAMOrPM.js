function isAMOrPM_UpperCase(date) {

    return date.getHours() < 12 ? 'AM' : 'PM';
    
}

function isAMOrPM_LowerCase(date) {

    return date.getHours() < 12 ? 'am' : 'pm';
    
}