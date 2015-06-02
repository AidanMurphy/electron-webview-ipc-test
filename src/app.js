var remote = require('remote');

remote.getCurrentWindow().openDevTools();

var openDevToolsOnce = false;

$(document).ready(function() {
  var wv = $("#webview")[0];

  wv.addEventListener('ipc-message', function(e) {
    console.log(e.channel);
  }.bind(this));

  setInterval(function(){
    console.log("sending ping to webview...");
    wv.send('ping');

    // Atom-Shell 0.23 doesn't have dom-ready so I had to remove that. Can't
    // open the devTools until after the webview finishes initializing (I guess; get error otherwise)
    // which seems to be possible when we hit the first occurrence of this.
    if(!openDevToolsOnce) {
      wv.openDevTools();
      openDevToolsOnce=true;
    }
  }, 1000);

  // the preload script is not going to survive the webview src change
  setInterval(function(){
    // This is going to work flawlessly in Atom-Shell 0.23 but anything newer
    // will stop working after the first webview src change. ARGH!
    wv.src = "http://msn.com";
  }, 10000);
});
