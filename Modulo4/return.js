function suma(a,b){
    var res = a + b;
    return res;
}

function resta(a,b){
    var res = a - b;
    return res;
}

function multiplicacion(a,b){
    var res = a * b;
    return res;
}

function division(a,b){
    var res = a / b;
    return res;
}

function modulo(a,b){
    var res = a % b;
    return res;
}

window.onload = function () {
    var x = 215;
    var y = 115.5;
    
    var sum = suma(x,y);
    var rest = resta(x,y);
    var mult = multiplicacion(x,y);
    var divi = (x,y);
    var modu = (x,y);
    
    document.getElementById('result').innerHTML = "La suma es: " + sum;
    document.getElementById('result').innerHTML += "</br>"+"La resta es: "+rest;
    document.getElementById('result').innerHTML += "</br>"+"La multiplicacion es: "+mult;
    document.getElementById('result').innerHTML += "</br>"+"La division es: "+divi;
    document.getElementById('result').innerHTML += "</br>"+"El modulo es: "+modu;
    
}