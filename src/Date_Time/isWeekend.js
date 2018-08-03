var isWeekend = function (date) {

    var d = new Date(date);

    if (d.getDay() == 6 || d.getDay() == 0) {

        return "weekend";

    } else {

        return "not weekend"

    }

}