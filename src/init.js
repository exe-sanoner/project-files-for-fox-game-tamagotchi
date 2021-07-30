import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import inititButtons from "./buttons";

// const TICK_RATE = 3000;

async function init() {
  inititButtons(gameState.handleUserAction);
  console.log("starting game");

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
