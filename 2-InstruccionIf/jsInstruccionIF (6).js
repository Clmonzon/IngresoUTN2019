function Mostrar()
{
var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

if(laEdad>17)
{
	alert("Es mayor de edad");
}
else
	{
	if (laEdad<13)
		{
			alert("Es un niño");
		}
	else
		{
			alert("Es un adolescente");
		}		
	}
//tomo la edad  

}//FIN DE LA FUNCIÓN
