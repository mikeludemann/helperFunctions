function abbreviationName(string) {

    var split_names = string.trim().split(" "),
        lastElement = split_names.length - 1,
        text = "";

    if (split_names.length > 1) {

        for (i = 0; i < split_names.length; i++) {

            if (i < split_names.length - 1) {

                text += split_names[i] + " ";

            } else {

                text += split_names[lastElement].charAt(0) + ".";

            }

        }

        return text;

    } else {

        text += split_names[0];

    }

    return text;
}