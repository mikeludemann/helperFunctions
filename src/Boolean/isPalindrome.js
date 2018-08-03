function isPalindrome(string) {

    var reverse = string.split("").reverse().join("");

    return string == reverse;

}