// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

setInterval(function() {
    var x = Math.sin(Date.now() / 1000) * 1080;
    var y = Math.cos(Date.now() / 1000) * 720;
    robot.moveMouse(x, y);
}, 1000 * 60);
