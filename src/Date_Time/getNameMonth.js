var getFullNameMonthLong = function (date) {

    list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return list[date.getMonth()];

};

var getFullNameMonthShort = function (date) {

    list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return list[date.getMonth()];

};