const drumLength = document.querySelectorAll('.drum').length;
const drumArray = document.querySelectorAll('.pad');

drumArray.forEach(function (drum) {
  drum.addEventListener('click', changeColor);

  function changeColor() {
    drum.style.borderColor = 'white';
  }
});

// let audio = new Audio('/sounds/snare.mp3');
// audio.play();
