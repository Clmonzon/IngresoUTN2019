function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
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



/* CODIGO EJEMPLO DE COMO USAR SWITCH
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/
    // code block






	

}//FIN DE LA FUNCIÓN