// import the readline module and create a terminal interface
const readline = require("readline")
const rl = readline.createInterface(process.stdin, process.stdout)

// import the game logic
const gameBoard = require('./board.js')

// game start menu
const gameMenu = () => {
  rl.question('To start the game press 1. To exit press 2. \n', (answer) => {
    if (answer === '1') { 
      let newGameBoard = gameBoard.seedBoard() // create a new game board with random cell values
      gameBoard.runGame(newGameBoard) // start a new game with this board
    }
    else if (answer === '2') {
      console.log("Goodbye!")
      return rl.close()
    } else {
      console.log('Entry not recognised.\n')
      startGame()
    }
  })
}

// terminal script
console.log('\033c') // clear the console
console.log("Welcome to Conway's Game of Life")
gameMenu()
