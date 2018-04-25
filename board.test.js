const board = require('./board.js')

test('adds 1 + 2 to equal 3', () => {
  expect(1).toBe(1)
})

// create a board and test size
test('correctly creates a board', () => {
  const newBoard = board.seedBoard()
  expect(newBoard.length).toBe(20)
  expect(newBoard[0].length).toBe(80)
}) 

// test the live neighbour count
test('it correctly counts the number of live neighbours', () => {
  const newBoard = [
                    [false, false, true],
                    [true, false, true],
                    [true, true, false]
                  ]
  expect(board.cellNeighbours(2, 2, newBoard)).toBe(2)
  expect(board.cellNeighbours(1, 1, newBoard)).toBe(5)
  expect(board.cellNeighbours(5, 5, newBoard)).toBe(0)
})

// test the tick correctly applies the game rules
test('rules are properly applied to board tick', () => {
  const newBoard = [
    [false, true, false],
    [true, true, false]
  ]
  const nextGeneration = board.boardTick(newBoard)
  const expectedBoard = [
    [true, true, false],
    [true, true, false]
  ]
  expect(nextGeneration).toEqual(expectedBoard)
})
