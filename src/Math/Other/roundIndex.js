function roundIndex(number, index) {

    result = 0;

    if ((typeof number !== 'number')) {

        return false;

    }

    if (index == null || index == "" || typeof index !== 'number') {

        result = parseFloat(a.toFixed(1));

    } else {

        result = parseFloat(a.toFixed(index));

    }

    return result;

}