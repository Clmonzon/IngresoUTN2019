function Mostrar()
{
     var edad;

edad = document.getElementById("edad").value;

if ((edad >= "13") ^ (edad <= "17"))
{
    alert("Es adolescente");
}
else {
    alert("No es adolescente");
}


}