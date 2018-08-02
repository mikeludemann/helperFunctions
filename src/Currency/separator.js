function separatorThousand(number) {

    var number_parts = number.toString().split(".");

    number_parts[0] = number_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return number_parts.join(",");

}