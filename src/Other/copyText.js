function copyText(element) {

    var copyText = document.querySelector(element);

    copyText.select();

    document.execCommand("copy");

}