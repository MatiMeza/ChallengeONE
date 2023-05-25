// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const botonEncriptar = document.querySelector("#enbutton");
const botonDesencriptar = document.querySelector("#desbutton");
const botonCopiar = document.querySelector("#cpbutton");
const munieco = document.querySelector(".contenedormunieco");
const parrafo = document.querySelector(".contenedorparrafo");
const resultado = document.querySelector("#textoresultado");

botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiar);

function copiar() {
    let contenido = document.querySelector("#textoresultado").textContent;
    navigator.clipboard.writeText(contenido)
}


function encriptar() {
    ocultar();
    let cajatexto = document.querySelector("#cajatexto");
    resultado.innerHTML = encriptarTexto(cajatexto.value);
}

function desencriptar() {
    ocultar();
    let cajatexto = document.getElementById("cajatexto");
    resultado.innerHTML = desencriptarTexto(cajatexto.value);
}

function ocultar() {
    munieco.innerHTML = ""
    parrafo.innerHTML = ""
}



function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}
