// FUNCION APLICA EL SECCIONADOR PREVIAMENTE
function seleccionador(link) {
    var opciones = document.querySelector('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    //DESAPERECER EL MENU SELECCIONADO RESPONSIIVE
    var x =document.getElementById("nav");
    x.className = "";
}

//MUESTRA MENU RESPONSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}