const robot = require("robotjs");
const throwShuriken = require("./lib/actions/throwShuriken");
const mouseClick = require("./lib/actions/mouseClick");

let ropeHookCount = 0;
let mouseClickCount = 0;
let intervalId;
let programRunning = false;

function startInterval() {
  // let message = programRunning ? "Stopping Program" : "Starting Program...";
  // console.log(message);
  return setInterval(runner, 400);
}
startInterval();

function runner() {
  //perform a click
  mouseClickCount = mouseClick(mouseClickCount);
  //average firefly respawn time can be found in settings
  if (mouseClickCount % 4 === 0) {
    ropeHookCount = throwShuriken(ropeHookCount);
  }
}
