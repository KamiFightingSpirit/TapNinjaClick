const robot = require("robotjs");

function mouseClick(mouseClickCount) {
  if (mouseClickCount % 10 === 0) console.log(mouseClickCount);
  robot.mouseClick();

  return ++mouseClickCount;
}

module.exports = mouseClick;
