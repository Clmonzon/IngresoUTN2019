function Mostrar()
{

var contador=0;
var acumulador=0;
var numero;
var respuesta = "s";
var promedio;
do{
	numero = parseInt(prompt("Ingrese un numero"));

	acumulador = acumulador + numero;
	/* acumulador +=1; (Es lo mismo que la linea anterior)*/
	contador = contador +1;
	/*contador +=1; /*(Es lo mismo que la linea anterior)*/
	/*contador ++;(Es lo mismo que la linea anterior)*/

	respuesta = prompt("Quiere continuar?").toLowerCase();

}
while (respuesta == "s");
promedio = acumulador / contador;

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN
