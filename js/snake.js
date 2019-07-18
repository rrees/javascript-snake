
const size = 500;
const pixelSize = 10;

const backgroundColour = '#ffffff';
const foregroundColour = '#000000';

const maxMoveTimer = 100;

const canvas = document.getElementById("bg");

const ctx = canvas.getContext('2d');

const snake = [];

snake.push({x: canvas.width/2, y: canvas.height/2});

const game = {
	over: false,
}

function handleKeyPress(event) {
	console.log(event);
}

function drawBox(context, x, y, width, height, colour) {
	context.beginPath();
	context.rect(x,y,width,height);
	context.fillStyle = colour;
	context.fill();
	context.closePath();
}

function render() {
	drawBox(
		ctx,
		0,
		0,
		size,
		size,
		backgroundColour
	);
	ctx.strokeRect(0, 0, size, size)

	if(game['over']) {
		ctx.font = '50px serif';
		ctx.fillStyle = foregroundColour;
		ctx.fillText("Game over!", 0, 50);
		return;
	}

	snake.forEach(snakePart => {
		console.log(snakePart);
		drawBox(
			ctx,
			snakePart.x,
			snakePart.y,
			pixelSize,
			pixelSize,
			foregroundColour,
			);
	});
}

render();


let lastFrameTime = Date.now();
let moveTimer = 0;

let nextMove = [0, -1];

function checkCollision() {
	const snakeHead = snake[0];
	if(snakeHead.x < 0 || snakeHead.y < 0) {
		game['over'] = true;
	}
}

function update() {
	currentFrameTime = Date.now();
	let deltaTime = currentFrameTime - lastFrameTime;

	lastFrameTime = currentFrameTime;
	moveTimer += deltaTime;

	if( moveTimer > maxMoveTimer) {
		moveTimer = 0;

		const [nextX, nextY] = nextMove;

		const snakeHead = snake[0];

		snakeHead.x += nextX * pixelSize;
		snakeHead.y += nextY * pixelSize;
		console.log(snake);
	}

	console.log(deltaTime, currentFrameTime, lastFrameTime, moveTimer);
	console.log(game);

	checkCollision();
	render();
	if (!game['over']) {
		window.requestAnimationFrame(update);
	}
}

window.requestAnimationFrame(update);

window.addEventListener('keyup', handleKeyPress, false);