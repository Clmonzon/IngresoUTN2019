/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor'.*/
function Mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;

    if(edad >= 18 && estadoCivil != "soltero"){
        alert("Es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN
