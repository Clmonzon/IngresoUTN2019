/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y
 el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de
 un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/

function Rectangulo () 
{
var largo = parseFloat(document.getElementById("Largo").value);
var ancho = parseFloat(document.getElementById("Ancho").value);
var perimetro = (largo * 2 + ancho * 2) * 3;
    alert("Se deben comprar :" + perimetro.toFixed(2) + "metros de alambre");
}
function Circulo () 
{
var radio = parseFloat(document.getElementById("Radio").value);
perimetro = (2 * Math.PI * radio) * 3;
    alert("Se deben comprar : " + perimetro.toFixed(2) + "metros de alambre");
	}
function Materiales () 
{
var largo = parseFloat(document.getElementById("Largo").value);
var ancho = parseFloat(document.getElementById("Ancho").value);
var superficie = largo * ancho;
var bolsaDeCemento = (superficie) * 2;
var bolsaDeCal = (superficie) * 3;
alert("Se necesitan: " + bolsaDeCemento.toFixed(2) + " bolsas de cemento " + "y " + bolsaDeCal.toFixed(2) + " bolsas de cal.");
}
