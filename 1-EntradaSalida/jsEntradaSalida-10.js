/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
var importe; 
var Descuento;
var precioFinal;

importe= parseFloat(document.getElementById("importe").value);

descuento = importe * 25 / 100;

precioFinal = importe - descuento;

document.getElementById("resultado").value = precioFinal;

alert("Se aplico un descuento de $" + descuento);

    
}
