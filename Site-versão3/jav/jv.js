function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var buttonMais=document.getElementById("button-mais");

    if(pontos.style.display === "none"){ 
        pontos.style.display="inline";
        maisTexto.style.display="none";
        buttonMais.innerHTML="Leia Mais";

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        buttonMais.innerHTML="Leia Menos";
    }

}

function leiaMais2(){
    var pontos=document.getElementById("pontos2");
    var maisTexto=document.getElementById("mais2");
    var buttonMais=document.getElementById("button-mais2");

    if(pontos.style.display === "none"){ 
        pontos.style.display="inline";
        maisTexto.style.display="none";
        buttonMais.innerHTML="Leia Mais";

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        buttonMais.innerHTML="Leia Menos";
    }
}