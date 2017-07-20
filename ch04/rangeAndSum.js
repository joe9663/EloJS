var range = function (num1, num2, step) {
  rangeValues = [];
  if (num1 < num2 == true) {
    counter = num1;
    while (counter < (num2 + 1)) {
      rangeValues.push(counter);
      if (step > 0 == true) {
        counter += step;
      }
      else if (step < 0 == true){
        counter -= step;
      }
      else counter += 1;
    }
  }
  else {
    counter = num2;
    while (counter < (num1 + 1)) {
      rangeValues.push(counter);
      if (step > 0 == true) {
        counter += step;
      }
      else if (step < 0 == true){
        counter -= step;
      }
      else counter += 1;
    }
  }
  return rangeValues;
}

var sum = function (range) {
  var total = 0;
  var counter = 0;
  while (counter < (range.length)) {
    total += range[counter];
    counter += 1;
  }
  return total;
}
