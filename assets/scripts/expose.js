// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  /* horn */
  const horn = document.getElementById('horn-select');
  horn.addEventListener('change', function () {
    const hornType = horn.value;
    let image = document.querySelector("#expose img")
    image.src = `assets/images/${hornType}.svg`;
    let audio = document.getElementsByClassName('hidden');
    audio.src = `assets/audio/${hornType}.mp3`;

  });

  /* volume */
  const volume = document.getElementById('volume');
  volume.addEventListener('change', function () {
    let volumeVal = volume.value;
    let audio = document.querySelector('audio');
    let volumeImage = document.querySelector('#volume-controls img');
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
  button.addEventListener('click', function () {
    const audio = document.getElementsByClassName('hidden');
    const sound = new Audio(audio.src);
    console.log(sound);
    sound.play();

    const hornType = document.getElementById('horn-select').value;
    if (hornType == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    } /*used chatGPT for help here*/

  });

}