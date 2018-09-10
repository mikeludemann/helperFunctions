function maximumDay(month, year) {

    var monthDay;

    if ((month == 3) || (month == 5) || (month == 8) || (month == 10)) {

        monthDay = 30;

    }

    else {

        monthDay = 31

        if (month == 1) {

            if (year / 4 - parseInt(year / 4) != 0) {

                monthDay = 28

            }

            else {

                monthDay = 29

            }

        }

    }

    return monthDay;

}

function changingBackground(id) {

    if (eval(id).style.backgroundColor != "yellow") {

        eval(id).style.backgroundColor = "yellow"

    }

    else {

        eval(id).style.backgroundColor = "#ffffff"

    }

}

function getCalendar() {

    var now = new Date
    var dates = now.getDate()
    var month = now.getMonth()
    var days = now.getDay()
    var year = now.getFullYear()
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    var yearArray = new Array()

    for (i = 0; i <= 4; i++) {

        yearArray[i] = year - 2 + i

    }

    var dayArray = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat")

    var text = ""
    text = "<form name=calendar>"
    text += "<table border=1>"
    text += "<tr><td>"
    text += "<table width=100%><tr>"
    text += "<td align=left>"
    text += "<select name=selectMonth onChange='changingCalendar()'>"

    for (i = 0; i <= 11; i++) {

        if (i == month) {

            text += "<option value= " + i + " Selected>" + monthArray[i] + "</option>"

        }

        else {

            text += "<option value= " + i + ">" + monthArray[i] + "</option>"

        }

    }

    text += "</select>"
    text += "</td>"
    text += "<td align=right>"
    text += "<select name=selectYear onChange='changingCalendar()'>"

    for (i = 0; i <= 4; i++) {

        if (i == 2) {

            text += "<option value= " + yearArray[i] + " Selected>" + yearArray[i] + "</option>"

        }

        else {

            text += "<option value= " + yearArray[i] + ">" + yearArray[i] + "</option>"

        }

    }

    text += "</select>"
    text += "</td>"
    text += "</tr></table>"
    text += "</td></tr>"
    text += "<tr><td>"
    text += "<table border=1>"
    text += "<tr>"

    for (i = 0; i <= 6; i++) {

        text += "<td align=center><span class=label>" + dayArray[i] + "</span></td>"

    }

    text += "</tr>"

    swapping = 0

    for (j = 0; j <= 5; j++) {

        text += "<tr>"

        for (i = 0; i <= 6; i++) {

            text += "<td align=center><span id=sp" + swapping + " onClick='changingBackground(this.id)'>1</span></td>"

            swapping += 1

        }

        text += "</tr>"

    }

    text += "</table>"
    text += "</td></tr>"
    text += "</table>"
    text += "</form>"

    document.write(text)

    changingCalendar()

}

function changingCalendar() {

    var now = new Date
    var dates = now.getDate()
    var month = now.getMonth()
    var days = now.getDay()
    var year = now.getFullYear()
    var currentMonth = parseInt(document.calendar.selectMonth.value)
    var previousMonth

    if (currentMonth != 0) {

        previousMonth = currentMonth - 1
    }

    else {

        previousMonth = 11

    }

    var currentYear = parseInt(document.calendar.selectYear.value)

    var monthYear = new Date()
    monthYear.setFullYear(currentYear)
    monthYear.setMonth(currentMonth)
    monthYear.setDate(1)

    var dayOne = monthYear.getDay()
    
    if (dayOne == 0) {

        dayOne = 7

    }

    var numberArray = new Array(41)
    var swapping

    for (i = 0; i < dayOne; i++) {

        numberArray[i] = maximumDay((previousMonth), currentYear) - dayOne + i + 1

    }

    swapping = 1

    for (i = dayOne; i <= dayOne + maximumDay(currentMonth, currentYear) - 1; i++) {

        numberArray[i] = swapping
        swapping += 1

    }

    swapping = 1

    for (i = dayOne + maximumDay(currentMonth, currentYear); i <= 41; i++) {

        numberArray[i] = swapping
        swapping += 1
    }

    for (i = 0; i <= 41; i++) {

        eval("sp" + i).style.backgroundColor = "#FFFFFF"
    }

    var day_counter = 0

    for (i = 0; i <= 41; i++) {

        if (((i < 7) && (numberArray[i] > 20)) || ((i > 27) && (numberArray[i] < 20))) {

            eval("sp" + i).innerHTML = numberArray[i]
            eval("sp" + i).className = "c3"
        }

        else {

            eval("sp" + i).innerHTML = numberArray[i]

            if ((day_counter == 0) || (day_counter == 6)) {

                eval("sp" + i).className = "c2"

            }

            else {

                eval("sp" + i).className = "c1"

            }

            if ((numberArray[i] == dates) && (month == currentMonth) && (year == currentYear)) {

                eval("sp" + i).style.backgroundColor = "#90EE90"

            }

        }

        day_counter += 1

        if (day_counter > 6) {

            day_counter = 0

        }

    }

}