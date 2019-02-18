function Mostrar()
{
var mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño){
        case "Febrero":
            alert("Este mes no tiene mas de 29 dìas");
            break;
        case "Enero":
        case "Marzo":
        case "Abril":
        case "mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        alert("Este mes tiene mas de 30 dìas");
        break;
        }

//alert (mesDelAño);
}//FIN DE LA FUNCIÓN