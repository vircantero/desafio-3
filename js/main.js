let nombreProducto = "Cama"
let precioUnitario = 2000
let cantidadDeseada = prompt("Ingresar la cantidad deseada")
let costoFinal = precioUnitario * cantidadDeseada;
let descuento = costoFinal / 100 * 10;
let descuentoFinal = costoFinal - descuento;

if(cantidadDeseada >= 5){
    console.log(descuentoFinal);
}

else{
    console.log(costoFinal);
}