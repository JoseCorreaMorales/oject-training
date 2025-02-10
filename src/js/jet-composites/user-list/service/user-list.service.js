define([], function () {
    function UserListService() {} // Constructor válido

    // Método para obtener la lista de usuarios usando Fetch API
    UserListService.prototype.fetchUsers = async function () {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }
            return await response.json(); // Devuelve la lista de usuarios en formato JSON
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return []; // Devuelve un array vacío en caso de error
        }
    };
    UserListService.prototype.fetchUserById = async function (userId) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }
            return await response.json(); // Devuelve la lista de usuarios en formato JSON
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return []; // Devuelve un array vacío en caso de error
        }
    };

    return UserListService; // Exportamos la función constructora correctamente
});
