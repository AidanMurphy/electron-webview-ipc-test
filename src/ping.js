var ipc = require('ipc');

console.log("Webview Preload: setting up IPC...");

ipc.on('ping', function() {
  console.log("pong");
});
