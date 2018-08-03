function longestWord(string) {

    var search = string.match(/\w[a-zA-Z]{0,}/gi),
    result = search[0];

    for (var x = 1; x < search.length; x++) {

        if (result.length < search[x].length) {

            result = search[x];

        }

    }

    return result;

}

function shortestWord(string) {

    var search = string.match(/\w[a-zA-Z]{0,}/gi),
    result = search[0];

    for (var x = 1; x < search.length; x++) {

        if (result.length > search[x].length) {

            result = search[x];

        }

    }

    return result;

}