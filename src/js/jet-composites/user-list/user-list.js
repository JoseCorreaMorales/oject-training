define(['knockout'], function(ko) {
    function UserListViewModel(context) {
        var self = this;
        
        // Propiedades observables
        self.users = ko.observableArray([]);
        self.isOpen = ko.observable(false);

        // Inicializar desde las propiedades del contexto
        self.connected = function() {
            if (context.properties.users) {
                self.users(context.properties.users);
            }
            if (context.properties.isOpen !== undefined) {
                self.isOpen(context.properties.isOpen);
            }
        };

        // Cargar usuarios
        self.loadUsers = function() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => {
                    self.users(data);
                    self.isOpen(!self.isOpen());
                })
                .catch(err => console.error(err));
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
    }
    
    return UserListViewModel;
});
