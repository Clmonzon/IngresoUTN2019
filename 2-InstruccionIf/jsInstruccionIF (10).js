function Mostrar()
{
var numeroAleatorio = Math.floor((Math.random() * 10) + 1);


alert(numeroAleatorio);


RESOLUCION SOLO CON IFS
if(numeroAleatorio>=9)
{
	alert("EXCELENTE");
}	
else
{
	if(numeroAleatorio>=4)
	{
		alert("APROBÓ");
	}
	else
		{
				alert("Vamos, la proxima se puede");
		}
}

//Genero el número RANDOM entre 1 y 10 
}//FIN DE LA FUNCIÓN