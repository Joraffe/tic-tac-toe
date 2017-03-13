function parseBoard(string) {
  var rows = string.split('\n');
  var board = [];
  for (var i = 0; i < rows.length; i++) {
    board.push(rows[i].split('|'));
  }
  // Return an array of arrays
  return board;
}

function printBoard(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    var row = arr[i];
    for (var j = 0; j < row.length; j++) {
      var spot = row[j];
      if (!spot) {
        str += ' ';
      } else {
        str += spot;
      }
      if (j !== row.length - 1) {
        str += '|';
      }
    }
    str += '\n';
  }
  return str;
}
