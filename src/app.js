var remote = require('remote');

remote.getCurrentWindow().openDevTools();

$(document).ready(function() {
  var wv = $("#webview")[0];

  wv.addEventListener('dom-ready', function() {
    wv.addEventListener('ipc-message', function(e) {
      console.log(e.channel);
    }.bind(this));

    wv.openDevTools();
  });

  setInterval(function(){
    console.log("sending ping to webview...");
    wv.send('ping');
  }, 1000);

  // the preload script is not going to survive the webview src change
  setInterval(function(){
    wv.src = "http://msn.com";
  }, 10000);
});
