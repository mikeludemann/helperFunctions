function getTwoDigitsDay(d) {

    return (d.getDate() < 10 ? '0' : '') + d.getDate();

}

function getTwoDigitsMonth(d) {

    var m = "",
        n = d.getMonth() + 1;

    if (n < 10) {

        m += "0" + n;

    } else {

        m = n;
    }

    return m;

}

function getTwoDigitsYear(d) {

    return ('' + d.getFullYear()).substr(2);

}

function getTwoDigitsHours(d) {

    return (d.getHours() < 10 ? '0' : '') + d.getHours();

}

function getTwoDigitsMinutes(d) {

    return (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    
}

function getTwoDigitsSeconds(d) {

    return (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
    
}