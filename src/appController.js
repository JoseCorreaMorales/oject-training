define(['ojs/ojrouter', 'knockout', 'ojs/ojmodule-element-utils'], 
function (Router, ko, ModuleUtils) {
    function AppViewModel() {
      var self = this;
  
      // Initialize router
      self.router = Router.rootInstance;
      self.router.configure({
        'home': { label: 'Inicio' },
        'about': { label: 'Acerca de' },
        'contact': { label: 'Contacto' }
      });
  
      // Create moduleConfig
      self.moduleConfig = ko.observable({
        view: [],
        viewModel: null
      });

      // Initialize the router
      Router.sync().then(() => {
        // Router ready
        self.moduleConfig({
          name: self.router.moduleConfig.name(),
          params: { parentRouter: self.router }
        });
      });
    }
  
    return new AppViewModel();
});

