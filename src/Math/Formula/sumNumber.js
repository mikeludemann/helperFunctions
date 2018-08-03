function sumNumber(array) {

  if (array.length === 1) {

    return array[0];

  }

  else {

    return array.pop() + array_sum(array);

  }

}