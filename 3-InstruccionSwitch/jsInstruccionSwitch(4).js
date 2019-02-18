function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){
        case "Febrero":
            alert("Tiene 28 dìas");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tienen 30 dìas");
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Juio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tienen 31 dìas");
            break;
    }
//alert (mesDelAño);
}//FIN DE LA FUNCIÓN