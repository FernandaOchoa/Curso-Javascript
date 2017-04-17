window.onload = function(){
    var contador = 0;
    while (contador < 101) {
        document.getElementById('result').innerHTML += "</br>" +contador;
        contador++;
    }
}