function Mostrar()
{
var i = 1;
var cont = 0;
var numero = parseInt(prompt("Ingrese un numero:"));
    while(isNaN(numero) || numero < 0){
        numero = parseInt(prompt("Error. Ingrese un numero:"));
    }
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            cont++;
        }
    }
    console.log("Cantidad de numeros divisores encontrados: "+cont);

}//FIN DE LA FUNCIÓN
