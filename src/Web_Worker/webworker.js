function webWorker(url, element) {

    var w;

    function starting() {

        if (typeof (Worker) !== "undefined") {

            if (typeof (w) == "undefined") {

                w = new Worker(url);

            }

            w.onmessage = function (event) {

                document.querySelector(element).innerHTML = event.data;

            };

        } else {

            document.querySelector(element).innerHTML = "Not supporting Browser for Web Worker";

        }

    }

    function stopping() {

        w.terminate();

        w = undefined;

    }

}