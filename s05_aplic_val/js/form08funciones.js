function verTablas(mtzAlumnos)
{
    contadorTurno=0;
    contadorGenero=0;
    orden=0;
    res="";

    t01="<table>";
    t01+="<tr>";
    t01+="<th class='titulo' colspan='3'>Datos Personales"+res+"</th>";
    t01+="</tr>";
    t01+="<tr>";
    t01+="<th>Genero</th> <th>orden</th> <th>Apellidos y Nombres</th>";
    t01+="</tr>";

    if(mtzAlumnos.length>0){
        for(var i=0; i<mtzAlumnos.length; i++){
            turnoMtz=mtzAlumnos[i][3];
            generoMtz=mtzAlumnos[i][4];
            if(turnoMtz==turno && generoMtz==genero){
                orden++;
                apeNom=mtzAlumnos[i][2]+", "+mtzAlumnos[i][1];
                genero1=fnGenero(mtzAlumnos[i][4]);
                turno1=fnTurno(mtzAlumnos[i][3]);
                t01+="<tr>";
                t01+="<td>"+genero1+"</td> <td>"+orden+"</td> <td>"+apeNom+"</td>";
                t01+="</tr>";+orden+
                contadorTurno++;
                contadorGenero++;
            }
        }
    }
    t01+="<table>";
    document.getElementById("marco").innerHTML=t01;
}

var turno=0;
var genero=0;

function fnGenero(xGenero){
	if(xGenero=="M"){
        return "Masculino";
    } else if(xGenero=="F"){
        return "Femenino";
    }
}
function fnTurno(xTurno){
	if(xTurno=="M"){
        return "Dia";
    } else if(xTurno=="N"){
        return "Noche";
    } else if(xTurno=="T"){
        return "Tarde";
    }
}

function borrarMarco(){
	document.getElementById("marco").innerHTML="Resultado borrado..."
}
function verTurno(cambioTurno){
    turno=cambioTurno;
    verTablas(alumnos);
}
function verGenero(cambioGenero){
    genero=cambioGenero;
    verTablas(alumnos);
}