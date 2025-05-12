const musicDatabase = {
    brega: [
        { titulo: "Bregão do JaJa", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/brega/01+Tudo+Fizeram+Para+Me+Derrotar.mp3" },
        { titulo: "Bregão do JaJa", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/brega/03-Sarah.mp3" }
    ],
    Pop: [
        { titulo: "construção", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/pop/Michael+Jackson.mp3" },
        { titulo: "construção", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/pop/Peter+Schilling.mp3" },
        { titulo: "construção", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/pop/Milli+Vanilli.mp3" },
        { titulo: "construção", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/pop/Rockwell.mp3" },
        { titulo: "construção", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/pop/Shangri-La+Frontier+2+season.mp3" }
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
