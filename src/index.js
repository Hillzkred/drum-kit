const drumArray = document.querySelectorAll('.pad');

drumArray.forEach(function (drum) {
  drum.addEventListener('click', click);

  function click() {
    const getClass = this.firstElementChild.className;
    makeSound(getClass);
  }

  document.addEventListener('keydown', (event) => {
    makeSound(event.key);
  });

  document.addEventListener('keyup', (event) => {
    document.querySelector('.snare').style.borderColor = '#305863';
    document.querySelector('.kick').style.borderColor = '#305863';
    document.querySelector('.hi-hat').style.borderColor = '#305863';
    document.querySelector('.hi-tom').style.borderColor = '#305863';
    document.querySelector('.floor-tom').style.borderColor = '#305863';
    document.querySelector('.crash').style.borderColor = '#305863';
  });

  function makeSound(key) {
    switch (key) {
      case 's':
        let playSnare = new Audio('/sounds/snare.mp3');
        playSnare.play();
        document.querySelector('.snare').style.borderColor = '#ffffff';
        break;

      case 'b':
        let playKick = new Audio('/sounds/kick.mp3');
        playKick.play();
        document.querySelector('.kick').style.borderColor = '#ffffff';
        break;

      case 'h':
        let playHiHat = new Audio('/sounds/hi-hat.mp3');
        playHiHat.play();
        document.querySelector('.hi-hat').style.borderColor = '#ffffff';
        break;

      case 't':
        let playHiTom = new Audio('/sounds/hi-tom.mp3');
        playHiTom.play();
        document.querySelector('.hi-tom').style.borderColor = '#ffffff';
        break;

      case 'f':
        let playFloorTom = new Audio('/sounds/floor-tom.mp3');
        playFloorTom.play();
        document.querySelector('.floor-tom').style.borderColor = '#ffffff';
        break;

      case 'c':
        let playCrash = new Audio('/sounds/crash.mp3');
        playCrash.play();
        document.querySelector('.crash').style.borderColor = '#ffffff';
        break;

      default:
        console.log(key);
    }
  }
});
