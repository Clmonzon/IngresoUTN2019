function Mostrar()
{
var contador = 0;
var suma = 0;
var numero;
var promedio;

while(contador < 5){
	numero = parseFloat(prompt("Ingrese un número"));
	while(isNaN(numero)){
		numero = parseFloat(prompt("Número invalido. Ingrese un número"))
	}
	contador ++;
	suma += numero;
}
promedio = suma / 5;
document.getElementById("suma").value = suma.toFixed(2);
document.getElementById("promedio").value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN