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
    ],
    vozao: [
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/20+Anos+de+Moral.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/A+Minha+Vida+%C3%89+Te+Seguir.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cear%C3%A1+Vivo+essa+Paix%C3%A3o.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cearamor+-+A+TOC+%C3%89+O+Poder.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cearamor+-+Alem%C3%A3o+Passa+Mal.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cearamor+-+Aquela+torcidinha.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cearamor+-+Liga+pro+zool%C3%B3gico.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Cearamor+-+Se+tocar+o+expulsa+expulsa.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Da+Lhe+Alvinegro.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/O+Cear%C3%A1+Faz+Parte+da+Minha+Vida%2C+a+Minha+Alegria+%C3%89+Te+Ver+em+Campo.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/M%C3%BAsica+Cearamor.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Muito+Mais+Que+Um+V%C3%ADcio+-+Cear%C3%A1+Sporting+Club.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Maior+da+Capital+%C3%89+Nois.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Hino+Oficial+do+Cear%C3%A1.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Hino+do+Cear%C3%A1+Oficial.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Funk+%C3%89+o+Nosso+Ritmo.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Expulsa+Expulsa.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Eu+sou+Cear%C3%A1.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/e+niguem+Cala+esse+Nosso+Amor!!!!!!!!!!!!!.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Eu+sou+Cear%C3%A1.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Expulsa+Expulsa.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Funk+%C3%89+o+Nosso+Ritmo.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Hino+do+Cear%C3%A1+Oficial.mp3" },
        { titulo: "Vozão", url: "https://webradio-jf.s3.sa-east-1.amazonaws.com/cearamor/Hino+Oficial+do+Cear%C3%A1.mp3" }
    ],
    

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
