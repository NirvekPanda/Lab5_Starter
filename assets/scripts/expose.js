// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  /* horn */
  const horn = document.getElementById('horn-select');
  horn.addEventListener('change', function Horn() {
    const hornType = horn.value; /* get the selected horn */
    let image = document.querySelector("#expose img") /* set picture */
    image.src = `assets/images/${hornType}.svg`;
    let audio = document.getElementsByClassName('hidden');
    audio.src = `assets/audio/${hornType}.mp3`;

  });

  /* volume */
  const volume = document.getElementById('volume');
  volume.addEventListener('change', function Volume() {
    let volumeVal = volume.value;
    let audio = document.querySelector('audio');
    let volumeImage = document.querySelector('#volume-controls img');

    /* change volume icon based on selected volume */
    if (volumeVal == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeVal < 34) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeVal < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
    /*console.log(volumeVal)*/
    audio.volume = (Number)(volumeVal / 100);
  });

  /* button */
  const button = document.querySelector('button');
  button.addEventListener('click', function Button() {
    const audio = document.getElementsByClassName('hidden');
    /*console.log(audio);*/
    const sound = new Audio(audio.src);
    sound.play();

    const hornType = document.getElementById('horn-select').value;
    if (hornType == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}