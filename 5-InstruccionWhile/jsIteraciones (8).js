function Mostrar()
{
var positivo=0;
var negativo=1;
var respuesta='s';
var multiplicacion;
var flag=0;

do{
	numero = parseInt(prompt("Ingrese un numero"));
	
	if(numero >= 0){
	
	positivo = positivo + numero;

	}else {(nuemero <=0)
	
	negativo = negativo * numero;
	
	flag==1 

	respuesta = prompt("Quiere continuar?").toLowerCase;
		}
}while(respuesta == "s")


document.getElementById("suma").value=positivo;
if(flag == 0){
	negativo == 0;
}
	}
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN