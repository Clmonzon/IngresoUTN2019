function Mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;

    if(edad < 18 && estadoCivil!= "soltero"){
        alert("Es muy pequeño para NO ser soltero");
    }
	


}//FIN DE LA FUNCIÓN
