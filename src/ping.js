var ipc = require('ipc');

console.log("Webview Preload: setting up IPC...");

ipc.on('ping', function() {
  // Everything will be fine until the webview src is changed
  console.log("pong");
});
