/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperaturaF = parseFloat(document.getElementById("Temperatura").value);
temperaturaC = temperaturaF - 32;
    alert(temperaturaF + " Grados Fahrenheit son: " + temperaturaC + " Grados Centigrados");
}

function CentigradosFahrenheit () 
{
var temperaturaC = parseFloat(document.getElementById("Temperatura").value);
temperaturaF = temperaturaC + 32;
    alert (temperaturaC + " Grados Centigrados son: " + temperaturaF + " Grados Fahrenheit");
}
