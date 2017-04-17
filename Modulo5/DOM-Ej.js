window.onload = function(){
    var info = document.getElementById('informacion');
    
    //Numero de enlaces que tenga la pagina
    var enlaces= document.getElementsByTagName("a");
    info.innerHTML="Numero de enlaces = "+enlaces.length;
    
    //Direccion del penultimo enlace
    var mensaje = "El penultimo enlace apunta a "+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML +"</br>" + mensaje;
    
    //Numero de enlaces que apuntan a http://prueba
    var contador = 0;
    for (var i=0;  i< enlaces.length; i++){
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    info.innerHTML = info.innerHTML +" </br>" +contador + "enlaces que apuntan a http://prueba";
    
    
    
}