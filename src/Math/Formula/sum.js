function sumNumber(array) {

  if (array.length === 1) {

    return array[0];

  }

  else {

    return array.pop() + array_sum(array);

  }

}

function sum(array) {

  if (toString.call(array) !== "[object Array]")

    return false;

  var total = 0;

  for (var i = 0; i < array.length; i++) {

    if (isNaN(array[i])) {

      continue;

    }

    total += Number(array[i]);

  }

  return total;

}