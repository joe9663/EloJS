var size = 8;
var columnCounter = 0;
var rowCounter = 0;
var chessBoard = '';
while (rowCounter < size) {
  while (columnCounter < (size + 1)) {
    if (columnCounter == size) {
      chessBoard += "\n";
      break;
    }
    else if (chessBoard.length % 2 == 0) {
      chessBoard += " ";
      columnCounter += 1;
    }
    else if (chessBoard.length % 2 == 1) {
      chessBoard += "#";
      columnCounter += 1;
    }
    else {
      break;
    }
  }
  columnCounter = 0;
  rowCounter += 1;
}
console.log(chessBoard);
