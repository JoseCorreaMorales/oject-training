define(["knockout"], function (ko) {
    function AppControllerViewModel() {
      var self = this;
  
      // Maneja la vista actual
      self.currentModule = ko.observable("home");
  
      // Método para cambiar de vista
      self.navigate = function (view) {
        self.currentModule(view);
      };
    }
  
    return new AppControllerViewModel();
  });
  