function suma(a,b){
    var res = a + b;
    return res;
}

function restar(a,b){
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
    document.getElementById('result').innerHTML = sum;
    
    
}