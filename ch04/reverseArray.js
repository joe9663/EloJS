var reverseArray = function (array) {
  var counter = 1;
  var inverseArray = [];
  while (counter <= array.length) {
    inverseArray.push(array[array.length-counter])
    counter += 1;
  }
  return inverseArray;
}
