/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var elImporte;
	var importeConAumento;
	
	elImporte	= document.getElementById("importe").value;
	importeConAumento = parseInt(elImporte) *1.1;
	
	document.getElementById("resultado").value = importeConAumento;	
}
