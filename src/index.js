const drumArray = document.querySelectorAll('.pad-img');

drumArray.forEach(function (drum) {
  drum.addEventListener('click', click);

  function click() {
    const getClass = this.firstElementChild.className;
    makeSound(getClass);
    setTimeout(resetColor, 100);
    function resetColor() {
      drum.style.borderColor = '#305863';
    }
  }
});

document.addEventListener('keydown', (event) => {
  makeSound(event.key);
});

document.addEventListener('keyup', (event) => {
  const keyPressed = event.key;
  document.querySelector('.' + keyPressed).style.borderColor = '#305863';
});

function makeSound(key) {
  switch (key) {
    case 's':
      let playSnare = new Audio('/sounds/snare.mp3');
      playSnare.play();
      document.querySelector('.s').style.borderColor = '#ffffff';
      break;

    case 'b':
      let playKick = new Audio('/sounds/kick.mp3');
      playKick.play();
      document.querySelector('.b').style.borderColor = '#ffffff';
      break;

    case 'h':
      let playHiHat = new Audio('/sounds/hi-hat.mp3');
      playHiHat.play();
      document.querySelector('.h').style.borderColor = '#ffffff';
      break;

    case 't':
      let playHiTom = new Audio('/sounds/hi-tom.mp3');
      playHiTom.play();
      document.querySelector('.t').style.borderColor = '#ffffff';
      break;

    case 'f':
      let playFloorTom = new Audio('/sounds/floor-tom.mp3');
      playFloorTom.play();
      document.querySelector('.f').style.borderColor = '#ffffff';
      break;

    case 'c':
      let playCrash = new Audio('/sounds/crash.mp3');
      playCrash.play();
      document.querySelector('.c').style.borderColor = '#ffffff';
      break;

    default:
      console.log(key);
  }
}
