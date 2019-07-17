
const size = 500;

const backgroundColour = '#ffffff';
const foregroundColour = '#000000';

const canvas = document.getElementById("bg");

const ctx = canvas.getContext('2d');

ctx.font = '50px serif';
ctx.fillText("Hello world", 0,50);

ctx.strokeRect(0, 0, size, size)

const snake = [];

snake.push({x: canvas.width/2, y: canvas.height/2});

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
	snake.forEach(snakePart => {
		console.log(snakePart);
		drawBox(
			ctx,
			snakePart.x,
			snakePart.y,
			10,
			10,
			foregroundColour,
			);
	});
}

render();


let lastFrameTime = Date.now();

function update() {
	currentFrameTime = Date.now();
	let deltaTime = currentFrameTime - lastFrameTime
	lastFrameTime = currentFrameTime;
	console.log(deltaTime, currentFrameTime, lastFrameTime);
	
	render();
	window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

window.addEventListener('keyup', handleKeyPress, false);