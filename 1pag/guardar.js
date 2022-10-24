console.log('hola');

function guardar(){
    db.collection("usuarios").add({
        nombre: document.getElementById(nombreUsuario).value,
        telefono: document.getElementById(telefonoUsuario).value,
        direccion: document.getElementById(direccionUsuario).value,
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });

}