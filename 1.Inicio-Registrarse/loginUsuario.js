/* import '../configuracionBD/firebase.js' */
/* import '../configuracionBD/validarUsuarios.js' */

console.log('Hello World');

function mostras_Registrarse() {
    document.getElementById('IniciarSesionDiv').style.display = 'none';
    document.getElementById('RegistrarseDiv').style.display = 'block';
}

function mostras_IniciarSesion() {
    document.getElementById('IniciarSesionDiv').style.display = 'block';
    document.getElementById('RegistrarseDiv').style.display = 'none';
}