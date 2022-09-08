//declaracion de variables
const inputTexto = document.querySelector(".textarea1");
const mensaje = document.querySelector(".textarea2");
const mensajeParrafo = document.querySelector(".mensaje_parrafo");
const h1 = document.querySelector(".h1_mensaje");
const copiTexto = document.querySelector(".bton_copi");

//funcion que contiene el arreglo para codificar 
function encriptar(stringEncritada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncritada = stringEncritada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncritada.includes(matrizCodigo[i][0])){
            stringEncritada = stringEncritada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncritada;
}
//Orden que se le da al boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    mensajeParrafo.style.color = "white";
    h1.style.color ="white";
    inputTexto.value="";
}
//Orden que se le da al boton copiar
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}
//funcion que contiene el arreglo para descodificar 
function desencriptar(stringDesencritada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencritada = stringDesencritada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencritada.includes(matrizCodigo[i][1])){
            stringDesencritada = stringDesencritada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencritada;
}
//Orden que se le da al botn para desencriptar
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}
    
