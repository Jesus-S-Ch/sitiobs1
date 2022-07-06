function fnValidar02()
{
    var xNombre = document.getElementById("txtNombres").value;
    if(xNombre=="" )
    {
        alert("Escriba NOMBRES...");
        return false;
    }

    var xApellido = document.getElementById("txtApellidos").value;
    if(xApellido=="" )
    {
        alert("Escriba Apellido...");
        return false;

    }

}