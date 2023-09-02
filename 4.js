console.log("Ingrerse su contraseña");

c = prompt("Contraseña de al menos 10 caracteres");

try{
    if (c.length < 10) 
        throw new Error("Contraseña no cumple con los requizitos.");{
        
    }
    console.log("Finalizando contraseña guardada con exito.");   
}
catch (error) {
	console.error("Error:", error.message);
} 
finally {
	console.log("Fin del programa");   
}