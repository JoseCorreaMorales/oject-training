require(["knockout", "ojs/ojbootstrap", "./appController"], function (ko, Bootstrap, app) {
  Bootstrap.whenDocumentReady().then(function () {
    ko.applyBindings(app, document.getElementById("app"));
  });
});
