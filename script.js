// Define HTML elements

const board = document.getElementById("game-board");

// Define game variables
// 20 rows and 20 colums
let snake = [{ x: 10, y: 10 }];

// Draw game map, snake, and food
function draw() {
  board.innerHTML = "";
  drawSnake();
}

// Draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake')
    setPosition(snake, segment)
    board.appendChild(snakeElement);
  })
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

// Set the position of snake or food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// Testing Draw Function 
draw();