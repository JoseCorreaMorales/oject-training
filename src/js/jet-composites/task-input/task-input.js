define([
  'knockout',
  'ojs/ojcontext',
  'ojs/ojknockout'
], function(ko, Context) {
  'use strict';

  function TaskInputViewModel(context) {
    var self = this;
    
    // Propiedades
    self.nuevaTarea = ko.observable('');
    
    // Métodos
    self.agregarTarea = function() {
      if (self.nuevaTarea().trim()) {
        context.properties.onAddTask(self.nuevaTarea());
        self.nuevaTarea(''); // Limpiar el input
      }
    };
  }

  return TaskInputViewModel;
}); 