var target;
var result;

window.onload = function (){
    
    target = document.getElementById('target');
    result = document.getElementById('result');
    
    target.onclick = function (){
        result.innerHTML = "Evento Click :D";
    }
    target.onmouseout = function () {
        result.innerHTML = "Mouse Out Event :D";
    }
    
    target.addEventListener('mouserover', function(e){
        
        result.innerHTML = "Mouse Over Event";
        console.log(e);
    });
    
}