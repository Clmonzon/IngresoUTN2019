function Mostrar()
{

var sexo = prompt("Ingrese 'f' (femenino) ó 'm' (masculino):");
while(sexo != 'f' && sexo != 'm'){
    sexo = prompt("Opcion invalida. Ingrese nuevamente f (femenino) ó m (masculino)")
}
if(sexo == 'f'){
    document.getElementById("Sexo").value = "Femenino";
}
else{
    document.getElementById("Sexo").value = "Masculino";
}

}//FIN DE LA FUNCIÓN