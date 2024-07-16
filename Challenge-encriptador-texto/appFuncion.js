   function minusculas(textoIngresado) {
     for (let i = 0; i < textoIngresado.length; i++) {
        let char = textoIngresado[i];
        if (char.toLowerCase() !== char.toUpperCase()) {
            if (char !== char.toLowerCase()) {
                return false;
            }
        }
     }
     return true;
   } 
    function acentos(textoIngresado) {
    return /[áéíóúüÁÉÍÓÚÜ]/.test(textoIngresado);
    }
    function caracteres(textoIngresado) {
        return /[^a-zA-Z0-9áéíóúüÁÉÍÓÚÜ\s]/i.test(textoIngresado); /*  /^[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/i.test(textoIngresado); */
        }
    function encriptarTextoIngresado() {
    let textoIngresado = document.getElementById("textoIngresado").value;
        if (textoIngresado.length !== 0) {
           if (caracteres(textoIngresado)===false) {
             if (acentos(textoIngresado)===false) { 
                if (minusculas(textoIngresado)===true) {
                 let textoIngresadoEncriptado = textoIngresado
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
                    document.getElementById("salidadTexto").value = textoIngresadoEncriptado ;
                }  else {
                     swal('Debes ingresar un texto para Encriptar que tenga todas sus letras en minusculas');   
                        }
              }    else {
                     swal('Debes ingresar un texto para Encriptar que tenga todas sus vocales sin acentos y sin caracteres especiales');   
                   }     
            } else {
                     swal('Debes ingresar un texto para Encriptar que no contenga caracteres especiales');
                   } 
        }     else {
                     swal('Debes ingresar un texto para Encriptar');
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
        if (textoEncriptado.length !== 0) {
            let textoDesencriptado = textoEncriptado
                .replace(/enter/g,"e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
                document.getElementById("salidadTexto").value = textoDesencriptado ;
       } else {
          swal('Debes ingresar un texto para Desencriptar');
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

  
     
        