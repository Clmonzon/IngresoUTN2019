//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var lado, perimetro;

lado = parseInt(document.getElementById("lado").value);
if(isNaN(lado) || lado <= 0){
    alert("Los datos ingresados son incorrectos!");
}
else{
    perimetro = lado * 3;

alert("Base ingresada: " + lado + "\nEl perimetro del triángulo es: " + perimetro);

}
}
