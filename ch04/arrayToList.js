var arrayToList = function (array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i -= 1) {
    list = {value: array[i], rest: list};
  }
  return list;
}
