var reverseArray = function (array) {
  var counter = 1;
  var inverseArray = [];
  while (counter <= array.length) {
    inverseArray.push(array[array.length-counter])
    counter += 1;
  }
  return inverseArray;
}

var reverseArrayInPlace = function (array) {
  var holdingCell = [];
  var counter = 0;
  while (counter <= (Math.floor(array.length / 2))) {
    holdingCell.push(array[counter]);
    array[counter] = array[array.length - counter - 1];
    array[array.length - counter - 1] = holdingCell[counter];
    counter += 1;
  }
  return array;
}
