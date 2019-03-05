function Mostrar()
{
var numero;
    for (; ;) { // Bucle infinito
        numero = parseInt(prompt("Ingrese un numero:"));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Error. Ingrese un numero:"));
        }
        if (numero == 9) {
            break;
        }
    }

}//FIN DE LA FUNCIÓN
