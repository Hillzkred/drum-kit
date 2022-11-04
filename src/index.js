document.querySelector('.drum')[i].addEventListener('click', playSound);

function playSound() {
  for (i = 0; i < getElementsByClassName('.drum').length; i++) {
    let audio = new Audio('mp3/snare.pm3');
    audio.play();
  }
}
