function Mostrar()
{
var i = 1;
var repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));
while(isNaN(repeticiones) || (repeticiones <=0)){
    repeticiones = parseInt(prompt("Error. Ingrese el numro de veces a repetir"))
}
for(i = 1; i <= repeticiones; i++){
    console.log(i + " -HOLA UTN FRA");
}

}//FIN DE LA FUNCIÓN