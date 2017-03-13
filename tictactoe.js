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

function winner(arr) {
  var rowWinner = arr.reduce(function(player, row) {
    if (player.length === 1) {
      return player;
    } else {
      var combinedRow = row.reduce(function(combRow, spot) {
        combRow += spot;
        return combRow;
      }, '');
      // console.log('combinedRow', combinedRow)

      if (combinedRow === 'XXX') {
        return 'X';
      } else if (combinedRow === 'OOO') {
        return 'O';
      } else {
        return '';
      }
    }
  }, '');

  if (rowWinner !== '') {
    return rowWinner;
  }

  var colWinner = '';
  for (var i = 0; i < arr.length; i++) {
    var combCol = '';
    arr.forEach(function(row) {
      combCol += row[i];
    });
    if (combCol === 'XXX') {
      colWinner = 'X';
    } else if (combCol === 'OOO') {
      colWinner = 'O';
    }
  }

  if (colWinner !== '') {
    return colWinner;
  }

  var diagWinner = '';
  var downRightDiag = arr[0][0] + arr[1, 1] + arr[2, 2];
  if (downRightDiag === 'XXX') {
    diagWinner = 'X';
  } else if (downRightDiag === 'OOO') {
    diagWinner = 'O';
  }

  var downLeftDiag = arr[0, 2] + arr[1, 1] + arr[2, 0];
  if (downLeftDiag === 'XXX') {
    diagWinner = 'X';
  } else if (downLeftDiag === 'OOO') {
    diagWinner = 'O';
  }

  if (diagWinner !== '') {
    return diagWinner;
  }

  return 'Currently no winner!';

}

function togglePiece(board, player, row, col) {
  var spot = board[row][col];
  if (!spot) {
    board[row][col] = player;
  }
}

module.exports = {
  parseBoard: parseBoard,
  printBoard: printBoard,
  winner: winner,
  togglePiece: togglePiece
};
