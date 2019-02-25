function Mostrar()
{
var numero = prompt("Ingrese un número entre 0 y 10.");
	while(numero < 0 || numero > 10 || isNaN(numero)){
		numero = parseInt(prompt("No es numero entre 0 y 9"));
	}
document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN