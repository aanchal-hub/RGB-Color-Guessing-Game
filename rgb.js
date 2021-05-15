//variable to check which mode
var numberOfSquares = 6;
var colors = [];
//selecting correct color rgb for guessing
var pickedColor;//randomly choosed number through function

//selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

//what to display when page loads?
//init() function here will load all the things to display once page is loaded
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//event listener for mode buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected"); //remove any  classes first
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected"); // now add class to clicked button 
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			}else{
				numberOfSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares(){
	//give color to each square 
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "correct";
				//changing bakground of all squares to correct color
				changeColors(clickedColor);
				//change h1 to correct color
				h1.style.backgroundColor = pickedColor;
				//change new color button to play again
				resetButton.textContent = "play again";
			}
			else{
				messageDisplay.textContent  = "wrong";
				//change color of that wrong color to same as background so it looks like as if it's invisible
				this.style.backgroundColor = "#232323";
			}
		});
	}
}


//repeated code function
function reset(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";
	resetButton.textContent = "new colors";

}

// //easy mode function here
// easyBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i]; 
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

// //easy mode function here
// hardBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares = 6
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i]; 
// 		}
// 			squares[i].style.display = "block";
// 	}
// });


colorDisplay.textContent = pickedColor;

//reset button function
resetButton.addEventListener("click", function(){
	reset();
});




//a function where color of all squares will be changed to correct color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to macth the correct given color
		squares[i].style.background = color;
	}
}

//a function to pick a random color by using math.random
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var  arr = []
	for(var i = 0; i < num; i++){
		//add num random colors to array
		arr.push(randomColor());
	}
	//return that array
	return  arr;
};

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a red from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a red from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";

}