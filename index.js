const robot =  require("robotjs");
let ropeHookCount = 0;
let mouseClickCount = 0;
console.log("Starting Program...")
setInterval(performClick, 400);

// Function to perform a click
function performClick() {
  mouseClickCount++;
  robot.mouseClick();
  //average firefly respawn time can be found in settings
  if(mouseClickCount % 140 === 0) { 
    const currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x + 50, currentPosition.y);
    robot.mouseClick();
    ropeHookCount++;
    robot.moveMouse(currentPosition.x, currentPosition.y);
  }
}

// Function to simulate pressing the "q" key
function simulateKeyPress() {
  robot.keyTap("q");
}

// Function to schedule the keypress every 20 seconds
function scheduleKeyPress() {
  simulateKeyPress(); // Simulate the keypress immediately

  // Schedule the next keypress after 20 seconds (20000 milliseconds)
  setTimeout(scheduleKeyPress, 8000);
}

process.on('SIGINT', () => {
  console.log(`This program performed ${ropeHookCount} ropehooks and ${mouseClickCount} mouseclicks for you!`)
  console.log('Exiting program');

  // You can perform any cleanup or additional actions here if needed
  process.exit(0); // Exit the program gracefully
});