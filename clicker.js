const robot = require('robotjs');

const mouseClickQueue = [];
const keyPressQueue = [];

function handleMouseClick() {
  // Simulate mouse click handling using robot.js
  robot.mouseClick('left');
}

function handleKeyPress(key) {
  // Simulate key press handling using robot.js
  robot.keyTap(key);
  console.log(`Key press: ${key}`);
}

// Simulate adding events to the queues
setInterval(() => {
  mouseClickQueue.push(true);
}, 1000 );

setInterval(() => {
  keyPressQueue.push('q'); // Replace 'A' with the key you want to press
}, 25000); // Simulate key presses every 500 milliseconds

function eventLoop() {
  if (keyPressQueue.length > 0) {
    const key = keyPressQueue.shift();
    handleKeyPress(key);
  } else if (mouseClickQueue.length > 0) {
    handleMouseClick();
  }

  setTimeout(eventLoop, 1000 / 3); // 3 times per second
}

eventLoop();
