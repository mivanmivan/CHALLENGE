// Función para encriptar el texto
function encryptText() {
    const input = document.getElementById('inputText').value; // Obtenemos el texto ingresado
    let encrypted = '';
    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) + 10); // Sumamos 10 al valor ASCII de cada carácter
    }
    document.getElementById('outputText').innerText = encrypted; // Mostramos el texto encriptado
}

// Función para desencriptar el texto
function decryptText() {
    const input = document.getElementById('inputText').value; // Obtenemos el texto ingresado
    let decrypted = '';
    for (let i = 0; i < input.length; i++) {
        decrypted += String.fromCharCode(input.charCodeAt(i) - 10); // Restamos 10 al valor ASCII de cada carácter
    }
    document.getElementById('outputText').innerText = decrypted; // Mostramos el texto desencriptado
}