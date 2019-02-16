function mostrar()
{

var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

/*El siguiente codigo es poco performante, esta hecho solo con IFs sin anhidar

if (laEdad>17)
{
	alert("Es mayor de edad");
}

if (laEdad>12 && laEdad	<18)
{
	alert("Es un adolescente");
}

if (laEdad<13)
{
	alert("Es un niño");
} */

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



}//FIN DE LA FUNCIÓN