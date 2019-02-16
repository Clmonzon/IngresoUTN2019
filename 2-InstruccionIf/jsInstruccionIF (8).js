function mostrar()
{
//tomo la edad  

var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

	   	
var elEstadoCivil;
elEstadoCivil= document.getElementById("estadoCivil").value;

if (laEdad>17 && elEstadoCivil=="Soltero")
{
	alert("Es soltero y no es meenor");
}
	


}//FIN DE LA FUNCIÓN