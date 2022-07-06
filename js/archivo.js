
/*******************************ARTISTAS****************************************/

document.getElementById("agregar1").addEventListener("click", funcionArtistas);
function funcionArtistas(){
    let artista=document.getElementById("artista").value.toLowerCase;
     artista == "los tipitos" || "airbag"?
   
        document.getElementById("respuesta").innerText="Entradas disponibles"
 
       :document.getElementById("respuesta").innerText="Entradas agotadas"
   
    let enJson=JSON.stringify(artista)
    localStorage.setItem("artistas", artista)
}

/*******************************FECHAS****************************************/

document.getElementById("agregar2").addEventListener("click", funcionFechas);
function funcionFechas(){
    let artista=document.getElementById("artista").value.toLowerCase;
    let fecha=document.getElementById("fecha").value;
    artista=="los tipitos" && fecha=="17/07/2022"?
        document.getElementById("repuesta").innerText="Los Tipitos 17/07/2022"
  
        :document.getElementById("respuesta").innerText="Airbag 23/07/2022"
    
        document.getElementById("respuesta").innerText="Entradas agotadas"
    
    let enJson1=JSON.stringify(fecha)
    localStorage.setItem("fechas", fecha)
}


/*******************************ENTRADAS****************************************/

document.getElementById("agregar3").addEventListener("click", funcionEntradas);
function funcionEntradas(){
    let entrada=document.getElementById("entrada").value;   
    entrada<=3?
        document.getElementById("respuesta").innerText="Ya tienes tus entradas!"

       :document.getElementById("respuesta").innerText="Has excedido el numero disponible de entradas por persona"
  
    let enJson2=JSON.stringify(entrada)
    localStorage.setItem("entradas", entrada)
}






















        