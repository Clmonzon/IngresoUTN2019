function Mostrar()
{
var numero, maximo, minimo, flag= 0, respuesta;
do{
	numero = parseInt(prompt("Ingrese un número"));
	while(isNaN(numero)){
		nuemro = parseInt(prompt("Número invalido. Ingrese un número"));
	}
	if(numero > maximo || flag == 0){
		maximo = numero;
	}
	if(numero < numero || flag == 0){
		minimo = numero;
		flag = 1;
	}
	respuesta = prompt("Desea seguí ingresando números?").toLowerCase();
}while(respuesta == "s");
document.getElementById("maximo"). value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN