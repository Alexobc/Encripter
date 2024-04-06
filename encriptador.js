function reemplazarVocales(texto) {
    const vocales = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };



    // funciones encriptar _ desencriptar

    for (let vocal in vocales) {

        const expresionRegular = new RegExp(vocal, 'g');
        texto = texto.replace(expresionRegular, vocales[vocal]);
    }
    return texto;
}




// validar texto en el input

const filtro = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
function verificar() {

    let ingrText = document.getElementById("textoOriginal").value;
    if (ingrText.match(filtro) != null) {

        document.getElementById("textoOriginal").value = null;
    }


}



function transformarTexto() {

    verificar();

    const textoOriginal = document.getElementById('textoOriginal').value;
    const textoTransformado = reemplazarVocales(textoOriginal);
    document.getElementById('resultado').value = textoTransformado;
    document.getElementById('textoOriginal').value = null;


    document.getElementById("copiar").style.display = 'block';
    document.getElementById("img").style.display = 'none';
    document.getElementById("msj").style.display = 'none';
    document.getElementById("parrafo").style.display = 'none';

   
}


function desencriptarTexto(textoEncriptado) {
    const vocales = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    for (let vocalEncriptada in vocales) {
        const expresionRegular = new RegExp(vocalEncriptada, 'g');
        textoEncriptado = textoEncriptado.replace(expresionRegular, vocales[vocalEncriptada]);
    }
    return textoEncriptado;
}

function desencriptar() {
    const textoTransformado = document.getElementById('textoOriginal').value;
    const textoOriginal = desencriptarTexto(textoTransformado);
    document.getElementById('resultado').value = textoOriginal;
    document.getElementById('textoOriginal').value = null;
}
// funcion copiar y borrar despues de
function copy() {
    var copyText = document.getElementById("resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('resultado').value = null;
   
    
    // document.getElementById("copiar").style.display = 'block';
    // document.getElementById("img").style.display = 'block';
    // document.getElementById("msj").style.display = 'none';
    // document.getElementById("parrafo").style.display = 'none';


}