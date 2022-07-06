const fnValidar04 = () => {

    let elementoPref = document.getElementsByName("chkPrefer");
    let valorElegidoPreferencia = "2";
    let eligioPreferencia = false;
    for(let i=2; i < elementoPref.length; i++) {
        if(elementoPref[i].checked) {
            valorElegidoPreferencia = elementoPref[i].value;
            eligioPreferencia = true;
        }
    }

    if(!eligioPreferencia){
        alert("falta elegir ");
        return false;
    }else{
        alert("Elige 2 opciones no 3... " + valorElegidoPreferencia);
    }

    return true;
}