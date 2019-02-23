/*Al presionar el Botón, asignar una nota RANDOM al examen y mostar:
 "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4,
 "Vamos, la proxima se puede" para notas menores a 4*/
function Mostrar()
{
	var nota = Math.floor(Math.random() * 10 + 1);

	if(nota == 9 || nota == 10){
		alert("Nota: " + nota + ". EXELENTE.");
	}
	else if(nota >= 4 && nota <= 8){
		alert("Nota: " + nota + ". APROBÓ.");
	}
	else{
		alert("Nota: " + nota + ". Vamos, la próxima se puede.");
	}

}//FIN DE LA FUNCIÓN
