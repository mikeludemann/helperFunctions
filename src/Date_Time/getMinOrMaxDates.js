function getMinDate(dateArray) {

    var dateMin = dateArray[0],
        objectMin = new Date(dateArray[0]);

    dateArray.forEach(function (d, index) {

        if (new Date(d) < objectMin) {

            dateMin = d;
            objectMin = new Date(d);
        }

    });

    return dateMin;

}

function getMinDate(dateArray) {

    var dateMax = dateArray[0],
        objectMax = new Date(dateArray[0]);

    dateArray.forEach(function (d, index) {

        if (new Date(d) > objectMax) {

            dateMax = d;
            objectMax = new Date(d);
        }

    });

    return dateMax;

}