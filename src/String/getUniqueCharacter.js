function getUniqueCharacter(string) {

    var text = string;

    var uniqueList = "";

    for (var x = 0; x < text.length; x++) {

        if (uniqueList.indexOf(text.charAt(x)) == -1) {

            uniqueList += text[x];

        }

    }

    return uniqueList;

} 