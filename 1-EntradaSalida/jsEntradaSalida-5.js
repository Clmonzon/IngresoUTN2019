/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
var nombre;
var edad;

nombre = document.getElementById("elNombre").value;
edad = document.getElementById("laEdad").Value;
alert("Usted se llama " + nombre + "y tiene" edad");
}

