function encriptarTextoIngresado() {
    let textoIngresado = document.getElementById("textoIngresado").value;
    let clave = CryptoJS.enc.Utf8.parse('1234567890123456'); 
    let iv = CryptoJS.enc.Utf8.parse('1234567890123456');
    let textoIngresadoEncriptado = CryptoJS.AES.encrypt(textoIngresado, clave, { iv: iv }).toString();
    document.getElementById("salidadTexto").value = textoIngresadoEncriptado;
}
function mostrarTextoEncriptado() {
    const textoIngresado = document.getElementById('textoIngresado').value;
    const salidadTexto = document.getElementById('salidadTexto');
    salidadTexto.textContent = encriptarTextoIngresado();
    document.getElementById('textoIngresado').value = "";
}
function desencriptarTexto() {
    let textoEncriptado = document.getElementById('salidadTexto').value;
    let clave = CryptoJS.enc.Utf8.parse('1234567890123456'); 
    let iv = CryptoJS.enc.Utf8.parse('1234567890123456'); 
    let bytes = CryptoJS.AES.decrypt(textoEncriptado, clave, { iv: iv });
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('textoIngresado').value = textoDesencriptado;
}
function mostrarTextoDencriptado() {
    const textoIngresado = document.getElementById('salidadTexto').value;
    /**const salidadTextoDesencriptado = document.getElementById('salidadTextoDesencriptado');*/
    textoIngresado.textContent = desencriptarTexto();
    document.getElementById('salidadTexto').value = "";
}
