function Mostrar()
{
var contador=0;
var acumulador=0;
var numero;
var respuesta;
do{
	numero = parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero = parseInt(prompt("Número invalido. Ingrese un número"));
	}
	contador++;
	acumulador += numero;
	respuesta = prompt("Desea seguir ingresando números?").toLowerCase();
}
while (respuesta == "s");
promedio = acumulador / contador;

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN
