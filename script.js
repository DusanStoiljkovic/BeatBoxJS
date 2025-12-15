const drumSounds = {
  E: 'sounds/crash.wav',
  R: 'sounds/ride.wav',
  F: 'sounds/tom-low.wav',
  G: 'sounds/tom-mid.wav',
  H: 'sounds/tom-high.wav',
  V: 'sounds/kick.wav',
  B: 'sounds/snare.wav',
  J: 'sounds/snare.wav', 
  I: 'sounds/hihat-open.wav',
  K: 'sounds/hihat-close.wav'
}

function playSound(key) {
    const sound = drumSounds[key.toUpperCase()];
    if(!sound) return;

    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();

    const button = document.querySelector(`.drum[data-key="${key.toUpperCase()}"]`);
    if(!button) return;

    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 100);
}

window.addEventListener('keydown', (e) => {
    playSound(e.key);
});