const robot = require("robotjs");

function throwShuriken(ropeHookCount) {
  const currentPosition = robot.getMousePos();
  robot.moveMouse(currentPosition.x + 50, currentPosition.y);
  console.log("Hadooooken!");
  robot.mouseClick();
  robot.moveMouse(currentPosition.x, currentPosition.y);

  return ++ropeHookCount;
}

module.exports = throwShuriken;
