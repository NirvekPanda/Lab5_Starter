// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Initialize the speech synthesis API

  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  // Populate the voice select dropdown on page load
  synth.onvoiceschanged = function () {
    let voices = synth.getVoices();
    voices.forEach((voice) => {
      let option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  };

  // Initialize the button for triggering speech
  const button = document.querySelector('button');
  // Handle button click
  button.addEventListener('click', function () {

    const textInput = document.getElementById('text-to-speak');
    const textVal = textInput.value;
    const textData = voiceSelect.selectedOptions[0].getAttribute('data-name');

    let utterance = new SpeechSynthesisUtterance(textVal);
    const selected_voice = synth.getVoices().find(voice => voice.name === textData);


    if (selected_voice) {
      // Initialize the image for the face
      const image = document.querySelector('img');
      // Change the image to open mouth while speaking
      image.src = 'assets/images/smiling-open.png';

      // Speak the text
      utterance.voice = selected_voice;
      synth.speak(utterance);

      // Change the image back to closed mouth when finished speaking
      utterance.onend = function () {
        image.src = 'assets/images/smiling.png';
      }
    };
  });

}