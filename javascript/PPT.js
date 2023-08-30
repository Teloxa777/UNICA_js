alert("1 piedra \n 2 papel \n 3 tijera ");
let t = 0;
let c = 0
let i =1;
while (i<=3){


    let valor1 = prompt("Dame el valor");
    let b = Math.floor(Math.random() * 3) + 1;

    if (valor1 == 1 && b == 2){
        alert("gana la computadora");   
        c++;
    }

    if (valor1 == 2 && b == 1){
        alert("Tu ganas"); 
        t++;
    }

    if (valor1 == 2 && b == 3){        
        alert("gana la computadora");  
        c++;
    }

    if (valor1 == 3 && b == 2){
        alert("Tu ganas");
        t++;
    }

    if (valor1 == 3 && b == 1){
        alert("gana la computadora")  ; 
        c++;
    }

    if (valor1 == 1 && b == 3){
        alert("Tu ganas") 
        t++;
    }

    i++
}
if(c == t){
    alert("empate")
}
if(c>t){
    alert("Gana la computadora")
}else{
    alert("Ganas tu")
}