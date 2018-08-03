function longestSubstring(string) {

    var characters = string.split('');
    var currentCharacter;
    var text = "";
    var longestString = "";
    var hash = {};

    for (var i = 0; i < characters.length; i++) {

        currentCharacter = characters[i];

        if (!hash[characters[i]]) {

            text += currentCharacter;

            hash[characters[i]] = { index: i };

        }

        else {

            if (longestString.length <= text.length) {

                longestString = text;
            }

            var previousIndex = hash[currentCharacter].index,
                fromPreviousIndex = string.substring(previousIndex + 1, i);

            text = fromPreviousIndex + currentCharacter;

            hash = {};

            for (var j = previousIndex + 1; j <= i; j++) {

                hash[string.charAt(j)] = { index: j };

            }

        }

    }

    return longestString.length > text.length ? longestString : text;

} 