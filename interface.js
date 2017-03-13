var printBoard = require('./tictactoe').printBoard;
var winner = require('./tictactoe').winner;
var togglePiece = require('./tictactoe').togglePiece;
var readline = require('readline');

var board = [ [null, null, null],
              [null, null, null],
              [null, null, null]];

var currentPlayer = "X";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to tic-tac-toe!');
console.log();

var askForNextMove = function() {
  console.log('Here is the current board:')
  console.log(printBoard(board));
  console.log()
  if (winner(board) === 'Currently no winner!') {
    console.log(`It is now ${currentPlayer}\'s turn:`);
    rl.question('Please enter a row: ', row => {
      rl.question('Please enter a col: ', col => {
        togglePiece(board, currentPlayer, parseInt(row), parseInt(col));
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log()
        askForNextMove();
      });
    });
  } else {
    console.log('Here is the final board state:')
    console.log(printBoard(board));
    console.log(`Congratulations! Player ${winner(board)} is the winner!`);
    return rl.close();
  }
}

askForNextMove();
