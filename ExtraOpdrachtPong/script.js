// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let ball ={};

ball.x = 300;
ball.y = 350;
ball.speedX = 3;
ball.speedY = 4;

ball.update = () =>{
	ball.x += ball.speedX
	ball.y += ball.speedY
	ball.width = 20;
	if(ball.y >canvas.height - ball.widht){
		ball.speedY = ball.speedY;
	}
}

ball.draw = function(){
	context.fillRect(100,100,20,20);
}

function loop(){
	ball.update();
	ball.draw();
}

// hier kun je op de canvas tekenen
setInterval(loop,10)
ball.draw();

