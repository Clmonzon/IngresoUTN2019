/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var primerNumero;
	var segundoNumero;
	var resto;
	primerNumero	= document.getElementById("numeroDividendo").value;
	segundoNumero	= document.getElementById("numeroDivisor").value;
	resto = parseInt(primerNumero) % parseInt(segundoNumero);
	alert ("El resto es "+resto);
}
