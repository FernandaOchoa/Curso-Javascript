window.onload = function(){
    var out = "";
    
    for ( var i = 0; i < 45; i++){
        out += i;
        out += "</br>"
    }
    document.getElementById('result').innerHTML = out;
}