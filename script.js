// Define HTML elements

const board = document.getElementById('game-board')

// Define game variables
// 20 rows and 20 colums
let snake = [{x: 10, y: 10}];

// Draw game map, snake, and food
function draw() {
  board.innerHTML = '';
  drawSnake();
}

// Draw snake
function drawSnake() {

}