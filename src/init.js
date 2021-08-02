import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import inititButtons from "./buttons";

// const TICK_RATE = 3000;

async function init() {
  console.log("starting game");
  inititButtons(handleUserAction);

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
