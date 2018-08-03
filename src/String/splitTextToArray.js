function splitTextToArray(string, size) {

    if (string == null) {

        return [];

    }
    
    string = String(string);

    size = ~~size;

    return size > 0 ? string.match(new RegExp('.{1,' + size + '}', 'g')) : [string];

}