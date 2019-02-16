function mostrar()
{
//tomo la edad  

	
var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

	   	
var elEstadoCivil;
elEstadoCivil= document.getElementById("estadoCivil").value; 

if(laEdad<18 && elEstadoCivil!="Soltero")
{
	alert("Es muy pequeño para no ser soltero");
}

}//FIN DE LA FUNCIÓN