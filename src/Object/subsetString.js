String.prototype.subsetString = function () {

    var subsets = [];

    for (var m = 0; m < this.length; m++) {

        for (var n = m + 1; n < this.length + 1; n++) {

            subsets.push(this.slice(m, n));

        }

    }

    return subsets;

};