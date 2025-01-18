// This file contains JavaScript code to handle interactions on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    // Play background music
    const audio = new Audio('media/music/background.mp3');
    audio.loop = true; // Loop the music
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });

    // Additional JavaScript functionality can be added here
});