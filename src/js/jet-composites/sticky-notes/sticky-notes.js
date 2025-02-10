define(['knockout'], function(ko) {
    function StickyNotesViewModel(context) {
        var self = this;
        
        // Propiedades observables
        self.notes = ko.observableArray([]);	
        //self.notes = ko.observableArray(context.properties.notes);
        
        

        // Inicializar desde las propiedades del contexto
        self.connected = function() {
            if (context.properties.notes) {
                self.notes(context.properties.notes);
            }

            console.log("context object", context);
        };

        // Observar cambios en las propiedades
        context.propertyChanged = function(event) {
            if (event.property === "notes") {
                self.notes(event.value);
            }
        };
    }
    
    return StickyNotesViewModel;
});
