function Mostrar()
{
var numero, positivo = 0, negativo = 1, flag = 0, respuesta;

do{
	numero = parseInt(prompt("Ingrese un número"));
	while(isNaN(numero)){
		numero = parseInt(prompt("Número invalido. Ingrese un número"));
	}
	if(numero >= 0){
		positivo += numero;
	}
	else{
		negativo *= numero;
		flag = 1; 
	}
	respuesta = prompt("Quiere continuar?").toLowerCase();
	}
	while(respuesta == "s");
	document.getElementById("suma").value = positivo;
	if(flag == 0){
	negativo = 0;
}
	
document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN