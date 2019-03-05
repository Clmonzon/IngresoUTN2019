//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var importe, mayor, menor, diaMayor, diaMenor, flag = 0;
for(i = 1; i <=7; i++){
    importe = parseFloat(prompt("Día " + i + "- Ingrese el importe de ventas"));
    while(isNaN(importe) || importe <= 0){
        importe = parseFloat(prompt("Error. Importe invalido!\nDía " + i + ": Ingrese el importe de ventas."));
    }
    if(importe > mayor || flag == 0){
        mayor = importe;
        diaMayor = i;
    }
    if(importe < menor || flag == 0){
        menor = importe;
        diaMenor = i;
        flag = 1
    }
}
alert ("Mayor importe de la semana: $" + mayor.toFixed(2) + " en el día " + diaMayor +"\nMenor importe de la semana: $" + menor.toFixed(2) + " en el día " + diaMenor);
}
