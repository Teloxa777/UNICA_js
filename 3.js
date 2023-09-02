function suma(a,b) {
    return a+b;
}
function resta(a,b) {
    return a-b;
    
}
function multiplicasion(a,b) {
    return a*b;
    
}
function divicion(a,b) {
    if ( b === 0) {
        console.log("El denominador no puede ser 0");
        return 0;
    }
    return a/b;
}
console.log("1 suma \n 2 resta \n 3 multiplicasion \n 4 divicion")
key = parseInt(prompt("Ingrese un numero"))
switch (key) {
    case 1:
        a = parseInt(prompt("Ingrese un numero"))
        b = parseInt(prompt("Ingrese otro numero"))

        console.log(suma(a,b))
        
        break;
    case 2:
        a = parseInt(prompt("Ingrese un numero"))
        b = parseInt(prompt("Ingrese otro numero"))

        console.log(resta(a,b))
        break;
    case 3:
        a = parseInt(prompt("Ingrese un numero"))
        b = parseInt(prompt("Ingrese otro numero"))

        console.log(multiplicasion(a,b))
        break;
    case 4:
        a = parseInt(prompt("Ingrese el numerador"))
        b = parseInt(prompt("Ingrese el denominador"))

        console.log(divicion(a,b))
        break;

    default:
        console.log("Opcion incorrecta")
        break;
}