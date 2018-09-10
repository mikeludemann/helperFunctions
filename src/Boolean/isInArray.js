Array.prototype.isInArray = function (value) {

    for (var i = 0, l = this.length; i < l; i++) {

        if (this[i] == value) {

            return true;

        }

    }

    return false;

}