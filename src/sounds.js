// src/sounds.js
// 🎶 Centralized music manager

// All sounds from /public/sounds/
export const backgroundMusic = "/sounds/background.mp3";
export const correctSound = "/sounds/correct.mp3";
export const wrongSound = "/sounds/wrong.mp3";


// Helper function to play sounds
export function playSound(src, volume = 1.0) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play();
}
