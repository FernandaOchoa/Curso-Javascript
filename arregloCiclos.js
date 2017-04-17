window.onload = function(){
    var carros = ["Honda", "Toyota","Audi","BMW","Ford","Jeep","Mazda"];
    
    var elementos = carros.length;
    var x = 0;
    var out = "";
    
    out += "</br>";
    out += elementos;
    out += "</br>";
    
    while (x < elementos){
        out += carros[x];
        out += "</br>";
        x++;
    }
    document.getElementById('result').innerHTML = out;
    
    var ciudades = ["CDMX", "Leon", "Guadalajara", "Monterrey", "Queretaro","Cancun","Veracruz","Sinaloa"];
    
    var salida = "";
    var cant = ciudades.length;
    
    out += "</br>";
    salida += "La longitud del arreglo es </br>";
    salida += cant;
    out += "</br>";
    
    document.getElementById('otro').innerHTML = salida;
    
    for(var i =0; i < cant; i++){
        salida += ciudades[i];
        salida += "</br>";
    }
    document.getElementById('otro').innerHTML = salida;
    
}