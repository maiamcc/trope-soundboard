function stopAll() {
  const audios = document.getElementsByTagName("audio")
  for (let i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

function playOne(audio_id) {
  return new Promise(res=> {
    stopAll()
    const audio = document.getElementById(audio_id)
    audio.play()
    audio.onended = res
  })
}

async function playForButtonClick(event) {
  const audioId = event.target.getAttribute('data-associated-audio_id')
  await playOne(audioId)
}

async function playAllInDiv(event) {
  console.log(event)
  const audiosInDiv = event.target.parentElement.getElementsByTagName('audio')
  for (let i = 0; i < audiosInDiv.length; i++) {
      await playOne(audiosInDiv[i].id)
  }
}

window.addEventListener("DOMContentLoaded", function() {
  console.log('adding listeners')
  const buttons = document.getElementsByTagName("button")
  console.log('buttons:', buttons)
  // put the listener on all of them
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute('data-associated-audio_id') == 'all') {
      buttons[i].addEventListener('click', playAllInDiv)
    } else {
      buttons[i].addEventListener("click", playForButtonClick)
    }
  }
}, false);
