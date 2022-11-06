const drumArray = document.querySelectorAll('.pad');

// function KeyInput(keyChar){
//     this.matchKey = function(keyChar){
//         keyChar
//     }
// }

// const newKey = new KeyInput(pressKey);
// newKey.matchKey();

// const foo = detectKey(event);

drumArray.forEach(function (drum) {
  drum.addEventListener('click', playDrum);
  document.addEventListener('keydown', playDrum);

  function DrumKit(snare, kick, hiHat, hiTom, floorTom, crash) {
    this.snare = snare;
    this.kick = kick;
    this.hiHat = hiHat;
    this.hiTom = hiTom;
    this.floorTom = floorTom;
    this.crash = crash;
  }

  const drumPart = new DrumKit('s', 'b', 'h', 't', 'f', 'c');

  function playDrum(event) {
    const getKey = event.key;
    const getClass = this.firstElementChild.className;

    switch (getClass) {
      case 's':
        let playSnare = new Audio('/sounds/snare.mp3');
        playSnare.play();
        break;

      case 'b':
        let playKick = new Audio('/sounds/kick.mp3');
        playKick.play();
        break;

      case 'h':
        let playHiHat = new Audio('/sounds/hi-hat.mp3');
        playHiHat.play();
        break;

      case 't':
        let playHiTom = new Audio('/sounds/hi-tom.mp3');
        playHiTom.play();
        break;

      case 'f':
        let playFloorTom = new Audio('/sounds/floor-tom.mp3');
        playFloorTom.play();
        break;

      case 'c':
        let playCrash = new Audio('/sounds/crash.mp3');
        playCrash.play();
        break;

      default:
        console.log(getClass);
    }
  }
});
