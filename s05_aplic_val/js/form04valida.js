function fnValidar04()
{
    var xTurno = document.getElementById("lstTurno").ariaValueMax;
    if(xTurno=="")
    {
        alert("Seleccione TURNO...");
        return false;
    }

    var xResult = document.getElementById("txtResult").ariaValueMax;
    if(xResult=="" || xResult==0)
    {
        alert("Revice...Resultado ¿0 o VACIO)");
        return false;
    }

    ///Caso contrario///
    return true;
}

function verConteo(turno, mtzAlumnos)
{
    contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[3]==turno){
                contadorTurno++;
            }
        });

        //Por que es equivalente
        /*
        for (var i =0; i < mtzAlumnos.lenght; i++) {
            mtzTurno = mtzAlumnos[i][3];    //Turno
            if(mtzTurno == turno){
                contadorTurno
            }
        }
        */
    }
    document.getElementById("txtResult").value = contadorTurno;
}