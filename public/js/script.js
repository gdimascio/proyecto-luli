
function display_menu(menu){
    var x = document.getElementById(menu);
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function currentPrecio(n) {
    showPrecio(precioIndex = n);
}
function showPrecio(n) {
    let i;
    let paquetes = document.getElementsByClassName("paquete");
    // let menu = document.getElementsByClassName("menus");
    if (n > paquetes.length) {precioIndex = 1}    
    if (n < 1) {precioIndex = paquetes.length}
    for (i = 0; i < paquetes.length; i++) {
        paquetes[i].style.display = "none";  
    }
    paquetes[precioIndex-1].style.display = "block";  
    // menu[precioIndex-1].className += " active";
}

// script reemplazado por animacion */
function showMetodo(){
    let metodos = document.getElementsByClassName("metodologia-checkbox-topic");
    if(metodoIndex > metodos.length-1){metodoIndex = 0; 
    }
    for (i = 0; i < metodos.length; i++) {
        metodos[i].style.display = "none";  
    }
    metodos[metodoIndex].style.display = "block";
    setTimeout("showMetodo(metodoIndex++)", time);
}
