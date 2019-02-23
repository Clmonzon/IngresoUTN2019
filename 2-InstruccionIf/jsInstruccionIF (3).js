/*Al ingresar una edad debemos informar si la persona es mayor de edad,
sino informar que es un menor de edad.*/
function Mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);

    if(edad > 17){
        alert("Es mayor de edad");
    }
    else{
        alert("Es menor de edad");
    }



}//FIN DE LA FUNCIÓN
