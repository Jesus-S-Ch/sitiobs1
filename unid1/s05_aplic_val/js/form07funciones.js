function verTablas(turnoElegido, mtzAlumnos)
{
    
    orden=0;
    foto=0;
    res="";
    
    t01 ="<table border='1'>";
    t01 +="<tr><th class='titulo' colspan='4'>Datos Personales </th></tr>";
    t01 +="<tr><th>No.</th><th>Apellidos y Nombres</th> <th>Género</th> <th>Foto</th> </tr> ";
    if(mtzAlumnos.length >0){
        for(var i=0; i< mtzAlumnos.length; i++){
            turnoArray=mtzAlumnos[i][3];  //turno
            foto++;
            if(turnoArray==turnoElegido){
                orden++;
                NombreA=mtzAlumnos[i][2] +", "+ mtzAlumnos[i][1];
                genero=fnGenero(mtzAlumnos[i][4]);

            
            t01 +="<tr>";
            t01+="<td>"+orden+"</td> <td>"+NombreA+"</td> <td>"+genero+"</td> <td align='center'><img src='img/f"+foto+".jpg'></td>";
            t01 +="</tr>";  
            }
        }
    }
    t01 +="</table>"
   


    document.getElementById("marco").innerHTML=t01; 
	
}
 
function fnGenero(xGenero){
    if(xGenero=="M"){
        return "Masculino";
    }else if(xGenero=="F"){
        return "Femenino";
    }
}
function borrarMarco(){
    document.getElementById("marco").innerHTML="Resultado Borrado..."

	
}