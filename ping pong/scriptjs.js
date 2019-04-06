var leftplayer= document.querySelector('#leftplayer');
document.addEventListener('keypress', function(){
	var leftp=leftplayer.getBoundingClientRect();
	console.log(event.keyCode);
	if (event.key=='s' && (leftp.y + leftp.height <window.innerHeight)){
		leftplayer.style.top=(leftp.y +15) + 'px';

	}
	if (event.key=='w' && (leftp.top!=0)){
		leftplayer.style.top=(leftp.y -15) + 'px';

	}


});



var rightplayer= document.querySelector('#rightplayer');
var rightp;
document.addEventListener('keydown', function(){
	rightp=rightplayer.getBoundingClientRect();
	console.log("rightpp",rightp.y);
	//console.log(event.keyCode);
	if (event.keyCode=='40' && (rightp.y + rightp.height <window.innerHeight)){
		rightplayer.style.top=(rightp.y +15) + 'px';

	}
	if (event.keyCode=='38' && (rightp.top!=0)){
		rightplayer.style.top=(rightp.y -15) + 'px';

	}
});


var ball=document.querySelector('#ball');
function moveBall(){
	function randomGenerator(min, max){
	return Math.floor((Math.random()*(max-min))+min);
	}
	var movement;
	
	ball.addEventListener('mouseover', function(){

		clearInterval(movement);
		let ballX=ball.getBoundingClientRect().x;
		let ballY=ball.getBoundingClientRect().y;

		let newX= randomGenerator(0, window.innerWidth);
		let newY= randomGenerator(0, window.innerHeight);
		
		//console.log("mypos",posRP.y);
		let moveX=1;
		let moveY=1;

		if (newY<ballY){
			moveY = -1;
		}

		movement= setInterval(function(){

			// console.log("ball's current X",ballX);
			 console.log("ball's current Y",ballY);
			// console.log("inner",innerWidth);
			//console.log("rightp",posRP);

			if ((ballX>=innerWidth-58)  && (ballY>rightp.y && ballY<(rightp.y+100))){
				moveX=-1;
			}
			if ((moveX)==-1 && (ballX==30)){
				moveX=moveX*(-1);
			}
			if (ballY<=0){
				moveY=moveY*(-1);
			}
			if (ballY>=innerHeight){
				moveY=moveY*(-1);
			}
			ballX+= moveX;
			ballY+= moveY;
			ball.style.left=ballX+ 'px';
			ball.style.top= ballY+ 'px';

		},6);







	});
}

moveBall();