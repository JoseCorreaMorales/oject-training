define([
    'knockout',
    'ojs/ojcontext',
    'ojs/ojknockout'
], function(ko, Context) {
    'use strict';

    function TaskListViewModel(context) {
        var self = this;
        
        // Lista de tareas
        self.tasks = ko.observableArray([]);
        
        // Método para agregar nueva tarea
        self.addNewTask = function(tituloTarea) {
            self.tasks.push({
                id: Date.now(),
                titulo: tituloTarea,
                completada: ko.observable(false)
            });
            console.log("im a callback");
        };

        // Inicializar desde las propiedades del contexto
        self.connected = function() {
            if (context.properties.tasks) {
                self.tasks(context.properties.tasks);
            }
        };

        // Observar cambios en las propiedades
        context.propertyChanged = function(event) {
            if (event.property === "tasks") {
                self.tasks(event.value);
            }
        };
    }

    return TaskListViewModel;
});
