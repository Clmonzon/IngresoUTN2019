//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var importe, importeFinal, iva;
importe = parseFloat(prompt("Ingrese un importe"));
while(isNaN(importe) || importe <=0){
     importe = parseFloat(prompt("Los datos ingresados son incorrectos"));
}
iva = importe * 0.21;
importeFinal = iva + importe;
document.getElementById("importe").value = "$" + importeFinal.toFixed(2);
alert("Importe ingresado: $" + importe + "\nEl importe final del producto es: (IVA Incluído) $ " + importeFinal.toFixed(2));
}
