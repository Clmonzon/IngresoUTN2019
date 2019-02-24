/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var cantidad = parseInt(document.getElementById("Cantidad").value);
var marca = document.getElementById("Marca").value;
var precio = cantidad * 35;
var descuento = 0, precioFinal = 0, iibb = 0;
if(cantidad >= 6){
    descuento = precio * 0.5;
    precioFinal = precio - descuento;
}
else if(cantidad == 5){
    if(marca == "ArgentinaLuz"){
        decuento = precio * 0.4;
        precioFinal = precio - decuento
    }
    else{
        decuento = precio * 0.3;
        precioFinal = precio - descuento;
    }
    }
    else if(cantidad == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            decuento = precio * 0.25;
            precioFinal = precio - descuento;
    }
    else{
        decuento = precio * 0.2;
        precioFinal = precio - decuento;
    }
}
else if(cantidad ==3){
    if(marca == "ArgentinaLuz"){
        decuento = precio * 0.15;
        precioFinal = precio - decuento;
    }
    else if(marca == "FelipeLamparas"){
        decuento = precio * 0.1;
        precioFinal = precio - decuento;
    }
    else{
        decuento = precio * 0.05;
        precioFinal = precio - decuento;
    }    
}
else if(cantida == 1 || cantidad ==2){
    precioFinal = precio;
}
if(precioFinal > 120){
    iibb = precioFinal * 0.1;
    precioFinal += iibb;
    alert("Uested pagó " + iibb+" de IIBB.");
    }
    document.getElementById("precioDescuento").value = "$" + precioFinal.toFixed(2);
}
