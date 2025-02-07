require(['knockout', 'ojs/ojbootstrap', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojcollapsible', 'jquery'],
     function (ko, Bootstrap, $) {
    "use strict";
  
    function IndexViewModel() {
      self = this;
      this.contador = ko.observable(5); // Variable reactiva
      self.mensaje = ko.observable("Cargando...");
      self.usuarios = ko.observableArray([]);
      self.loadUsers = ko.observable(true);
      self.isUsersListOpen = ko.observable(false);
     
      this.incrementar = () => {
        self.contador(self.contador() + 1);
        console.log(self.contador());
      };

      this.decrementar = () => {
        self.contador(self.contador() - 1);
        console.log(self.contador());
      }
     

      self.obtenerDatos = function () {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json());
      };


      self.cargarUsuarios = function () {
        self.obtenerDatos().then(function (data) {
          self.usuarios(data);
  
          console.log(data);
          self.isUsersListOpen(!self.isUsersListOpen());
        }).catch(function (err) {
          console.log(err);
        });
      };
      
      self.cargarUsarios = function () {
        self.cargarUsuarios();
      };





}
ko.applyBindings(new IndexViewModel());

  });













  // CDN configuration for lading base JET libraries and resources
function _getCDNPath(paths) {
  var cdnPath = "https://static.oracle.com/cdn/jet/"
  var ojPath = "v7.1.0/default/js/"
  var thirdpartyPath = "v7.1.0/3rdparty/"
  var keys = Object.keys(paths)
  var newPaths = {}

  function _isoj(key) {
    return key.indexOf("oj") === 0 && key !== "ojdnd"
  }
  keys.forEach(function (key) {
    newPaths[key] =
      cdnPath + (_isoj(key) ? ojPath : thirdpartyPath) + paths[key]
  })
  return newPaths
}

requirejs.config({
  paths: _getCDNPath({
    knockout: "knockout/knockout-3.5.0",
    jquery: "jquery/jquery-3.4.1.min",
    "jqueryui-amd": "jquery/jqueryui-amd-1.12.1.min",
    promise: "es6-promise/es6-promise.min",
    ojs: "min",
    ojL10n: "ojL10n",
    ojtranslations: "resources",
    signals: "js-signals/signals.min",
    text: "require/text",
    hammerjs: "hammer/hammer-2.0.8.min",
    ojdnd: "dnd-polyfill/dnd-polyfill-1.0.0.min",
    touchr: "touchr/touchr",
    customElements: "webcomponents/custom-elements.min",
  }),
  // Shim configurations for modules that do not expose AMD
  shim: {
    jquery: {
      exports: ["$"],
    },
  },
})
