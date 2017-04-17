window.onload = function (){
    var dividendo = 10;
    var divisor;
    
    try {
        var resultado = dividendo / divisor;
    }
    catch (divisor){
        alert ("Division Imposible");
    }
    finally {
        divisor = 2;
        resultado = dividendo / divisor;
        
        document.getElementById('result').innerHTML = "El resultado es: "+resultado;
    }
}