/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	primerNumero	= document.getElementById("numeroUno").value;
	segundoNumero	= document.getElementById("numeroDos").value;
	suma = parseInt(primerNumero) + parseInt(segundoNumero);
	alert(suma);
}

