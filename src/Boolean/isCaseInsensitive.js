function isCaseInsensitive(String, searchString) {

  var result = String.search(new RegExp(searchString, "i"));

  if (result > 0) {

    return true;

  } else {

    return false;

  }

}