define(["knockout"], function (ko) {
     function TaskInputViewModel(context) {
          var self = this;
          self.tasks = context.properties.tasks; // Propiedad que se modificará
          self.newTask = ko.observable("");

          self.agregarTarea = function () {
               if (self.newTask().trim() !== "") {
                    self.tasks.push(self.newTask()); // Se agrega una nueva tarea
                    self.newTask(""); // Limpiar el input
               }
          };
     }
     return TaskInputViewModel;
});
