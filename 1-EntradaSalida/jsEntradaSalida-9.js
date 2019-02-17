/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var aumento = sueldo * 0.1;
    sueldo += aumento;
    document.getElementById("resultado").value = sueldo;
}
