const musicDatabase = {
    brega: [
        { titulo: "01", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { titulo: "04", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { titulo: "07", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
    ],
    variada: [
        { titulo: "Batida Eletrônica", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { titulo: "Synthwave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { titulo: "Techno Beat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
    ]
};

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const nowPlaying = document.getElementById("nowPlaying");
const volumeControl = document.getElementById("volumeControl");
const genreSelect = document.getElementById("genreSelect");

let currentPlaylist = [];
let currentIndex = 0;
let isPlaying = false;

function updateNowPlaying(track) {
    nowPlaying.textContent = `Tocando agora: ${track.titulo}`;
}

function playTrack(index) {
    const track = currentPlaylist[index];
    audioPlayer.src = track.url;
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            updateNowPlaying(track);
            playPauseBtn.textContent = '⏸️ Pause';
        })
        .catch(err => console.error("Erro ao tocar:", err));
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶️ Play';
    } else {
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                playPauseBtn.textContent = '⏸️ Pause';
            });
    }
}

function loadPlaylist() {
    const genre = genreSelect.value;
    currentPlaylist = [...musicDatabase[genre]];
    currentIndex = Math.floor(Math.random() * currentPlaylist.length);
    playTrack(currentIndex);
}

playPauseBtn.addEventListener("click", togglePlayPause);
volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value;
});
genreSelect.addEventListener("change", loadPlaylist);
audioPlayer.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % currentPlaylist.length;
    playTrack(currentIndex);
});

// Inicialização
audioPlayer.volume = volumeControl.value;
loadPlaylist();
