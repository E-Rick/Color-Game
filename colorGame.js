var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  //mode button event listneners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //ADD CLICK LISTENERS TO SQUARES
    squares[i].addEventListener("click", function() {
      //GRAB COLOR OF CLICKED SQUARE
      var clickedColor = this.style.backgroundColor;
      //COMPARE COLOR TO pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again.";
      }
    });
  }
}

function reset() {
  //GENERATE ALL NEW COLORS
  colors = generateRandomColors(numSquares);
  //PICK A NEW RANDOM COLOR FROM ARRAY
  pickedColor = pickColor();
  //CHANGE colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //CHANGE COLORS OF SQUARES
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //LOOP THROUGH ALL SQUARES
  for (var i = 0; i < squares.length; i++) {
    //CHANGE EACH COLOR TO MATCH GIVEN
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //MAKE AN ARRAY
  var arr = [];
  //REPEAT NUM TIMES
  for (var i = 0; i < num; i++) {
    //GET RANDOM COLOR AND PUSH INTO ARR
    arr.push(randomColor());
  }
  //RETURN THAT ARRAY
  return arr;
}

function randomColor() {
  //PICK A "RED" FROM 0 - 255
  var r = Math.floor(Math.random() * 256);
  //PICK A "GREEN" FROM 0 - 255
  var g = Math.floor(Math.random() * 256);
  //PICK A "BLUE" FROM 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
