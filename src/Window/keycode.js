
document.onkeydown = getKeyCode();

function getKeyCode(e) {

    e = e || window.event;

    var keycode;

    if (window.event) keycode = window.event.keyCode;

    else if (e) keycode = e.which;

    return keycode;

}