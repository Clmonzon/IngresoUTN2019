/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var importe = parseInt(document.getElementById("sueldo").value);
    var aumento = importe * 0.1;
    importe += aumento;
    document.getElementById("resultado").value = importe;
}
