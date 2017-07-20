var countBs = function (word) {
  var counter = 0;
  var theBs = 0;
  while (counter < word.length) {
    if (word[counter] == "B") {
      theBs += 1;
      counter += 1;
    }
    else counter += 1;
  }
  return theBs;
}

var countChar = function (word, letter) {
  var counter = 0;
  var total = 0;
  while (counter < word.length) {
    if (word[counter] == letter) {
      total +=1;
      counter += 1;
    }
    else counter += 1;
  }
  return total;
}
