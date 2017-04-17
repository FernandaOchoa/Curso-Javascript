window.onload = function(){
    var returned = confirm ("¿Estas seguro de que quieres eleminar esto?");
    console.log(returned);
    
    if(returned){
        console.log("Es verdadero");
        alert("Su registro ha sido eliminado con exito");
    } else {
        console.log("Es falso");
        alert("Cancelaste la operacion");
    }
    
}