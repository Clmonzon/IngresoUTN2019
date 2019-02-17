/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var suma;

    suma = numero1 + numero2;

    alert("La suma es: " + suma);
	
}

function restar()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var resta;

    resta = numero1 - numero2;

    alert("La resta es: " + resta);
	
}

function multiplicar()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var producto;
    
    producto = numero1 * numero2;

    alert("El producto es: " + producto);
	
}

function dividir()
{
    var numero1 = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    var cociente;

    cociente = numero1 / numero2;

    alert("El cociente es:" + cociente);
	
}

