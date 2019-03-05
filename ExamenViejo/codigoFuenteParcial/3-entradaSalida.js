//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var largo, ancho, perimetro;

largo = parseInt(document.getElementById("largo").value);
ancho = parseInt(document.getElementById("ancho").value);

if(isNaN(largo) || isNaN(ancho) || largo <=0 || ancho <=0){
    alert("Los datos ingresados son incorrectos");
}
else{
    perimetro = largo * 2 + ancho * 2;
    alert("El largo del terreno es: " + largo +" metros." + "\nEl ancho es: " + ancho + " metros." + "\nNecesita " + perimetro * 6 + " metros de alambre para 6 hilos de alambre.");
}
}
