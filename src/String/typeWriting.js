var i = 0,
    text = 'Hello Everybody. That is cool.',
    speed = 50;

function typeWriting() {

    if (i < text.length) {

        // Replace 'xxx' with Selector where the text should be placed.
        document.querySelector(xxx).innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriting, speed);

    }

}