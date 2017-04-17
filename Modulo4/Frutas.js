function Frutas(nombre, color, peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
    
    this.describeColor = function(){
        return this.color;
    }
    
    this.tomaUna = function (){
        this.peso =this.peso *0.66;
        return this.peso;
        
    }
}