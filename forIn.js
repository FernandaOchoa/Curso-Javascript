window.onload = function (){
    var miObjeto = {a:93, b: 72, c: 56, d:88, e:85,f:91};
    var key = [];
    var i=0;
    
    for(key[i++] in miObjeto)
        console.log(key);
}