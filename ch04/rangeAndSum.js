var range = function (num1, num2, step) {
  rangeValues = [];
  counter = num1;
    if (num1 > num2) {
    while (counter >= num2) {
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
    while (counter <= num2) {
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
