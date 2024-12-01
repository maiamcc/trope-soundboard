// list of Objects, where each Object represents a single row's
// worth of buttons, and every element in the Object is a button's
// text mapped to the corresponding audio file. Assume all audio
// file paths are relative to the `/audio` directory.
filesAndTitles = [
  {
    'Orchestra': 'orchestra.wav',
    'Cheer': 'cheer.wav',
    'Game over': 'game-over.wav',
  },
  {
    'אֶתְנַחְתָּ֑א': 'cheer.wav',
    'אָלֶף־בֵּית עִבְרִי': 'game-over.wav',
  }
];

// -- Funcs to play/stop sound --
function stopAll() {
  const audios = document.getElementsByTagName('audio');
  for (let i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

function playOne(audio_id) {
  return new Promise(res => {
    stopAll();
    const audio = document.getElementById(audio_id);
    audio.play();
    audio.onended = res;
  });
}

async function playForButtonClick(event) {
  const audioId = event.target.getAttribute('data-associated-audio_id');
  await playOne(audioId);
}

async function playAllInDiv(event) {
  console.log(event);
  const audiosInDiv = event.target.parentElement.getElementsByTagName('audio');
  for (let i = 0; i < audiosInDiv.length; i++) {
      await playOne(audiosInDiv[i].id);
  }
}

// -- Funcs to populate page --
function addButtonForAudio(i, buttonText, audioPath, containerElem) {
  const audioId = 'sound'+i;
  const audioElem = document.createElement('audio');
  audioElem.id = audioId;
  audioElem.setAttribute('src', audioPath);
  audioElem.setAttribute('preload', 'auto');

  const btn = document.createElement('button');
  btn.setAttribute('data-associated-audio_id', audioId);
  btn.innerHTML = buttonText;
  btn.addEventListener('click', playForButtonClick);

  containerElem.append(audioElem);
  containerElem.append(btn);
}

function addPlayAllButtonForRow(containerElem) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Play all';
  btn.addEventListener('click', playAllInDiv);

  containerElem.append(btn);
}

function addButtons(fileMap, containerElem) {
  // Expects a file map of the form
  //     [
  //        {
  //          <button text1>: <audio path1>,
  //          <button text2>: <audio path2>,
  //         },
  //        ...
  //     ]
  count = 0;  // counter so we can give a unique ID to all buttons
  for (let i = 0; i < fileMap.length; i++) {
    // For every row...
    const rowContainer = document.createElement('div');
    for (let [text, relPath] of Object.entries(fileMap[i])) {
      const path = './audio/' + relPath;
      addButtonForAudio(count, text, path, rowContainer);
      count += 1;
    }
    addPlayAllButtonForRow(rowContainer);

    // then add the row container to the page
    containerElem.append(rowContainer);
  }
}
// Actually populate the page + add event listeners
window.addEventListener('DOMContentLoaded', function() {
  console.log('populating ur page bro');
  const container = document.getElementById('soundboard');
  addButtons(filesAndTitles, container);
}, false);
