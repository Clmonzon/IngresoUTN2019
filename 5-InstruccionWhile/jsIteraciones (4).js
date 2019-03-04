function Mostrar()
{
var numero = parseInt(prompt("ingrese un número entre 0 y 9."));
while(numero < 0 || numero > 9 || isNaN(numero)){
	numero = parseInt(prompt("Numero invalido. Ingrese nuevamente un numero entre 0 y 9"));
}
	document.getElementById("Numero"). value = numero;

}//FIN DE LA FUNCIÓN