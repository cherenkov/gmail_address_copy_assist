let self = require("self");
require("page-mod").PageMod({
  include: ["*.google.co.jp","*.google.com"],
  contentScriptWhen: "ready",
  contentScriptFile: self.data.url("contentscript.js"),
  onAttach: function(worker) {
    worker.on("message", function(msg) {
      require("clipboard").set(msg);
      require("notifications").notify({
        title: "Info",
        text: "Copy!",
        iconURL: self.data.url("copyicon.png")
      });
    });
  }
});