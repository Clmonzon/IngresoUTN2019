function Mostrar()
{
var numero, respuesta, sumaPos = 0, sumaNeg = 0, cantPos = 0, cantNeg = 0, cantCeros = 0, cantPar = 0, promPos, promNeg, diferencia;
do{
    numero = parseInt(prompt("Ingrese un número"));
    while(isNaN(numero)){
        numero = parseInt(prompt("Número invalido. Ingrese un número"));
    }
    if(numero > 0 ){
        cantPos ++;
        sumaPos += numero;
    }
    else if(numero < 0 ){
        cantNeg ++;
        cantNeg += numero;
    }
    else{
        cantCeros ++;
    }
    if(numero % 2 == 0){
        cantPar ++;
    }
    respuesta = prompt("Quiere continuar?").toLowerCase();
}while(respuesta == "s");
promPos = sumaPos / cantPos;
promNeg = sumaNeg / cantNeg;
if(isNaN(promPos)){
    promPos = 0;
}
if(isNaN(promNeg)){
    promNeg = 0;
}
diferencia = cantPos - cantNeg;
document.write("1-Suma de negativos: " + sumaNeg + "<br>2-Suma de positivos: " + sumaPos + "<br>3-Cantidad de positivos: " + cantPos + "<br>4-Cantidad de negativos: " + cantNeg + "<br>5-Cantidad de ceros: " + cantCeros + "<br>6-Cantidad de numeros pares: " + cantPar + "<br>7-Promedio de positivos: " + promPos.toFixed(2) + "<br>8-Promedio de negativos: " + promNeg.toFixed(2) + "<br>9-Diferencia entre positivos y negativos: " + diferencia);

}//FIN DE LA FUNCIÓN
