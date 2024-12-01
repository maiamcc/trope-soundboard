function stopAll() {
  const audios = document.getElementsByTagName("audio")
  for (let i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

function playOne(audio_id) {
  stopAll()
  const audio = document.getElementById(audio_id)
  audio.play()
}

function playForButtonClick(event) {
  const audioId = event.target.getAttribute('data-associated-audio_id')
  playOne(audioId)
}

window.addEventListener("DOMContentLoaded", function() {
  console.log('adding listeners')
  const buttons = document.getElementsByTagName("button")
  console.log('buttons:', buttons)
  // put the listener on all of them
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playForButtonClick)
  }
}, false);