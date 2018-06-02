// document.body.onload = addImg()
document.body.onload = addBlocks()
document.body.onload = display()

function display(){
  let wordElement = document.getElementById('word');
  let letterCountElement = document.getElementById('letterCount');
  let lettersGuessedElement = document.getElementById('lettersGuessed');

  const answer = 'cat';
  const allowedErrors = 7;
  let wrongGuesses = [];
  let rightGuesses = [];

  function addImg(){
    const img = document.createElement("IMG");
    img.src = 'gallows.jpg';
    if (wrongGuesses.length = 0){
    }
    const element = document.getElementById("img");
    element.appendChild(img);
  }

  addImg();
  
  for (let i = 0; i < word.length; i++) {
    rightGuesses.push('_');
  }

  wordElement.innerHTML = rightGuesses.join(' ');
  letterCountElement.innerHTML = allowedErrors;
 
  function updateErrors(letter) {
    allowedErrors--; // decrement guesses left
    letterCountElement.innerHTML = allowedGuesses;
  
    if (word.indexOf(letter) === -1) { // letter is NOT in the word
      wrongGuesses.push(letter); // update letters guessed
      lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    } else { // letter IS in the word
      // replace underscore with the letter
      for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          correctGuesses[i] = letter;
        }
      }
  
      wordElement.innerHTML = correctGuesses.join(' ');
    }
  }
  
  function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
      alert('You Won!');
    } else if (allowedGuesses === 0) {
      alert('You Lost!');
    }
  }
  
  document.onkeyup = function (event) {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
  };

}
  
  // if (wrongGuesses.length === allowedErrors{};

  // let validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  // const word = document.createElement("span");
  // word.innerHTML = '_ _ _'
  
  

  // const element = document.getElementById("hiddenAnswer");
  // element.appendChild(hiddenA);
  // const element = document.getElementById("word");
  // element.appendChild(word);


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
    block.onclick = changeColour

    
    const element = document.getElementById("letters")
    element.appendChild(block);
  }
}
