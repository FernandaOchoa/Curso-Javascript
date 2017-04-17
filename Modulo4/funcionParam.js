function suma(numero1, numero2){
    var resultado = numero1 + numero2;
    document.getElementById('suma').innerHTML = "La suma es: "+resultado;
}
function resta (numero1, numero2){
    var resultado = numero1 - numero2;
    document.getElementById('resta').innerHTML = "La resta es: "+resultado;
}
function multiplicacion (numero1, numero2){
    var resultado = numero1 * numero2;
    document.getElementById('multiplicacion').innerHTML = "La multiplicacion es: "+resultado;
}
function division (numero1, numero2){
    var resultado = numero1 / numero2;
    document.getElementById('division').innerHTML = "La division es: "+resultado;
}
function modulo (numero1, numero2){
    var resultado = numero1 % numero2;
    document.getElementById('modulo').innerHTML = "El modulo es: "+resultado;
}
window.onload = function (){
    suma(10,12);
    resta(25,13);
    multiplicacion(5,23);
    division(144,12);
    modulo(28,4);
}