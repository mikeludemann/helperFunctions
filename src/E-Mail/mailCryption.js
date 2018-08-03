var mailCryption = {

    link: function (url, text) {

        document.write("<a href=\"mailto:" + this.decode(url) + "\">" + this.decode(text) + "</a>");

    },

    go: function (c) {

        location.href = "mailto:" + this.decode(c);

    },

    decode: function (c) {

        var l = c.length - 1, i = c.charCodeAt(l) - 32, o = "", p;

        while (i < l) {

            p = c.charCodeAt(i) - 32;

            o += c.charAt(p);

            i = i < p ? p + 1 : i + 1;
        }

        return o;
        
    },

    encode: function (v, s) {

        var e = s, i;

        for (i = 0; i < v.length; i++) {

            var c = v.charAt(i), p = e.indexOf(c);

            if (p < 0) {

                e += String.fromCharCode(e.length + 33) + c;

            } else {

                e += String.fromCharCode(p + 32);

            }

        }

        e += String.fromCharCode(s.length + 32);

        return e;

    }

}