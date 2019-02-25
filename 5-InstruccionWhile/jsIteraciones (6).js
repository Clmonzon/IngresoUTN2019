function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero = parseInt(prompt("ingrese su numero")) ;
	var promedio;
while ( contador < 5 ) {
	var numero = parseInt(prompt("ingrese su numero")) ;
	acumulador = acumulador + numero;
	contador = contador + 1; 
}
promedio = acumulador / 5;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5

}//FIN DE LA FUNCIÓN