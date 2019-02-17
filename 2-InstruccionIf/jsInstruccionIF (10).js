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
