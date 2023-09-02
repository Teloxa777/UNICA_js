nombre = prompt("Ingrese su nombre");
contraseña = parseInt(prompt("Ingrese su contraseña"));

try {
    if (nombre != "Juan" || contraseña != 1234) {
        
        throw new Error("La lista de usuarios no es válida.");
    }


// Si todo está correcto, realizar otras acciones
console.log("Validación de usuarios exitosa.");

} 
catch (error) {
	console.error("Error:", error.message);
} 
finally {
	console.log("Finalizando la validación de usuarios.");   
}