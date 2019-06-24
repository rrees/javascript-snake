
const size = 500;

const canvas = document.getElementById("bg");

const ctx = canvas.getContext('2d');

ctx.font = '50px serif';
ctx.fillText("Hello world", 0,50);

ctx.strokeRect(0, 0, size, size)
