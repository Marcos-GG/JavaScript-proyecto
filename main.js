/* let edad = parseInt (prompt("ingrese su edad: "));

if (edad < 18) { 
    alert("no puede comprar");
} else {
    alert("puede comprar"); 
};

 */

/* for (let entradas = 1; entradas <= 10; entradas++) {
    let nombre = prompt("ingrese su nombre");
    alert (`entradas # ${entradas} Nombre: ${nombre}`);
}
alert ("No hay mas entradas"); */

let respuesta = prompt("que bebida quieres comprar?")

while (respuesta != "vodka"){
   
    switch (respuesta) {
        case "cerveza": 
        alert ("no tenemos stock disponible");
        break;

        case "gin": 
        alert ("no tenemos stock disponible");
        break;

        case "ron":
        alert ("no tenemos stock disponible");
        break;

    }
    respuesta = prompt("que bebida quieres comprar?")
}
