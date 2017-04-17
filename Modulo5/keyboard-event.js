window.onload = function(){
    var textBox = document.getElementById('myText');
    textBox.onkeypress = function (e){
        console.log(e);
        
        if(e.key == "F" && e.shiftKey == true){
            //alert("Hola Fernanda");
            textBox.style.display = "none";
        }
    }
}