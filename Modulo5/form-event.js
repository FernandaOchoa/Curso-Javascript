window.onload = function(){
    var myForm = document.getElementById('myForm');
    myForm.onsubmit= function(){
        
        //alert(document.getElementById('nombre').value);
        if(document.getElementById('nombre').value == "david"){
            return false;
        }
    }
    
    
}