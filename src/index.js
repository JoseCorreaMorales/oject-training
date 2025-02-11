require([
  "knockout",
  "ojs/ojbootstrap",
  "ojs/ojknockout",
  "ojs/ojbutton",
  "ojs/ojcollapsible",
  "jquery",
  "js/jet-composites/counter/loader",
  "js/jet-composites/sticky-notes/loader",
  "js/jet-composites/user-list/loader",
  "js/jet-composites/task-list/loader",
  "js/jet-composites/task-input/loader",
  "ojs/ojbutton",
  'ojs/ojrouter'
], function (ko, Bootstrap, $, ojRouter) {
  "use strict";

  function IndexViewModel() {
    self = this;
    // Agregamos la lista de tareas
    /* self.listaTareas = ko.observableArray([
          { id: 1, titulo: "Tarea 1", completada: false },
          { id: 2, titulo: "Tarea 2", completada: true },
          { id: 3, titulo: "Tarea 3", completada: false }
      ]); */
      self.currentModule = ko.observable("home");

      // Método para cambiar de vista
      self.navigate = function (view) {
        self.currentModule(view);
      };
    
  }
  ko.applyBindings(new IndexViewModel());
});

// CDN configuration for lading base JET libraries and resources
/*
function _getCDNPath(paths) {
  var cdnPath = "https://static.oracle.com/cdn/jet/";
  var ojPath = "v7.1.0/default/js/";
  var thirdpartyPath = "v7.1.0/3rdparty/";
  var keys = Object.keys(paths);
  var newPaths = {};

  function _isoj(key) {
    return key.indexOf("oj") === 0 && key !== "ojdnd";
  }
  keys.forEach(function (key) {
    newPaths[key] =
      cdnPath + (_isoj(key) ? ojPath : thirdpartyPath) + paths[key];
  });
  return newPaths;
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
});
*/
// Configuración de Oracle JET con CDN
function _getCDNPath(paths) {
  var cdnPath = "https://static.oracle.com/cdn/jet/";
  var ojPath = "v7.1.0/default/js/";
  var thirdpartyPath = "v7.1.0/3rdparty/";
  var keys = Object.keys(paths);
  var newPaths = {};

  function _isoj(key) {
    return key.indexOf("oj") === 0 && key !== "ojdnd";
  }
  keys.forEach(function (key) {
    newPaths[key] =
      cdnPath + (_isoj(key) ? ojPath : thirdpartyPath) + paths[key];
  });
  return newPaths;
}

// Configuración correcta de RequireJS con rutas absolutas a los CDN
requirejs.config({
  paths: Object.assign(_getCDNPath({
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
    customElements: "webcomponents/custom-elements.min"
  }), {
    ojbootstrap: "https://static.oracle.com/cdn/jet/v7.1.0/default/js/ojbootstrap",
    ojcore: "https://static.oracle.com/cdn/jet/v7.1.0/default/js/ojcore",
    ojconfig: "https://static.oracle.com/cdn/jet/v7.1.0/default/js/ojconfig",
    knockout: "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min"
  }),
  shim: {
    jquery: {
      exports: ["$"],
    },
  },
});

// Cargar la aplicación principal
require(["knockout", "ojs/ojbootstrap", "appController"], function (ko, Bootstrap, app) {
  Bootstrap.whenDocumentReady().then(function () {
    ko.applyBindings(app, document.getElementById("app"));
  });
});

