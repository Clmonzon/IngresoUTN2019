/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var valor1;
    var valor2;
    var suma;
    
    valor1 = document.getElementById("ValorUno").value;
    valor2 = document.getElementById("ValorDos").value;

    valor1 = parseFloat(document.getElementById("ValorUno").value);
    valor2 = parseFloat(document.getElementById("ValorDos").value);

    suma = valor1 + valor2;

    alert("La suma es " + suma.toFixed(2))

}

