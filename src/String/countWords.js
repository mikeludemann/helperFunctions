function countWords(string) {
    
    if (typeof string === "string") {

        return string.trim().split(/\s+/).length;

    } else {

        return "Not a String";

    }

}