function encriptarTextoIngresado() {
    let textoIngresado = document.getElementById("textoIngresado").value;
    if (textoIngresado.length != 0) {
         let textoIngresadoEncriptado = textoIngresado
             .replace(/i/gi, "imes")
             .replace(/e/gi, "enter")
             .replace(/a/gi, "ai")
             .replace(/o/gi, "ober")
             .replace(/u/gi, "ufat");
             document.getElementById("salidadTexto").value = textoIngresadoEncriptado ;
    } else {
        document.getElementById("salidadTexto").value = "No se Ingreso Texto para Encriptar";
    }
  }
function mostrarTextoEncriptado() {
    let textoIngresado = document.getElementById('textoIngresado').value;
    let salidadTexto = document.getElementById('salidadTexto');
    salidadTexto.textContent = encriptarTextoIngresado();
    document.getElementById('textoIngresado').value = "";
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('textoIngresado').value;
    if (textoEncriptado.length != 0) {
        let textoDesencriptado = textoEncriptado
            .replace(/imes/gi, "i")
            .replace(/enter/gi, "e")
            .replace(/ai/gi,"a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
            document.getElementById("salidadTexto").value = textoDesencriptado ;
   } else {
        document.getElementById('textoIngresado').value = "No se Ingreso Texto para Desencriptar";
   }
}
function mostrarTextoDencriptado() {
    let textoIngresado = document.getElementById('textoIngresado').value;
    let salidadTexto = document.getElementById('salidadTexto');
    salidadTexto.textContent = desencriptarTexto();
    document.getElementById('textoIngresado').value = "";
}
function copyToClipboard() {
      let texto=document.getElementById('salidadTexto').value;
      navigator.clipboard.writeText(texto).then(function() {
      }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
      });
    }
