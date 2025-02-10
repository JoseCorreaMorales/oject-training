define(["knockout"], function (ko) {
     function CounterViewModel(context) {
          var self = this;
          
          // Propiedades observables
          self.count = ko.observable(0);
          self.headerText = ko.observable("Contador");

          // Inicializar desde las propiedades del contexto
          self.connected = function() {
               if (context.properties.count !== undefined) {
                    self.count(context.properties.count);
               }
               if (context.properties.headerText !== undefined) {
                    self.headerText(context.properties.headerText);
               }
          };

          // Métodos
          self.incrementar = function () {
               self.count(self.count() + 1);
          };

          self.decrementar = function () {
               self.count(self.count() - 1);
          };

          // Observar cambios en las propiedades
          context.propertyChanged = function(event) {
               if (event.property === "count") {
                    self.count(event.value);
               }
               if (event.property === "headerText") {
                    self.headerText(event.value);
               }
          };
     }

     return CounterViewModel;
});
