// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  var audio = document.getElementsByClassName('hidden');
  var volume = document.getElementById('volume');
  const horn = document.getElementById('horn-select');
  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  /* horn */
  horn.addEventListener('change', function Horn() {
    const hornType = horn.value; /* get the selected horn */
    let image = document.querySelector("#expose img") /* set picture */
    image.src = `assets/images/${hornType}.svg`;
    // let audio = document.getElementsByClassName('hidden');
    audio.src = `assets/audio/${hornType}.mp3`;

  });

  /* volume */

  volume.addEventListener('input', function Volume() {
    let volumeVal = volume.value;
    // let audio = document.querySelector('audio');
    let volumeImage = document.querySelector('#volume-controls img');
    audio.volume = (volumeVal / 100);
    /* change volume icon based on selected volume */
    if (volumeVal == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeVal > 0 && volumeVal < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeVal >= 33 && volumeVal <= 66) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
    /*console.log(volumeVal)*/
  });

  /* button */
  button.addEventListener('click', function Button() {
    /*console.log(audio);*/
    let sound = new Audio(audio.src);
    sound.play();

    const hornType = document.getElementById('horn-select').value;
    if (hornType == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}
