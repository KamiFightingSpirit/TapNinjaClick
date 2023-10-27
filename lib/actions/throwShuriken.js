const robot = require("robotjs");

function throwShuriken(ropeHookCount) {
  const currentPosition = robot.getMousePos();
  robot.moveMouse(currentPosition.x + 50, currentPosition.y);
  robot.mouseClick();
  console.log("Hadooooken!");
  robot.moveMouse(currentPosition.x, currentPosition.y);

  return ++ropeHookCount;
}

module.exports = throwShuriken;
