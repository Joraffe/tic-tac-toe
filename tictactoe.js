function parseBoard(string) {
  var rows = string.split('\n');
  var board = [];
  for (var i = 0; i < rows.length; i++) {
    board.push(rows[i].split('|'));
  }
  // Return an array of arrays
  return board;
}
