export const ICONS = ["fish", "poop", "weather"];
export const SCENES = ["day", "rain"];
export const TICK_RATE = 2000;
export const RAIN_CHANCE = 0.3;
// how many ticks
export const DAY_LENGTH = 45;
export const NIGHT_LENGTH = 6;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 13 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;
