define(['knockout', './service/user-list.service.js'],
     function(ko, UserListService) {
    function UserListViewModel(context) {
        var self = this;
        var userService = new UserListService();
        
        // Propiedades observables
        self.users = ko.observableArray([]);
        self.selectedUser = ko.observable(null);
        self.isOpen = ko.observable(false);
        self.userId = ko.observable(4);
        
       // self.activeButton = ko.observable(false);
        self.activeButton =  ko.observable(false);

        // Inicializar desde las propiedades del contexto
        self.connected = function() {
            if (context.properties.users) {
                self.users(context.properties.users);
            }
            if (context.properties.isOpen !== undefined) {
                self.isOpen(context.properties.isOpen);
            }
        };

        // Cargar usuarios desde la API
      self.loadUsers = async () => {
        try {
            const data = await userService.fetchUsers(); 
            self.users(data);
            self.isOpen(!self.isOpen());
        } catch (error) {
            console.error("Error al obtener usuarios en ViewModel:", error);
        }
    };

    self.loadUserById = async function (userId) {
        try {
            const user = await userService.fetchUserById(userId);
            self.selectedUser(user);
        } catch (error) {
            console.error(`Error al obtener el usuario con ID ${userId}:`, error);
        }
    };

        // Observar cambios en las propiedades
        context.propertyChanged = function(event) {
            if (event.property === "users") {
                self.users(event.value);
            }
            if (event.property === "isOpen") {
                self.isOpen(event.value);
            }
        };

        self.toggleActiveButton = function () {
            self.activeButton(!self.activeButton()); 
            console.log("toggle works", self.activeButton());
        };




    }
    return UserListViewModel;
});
