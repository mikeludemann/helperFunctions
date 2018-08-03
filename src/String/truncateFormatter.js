function truncate(string, length) {

    if ((string.constructor === String) && (length > 0)) {

        return string.slice(0, length);

    }

};

function truncateFormat(string, length, ending) {

    if (length == null) {

        length;

    }

    if (ending == null) {

        ending = '...';

    }

    if (string.length > length) {

        return string.substring(0, length - ending.length) + ending;

    } else {

        return string;

    }
    
};