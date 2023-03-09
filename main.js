

// perimer  pedido de la noche es gratis 


let free = false

let validarCliente = ( pedido )=> {

        let edad = prompt ("¿cual es tu edad?");
        if (edad > 18) {
            if (pedido >= 1 && free == false) {
                alert ("sos el primer pedido de la noche , te regalamos una bebida ") ;
                free = true ; 
            } else {
                alert (`podes realizar una compra`);
            }
        }
        else {
            alert ("sos menor de edad, no podes realizar una compra.");
        }
    }

        
validarCliente (1);    
validarCliente (2);  
validarCliente (3); 
validarCliente (4);


let nombre = prompt ("ingrese su nombre");

let dineroCliente = prompt(`¡Hola ${nombre}! ¿cuanto dinero tines?`);


if (dineroCliente >= 100 && dineroCliente < 200) {
    alert(`${nombre}, podes comprarte la bebida gris`);
    alert("y te sobran " + (dineroCliente - 100));
}
else if (dineroCliente >= 200 && dineroCliente < 300)  {
    alert(`${nombre}, podes comprarte la bebida amarilla`); 
    alert("y te sobran "+(dineroCliente - 200));
}
else if (dineroCliente >= 300 && dineroCliente < 400)  {
    alert(`${nombre}, podes comprarte la bebida verde`); 
    alert("y te sobran "+ (dineroCliente - 300));
}
else if (dineroCliente >= 400 && dineroCliente < 500)  {
    alert(`${nombre}, podes comprarte la bebida roja`); 
    alert("y te sobran " + (dineroCliente - 400));
}
else if (dineroCliente >= 500 ){
    alert(`${nombre}, podes comprarte la bebida naranja`); 
    alert("y te sobran " +(dineroCliente - 500));
}
else {
    alert(`${nombre}, no te alcanza para ninguna bebida`); 
}  


class bebidas {
    constructor( marca, sabor, litros, cantidad, precio) {
        this.marca = marca;
        this.sabor = sabor;
        this.litros = litros;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    vender(){
        this.cantidad = this.cantidad - 1; 
    }
}

const bebida1 = new bebidas ("new style", "maracuya", "1L", 10, 780 );
const bebida2 = new bebidas ("absolut", "frambuesa", "700ml", 10, 4580);
const bebida3 = new bebidas ("absolut", "lima", "700ml", 10, 4580);
const bebida4 = new bebidas ("absolut", "mango", "700ml", 10, 4580);
const bebida5 = new bebidas ("absolut", "vainilla", "700ml", 10, 4580);

console.log(bebida2);
bebida2.vender(3);
console.log(bebida2);

