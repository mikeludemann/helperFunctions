function mediaqueries(querySize) {
    if (querySize.matches) {
        // Matching Code
    } else {
        // Default Code
    }
}

var size = window.matchMedia("(max-width: 700px)");

myFunction(size);

size.addListener(myFunction);