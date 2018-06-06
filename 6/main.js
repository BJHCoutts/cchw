document.body.onload = initializeGame();

function initializeGame() {
  
  const wordElement = document.getElementById('word');
  const letterCountElement = document.getElementById('letterCount');
  const lettersGuessedElement = document.getElementById('lettersGuessed');
  
  let img = document.createElement("IMG");
  img.src = 'gallows.jpg'
  let element = document.getElementById("img");
  element.appendChild(img);

  const wordList = ['incongruent', 'effulgent', 'koinonia', 'melancholy', 'vivacious'];
  
  Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
  }

  const word = wordList.sample();
  let allowedGuesses = 6;
  let wrongGuesses = [];
  let correctGuesses = [];

  for (let i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;

  function updateImg(x) {
    if (x === 5) {
      img.src = 'gallows+head.jpg'
    };
    if (x === 4) {
      img.src = 'gallows+head+torso.jpg'
    };
    if (x === 3) {
      img.src = 'gallows+head+torso+leg.jpg'
    };
    if (x === 2) {
      img.src = 'gallows+head+torso+2leg.jpg'
    };
    if (x === 1) {
      img.src = 'gallows+head+torso+2leg+arm.jpg'
    };
    if (x === 0) {
      img.src = 'gallows+head+torso+2leg+2arm.jpg'
    };

  }

  // initialize correctGuesses array with underscores

  function updateGuesses(letter) {
    allowedGuesses--; // decrement guesses left
    letterCountElement.innerHTML = allowedGuesses;
    updateImg(allowedGuesses);
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
      alert('You Won!');
    }
  }

  document.onkeyup = function (event) {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById(`${letterGuessed}`).style.background = 'red';
    updateGuesses(letterGuessed);
    checkWin();
  };

  function addBlocks() {
    for (let i = 10; i < 36; i++) {
      const block = document.createElement("span");
      block.id = `${i.toString(36)}`;
      block.innerHTML = `<span> ${i.toString(36)} </span>`;
      block.style.color = 'red';
      block.setAttribute = ('display', 'inline');
      block.style.border = "thin solid grey";
      block.style.borderRadius = ".25rem";
      block.style.display = "inline-block";
      block.style.textAlign = "center";
      block.style.width = "30px"
      
      function changeColour() {
        block.style.background = 'red';
        let letterGuessed = `${i.toString(36)}`;
        updateGuesses(letterGuessed);
        checkWin();
      }
      block.onclick = changeColour;
      // block.onmouseover.style.background = "red";
      
      const element = document.getElementById("letters")
      element.appendChild(block);
    }
  }
  addBlocks()
}