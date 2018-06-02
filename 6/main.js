// document.body.onload = addImg()
document.body.onload = addBlocks()
// document.body.onload = display()



let word;
let allowedGuesses;
let correctGuesses;
let wrongGuesses;

const wordElement = document.getElementById('word');
const letterCountElement = document.getElementById('letterCount');
const lettersGuessedElement = document.getElementById('lettersGuessed');

function initializeGame() {
  const wordList = ['incongruent','effulgent','koinonia','melancholy','vivacious'];
  Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }
  word = wordList.sample();
  allowedGuesses = 7;
  wrongGuesses = [];
  correctGuesses = [];

  let img = document.createElement("IMG");
  img.src = 'gallows.jpg'
  let element = document.getElementById("img");
  element.appendChild(img);

  
  function updateImg(){
  let img = document.createElement("IMG");
  if (allowedGuesses = 6){
      img.src = 'gallows+head.jpg';}
    // }else if (allowedGuesses = 6){
    //   img.src = 'gallows2.jpg';
    // }
    let element = document.getElementById("img");
    element.appendChild(img);
  }

  

  // initialize correctGuesses array with underscores
  for (let i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
  allowedGuesses--; // decrement guesses left
  letterCountElement.innerHTML = allowedGuesses;
  if (allowedGuesses === 0) {
    alert('You Lost!');
  }

  if (word.indexOf(letter) === -1) { // letter is NOT in the word
    wrongGuesses.push(letter); // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(' ');
  }
}

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    alert('You Won!');}
  // } else if (allowedGuesses === 0) {
  //   alert('You Lost!');
  // }
}

document.onkeyup = function (event) {
  let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  updateImg();
  checkWin();
};

initializeGame();

function addBlocks(){
  for (let i = 10; i < 36; i++) {
    const block = document.createElement("span");
    block.id = `${i}`;
    block.innerHTML = `<span> ${i.toString(36)} </span>`;
    block.style.color = 'red';
    block.setAttribute = ('display','inline');
    block.style.border = "thin solid grey";
    block.style.borderRadius = ".25rem";
    block.style.display = "inline-block";
    block.style.textAlign = "center";
    block.style.width = "30px"

    function changeColour(){
      block.style.background = 'red';
      
    }
    block.onclick = changeColour;
    // block.onmouseover.style.background = "red";
    
    const element = document.getElementById("letters")
    element.appendChild(block);
  }
}
