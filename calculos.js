window.onload = function() {
    document.getElementById('btnCalc').addEventListener('click', calcularInteres)
}
function calcularInteres(e){
    var monto = parseFloat(document.getElementById('monto').value);
    
    var meses = parseFloat(document.getElementById('meses').value);
    
    
    var interes = parseFloat(document.getElementById('interes').value);
    
    //console.log(monto);
    //console.log(meses);
   //console.log(interes);
    
    var x = 0;
    var out ="";
    
    while ( x < meses) {
        monto = monto + (monto *(interes/12/100));
        out += "Meses " + (x+1) + " $ "+
            Math.floor(monto);
        out += "</br>";
        x++;
    }
    
    document.getElementById('result').innerHTML = out;    
}