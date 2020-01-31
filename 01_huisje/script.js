// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
context.beginPath()
context.moveTo(300,100);
context.lineTo(200,300);
context.lineTo(600,400);
context.lineTo(700,200);
context.lineTo(300,100);
context.fillStyle = "red";
context.closePath();
context.stroke();
context.fill();
context.lineWidth = "6";

context.beginPath()
context.moveTo(700 ,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.lineTo(700,200);
context.fillStyle = "grey";
context.closePath();
context.stroke();
context.fill();
context.lineWidth = "6";

context.beginPath()
context.moveTo(800 ,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.lineTo(800,300);
context.fillStyle = "grey";
context.closePath();
context.stroke();
context.fill();
context.lineWidth = "6";

context.beginPath()
context.moveTo(600 ,600);
context.lineTo(200,500);
context.lineTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.fillStyle = "grey";
context.closePath();
context.stroke();
context.fill();
context.lineWidth = "6";

context.beginPath()
context.moveTo(700,550);
context.lineTo(700,425);
context.lineTo(750,400);
context.lineTo(750,525);
context.fillStyle = "white";
context.lineWidth = "6";
context.closePath();
context.stroke();
context.fill();

