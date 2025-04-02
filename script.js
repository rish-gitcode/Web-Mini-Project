function toggleSound(audioId) {
    let audio = document.getElementById(audioId);
    
    if (audio.paused) {
        // Stop all other audios before playing
        document.querySelectorAll('audio').forEach(a => a.pause());
        audio.play();
    } else {
        audio.pause();
    }
}