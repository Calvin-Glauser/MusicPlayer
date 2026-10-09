
const SONGS = [
  'Thinking Out Loud',
  'Blinding Lights',
  'Levitating',
  'Bohemian Rhapsody',
  'Hey Jude',
];



const playlist = new DoublyLinkedList();
SONGS.forEach((title) => playlist.append(title))



let isPlaying = false;


const nowPlayingEl = document.getElementById('nowPlaying');
const playlistEl = document.getElementById('playlist');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');


function render() {
  const title = playlist.getCurrent();

  if (title == null) {
    nowPlayingEl.textContent = 'Playlist is empty';
    playBtn.disabled = true;
    playBtn.textContent = 'Play';
    return;
  }

  nowPlayingEl.textContent = `${isPlaying ? 'Playing' : 'Paused'}: ${title}`;
  playBtn.textContent = isPlaying ? 'Pause' : 'Play';
  playBtn.disabled = false;
  renderPlaylist();
}


function renderPlaylist() {
  playlistEl.innerHTML = '';

  let node = playlist.head;
  while (node !== null) {
    const li = document.createElement('li');
    li.textContent = node.value;

    if (node === playlist.current) {
      li.classList.add('is-current');
    }

    playlistEl.appendChild(li);
    node = node.next;
  }
}

prevBtn.addEventListener('click', () => {
  playlist.movePrev();
  render();
});

nextBtn.addEventListener('click', () => {
  playlist.moveNext();
  render();
});

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  render();
});

render();

window.playlist = playlist;
