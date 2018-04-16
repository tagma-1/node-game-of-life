# Node.js - Game of Life

### Overview
This is a simple terminal application to implement Conway's classic [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Game of Life"). Built using Node.js.

#### Functional Programming Approach
The application was built using a functional programming approach, namely: 
- pure functions are used for core game logic (although not perfectly, some still have side effects); and
- the initial game data is immutable and flows through the game's functions to calculate and display new generations.

#### Data Structure
The data is simply structured as an array (the game board) of arrays (each row on the game board) which each contain a series of boolean values (the cells, which are either alive/true or dead/false). Each cell is randomly set to alive or dead at the start of the game.

#### FP vs OOP

I have  previously implemented the Game of Life using an object-oriented approach in Ruby - with a mutable data structure (an array of cell objects which each store their own coordinates). 

The key advantage of functional programming in this instance is that data immutability makes it simple to apply Conway's four rules when determining the next generation - the function simply works out which cells live and die based on the current game board array as it is being mapped to a new game board array. 

By contrast, a programmer needs to be careful when using mutable data structures for the Game of Life to ensure that the application of Conway's rules to one cell does not affect any subsequent calculations in the same generation. For example, if you determine that Cell A (an object) dies and you delete it from the game board array, this will affect the calculation of how many neighbours Cell B has. 

### Instructions

1.  Download or clone the application repository.
2.  Ensure that Node.js is installed.
3.  Navigate to the application directory in your terminal.
4.  Install application dependencies.

	`
	yarn install
	`
	
5. Run the application

	`
	node game.js
	`

### Usage
When the application has loaded, press 1 and then enter to start the game. 

