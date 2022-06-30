let cantidadEntradas=document.getElementById("cantidadEntradas")
let respuesta=document.getElementById("respuesta");
let artistas=document.getElementById("artistas");

artistas.addEventListener("onchange", respuesta1)
function respuesta1(){
    if(artistas=="Los Tipitos"||"Airbag"){
    respuesta.innerHTML="Entradas disponibles"
    }
    else{
    respuesta.innerHTML="Entradas agotadas"
    }
    }
    respuesta1();


    cantidadEntradas.addEventListener("onchange", respuesta2)
    function respuesta2(){
        if(cantidadEntradas<=3){
        respuesta.innerHTML="Ya tienes tus entradas"
        }
        else{
        respuesta.innerHTML="Entradas agotadas"
        }
        }
        respuesta2();



/*cantidadEntradas.onchange = ()=>{
    respuesta.innerHTML = artistas.onchange = ()=>{
        function artistas(){
            if(artistas=="Los Tipitos"||"Airbag"){
            alert ("Entradas disponibles")
            
            }
            else{
            alert("Entradas agotadas")
            }
            }
            artista()
    }
}

/*cantidadEntradas.onchange = ()=>{
    respuesta.innerHTML = function artistasEntradas(){
        if(cantidadEntradas<=3){
        alert ("Ya tienes tus entradas")
        }
        else{
        alert("Has excedido el número permitido de entradas por persona")
        }
        }
        artistaEntrada*/