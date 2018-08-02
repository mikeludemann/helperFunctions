function modulo(x, y) {

    if(typeof x == 'number' && typeof y == 'number'){

        var result = x % y;

        var remainder;

        if(result === 0){

            remainder = 0;

        } else {

            remainder = result;

        }

        return remainder;

    } else {

        return false;

    }

}