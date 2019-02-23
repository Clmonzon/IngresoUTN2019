/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var valor1 = parseFloat(document.getElementById("PrecioUno").value);
var valor2 = parseFloat(document.getElementById("PrecioDos").value);
var valor3 = parseFloat(document.getElementById("PrecioTres").value);
var suma = valor1 + valor2 + valor3;
alert("La suma es: $" + suma.toFixed(2));
}
function Promedio () 
{
var valor1 = parseFloat(document.getElementById("PrecioUno").value);
var valor2 = parseFloat(document.getElementById("PrecioDos").value);
var valor3 = parseFloat(document.getElementById("PrecioTres").value);
var promedio = (valor1 + valor2 + valor3) / 3;
alert("El promedio es: $" + promedio.toFixed(2));
}
function PrecioFinal () 
{
 var valor1 = parseFloat(document.getElementById("PrecioUno").value),
 var valor2 = parseFloat(document.getElementById("PrecioDos").value);
 var valor3 = parseFloat(document.getElementById("PrecioTres").value);
 var suma = valor1 + valor2 + valor3;
 var iva  = suma * 0.21;
 var preciofinal = suma + iva;
 alert("El precio final es: $" + preciofinal.toFixed(2));
}
