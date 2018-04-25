// random boolean generator
const randomBoolean = () => Math.random() >= 0.5

// create the game board with default dimensions (20 rows, 80 columns)
const createBoard = () => Array(20).fill(Array(80).fill(null))

// seed each row of the game board with a random boolean value 
const seedBoard = () => createBoard().map(row => row.map(cell => randomBoolean() ))

// render the board to the console (true = alive, false = dead)
const displayBoard = (currentBoard) => currentBoard.map(row => {
  let displayRow = "" 
  row.forEach(cell => cell ? displayRow += "\u25CF" : displayRow += " ")
  return console.log(displayRow) 
})

// count how many live neighbours a given cell coordinate has
const cellNeighbours = (rowCoordinate, columnCoordinate, currentBoard) => {
  let liveNeighbours = 0 // track the number of live neighbours

  // [row, column] modifiers to get the coordinates for each position around a given cell
  const coordModifiers = [
    [-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]
  ]

  // apply each of the modifiers to the coordinates passed in
  coordModifiers.forEach(modifier => {
    // the indices of the row and column being checked
    let rowIndex = rowCoordinate + modifier[0]
    let columnPosition = columnCoordinate + modifier[1]
    // check whether the coordinates being checked are on the game board
    let coordCheck = rowIndex >= 0 && rowIndex < currentBoard.length 
                    && columnPosition >= 0 && columnPosition < currentBoard[0].length 
    // increment the live neighbours count if the cell is alive and on the game board
    if (coordCheck && currentBoard[rowIndex][columnPosition]) liveNeighbours++
  })

  return liveNeighbours
} 

// accepts the current board, applies the Game of Life rules, and returns a new game board representing the next generation
const boardTick = (currentBoard) => currentBoard.map((row, rowIndex) => {
  return row.map((cell, columnIndex) => {
    // count the number of live neighbours that board position has
    let liveNeighbourCount = cellNeighbours(rowIndex, columnIndex, currentBoard)
    // the cell dies if it's alive and it has fewer than two neighbours, or more than three neighbours (Rules 1 & 3)
    if (cell) {
      if (liveNeighbourCount < 2 || liveNeighbourCount > 3) return false
      return true // otherwise, the cell remains alive
    // a dead cell comes to life if it has exactly three neighbours (Rule 4)
    } else {
      if (liveNeighbourCount === 3) return true
      return false
    } 
  })
})

// run the game recursively
const runGame = (gameBoard) => {
  console.log('\033c') // clear the console
  displayBoard(gameBoard) // display the game board passed in
  // after half a second, calculate the board's next generation and recursively call runGame
  setTimeout(() => {
    let newBoard = boardTick(gameBoard)
    runGame(newBoard)
  }, 500)
}

module.exports = {
  seedBoard,
  runGame,
  cellNeighbours,
  createBoard,
  boardTick
}

