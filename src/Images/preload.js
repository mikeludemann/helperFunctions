var images = new Array();

function preloader() {

    for (i = 0; i < preloader.arguments.length; i++) {

        images[i] = new Image();

        images[i].src = preloader.arguments[i];

    }

}