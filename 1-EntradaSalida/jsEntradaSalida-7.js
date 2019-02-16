/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoSuma;
	primerNumero	= document.getElementById("numeroUno").value;
	segundoNumero	= document.getElementById("numeroDos").value;
	resultadoSuma = parseInt(primerNumero) + parseInt(segundoNumero);
	alert ("La suma es "+resultadoSuma);	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoResta;
	primerNumero	= document.getElementById("numeroUno").value;
	segundoNumero	= document.getElementById("numeroDos").value;
	resultadoResta = parseInt(primerNumero) - parseInt(segundoNumero);
	alert ("La resta es "+resultadoResta);
}

function multiplicar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoMultiplicacion;
	primerNumero	= document.getElementById("numeroUno").value;
	segundoNumero	= document.getElementById("numeroDos").value;
	resultadoMultiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);
	alert ("La multiplicacion es "+resultadoMultiplicacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDivision;
	primerNumero	= document.getElementById("numeroUno").value;
	segundoNumero	= document.getElementById("numeroDos").value;
	resultadoDivision = parseInt(primerNumero) / parseInt(segundoNumero);
	alert ("La division es "+resultadoDivision);
}

