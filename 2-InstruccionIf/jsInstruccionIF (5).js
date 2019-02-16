function mostrar()
{
//tomo la edad  
var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

if (laEdad>17 || laEdad<13)
	{
		alert("La persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN