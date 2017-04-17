window.onload = function(){
    var teams = ["Yankees", "Mets", "Gigants", "Jets", "Knicks","Tomateros", "Charros", "Bravos"];
    console.log(teams);
    
    var computadoras = new Array ("Vaio","HP","Acer","Mac","Razer","Asus");
    console.log(computadoras);
    
    var familia = [];
    
    document.getElementById('result').innerHTML = computadoras[3];
    document.getElementById('result').innerHTML += "</br>" + teams[4];
    document.getElementById('result').innerHTML += "</br>" + familia[0];
    
    familia[0]= "Alejandra";
    familia[1] = "Natalia";
    familia[2] = "Julia";
    computadoras[3]= "Hola";
    
     document.getElementById('result').innerHTML += "</br>" + computadoras[3];
    document.getElementById('result').innerHTML += "</br>" + familia[1];
    
}