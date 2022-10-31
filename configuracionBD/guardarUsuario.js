document.getElementById("formularioUsuarios").addEventListener("submit", registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    var nombre = getElementVal("nombreUsuario");
    var telefono = getElementVal("telefonoUsuario");
    var direccion = getElementVal("direccionUsuario");

    if(nombre != "" && telefono != "" && direccion != ""){
        guardarEnDB(nombre,telefono,direccion);
        //para resetear el formulario
        document.getElementById("formularioUsuarios").reset();
    }else{
        if(nombre == ""){
            alert("te falto insertar el nombre");
        }
        if(direccion == ""){
            alert("te falto insertar la direccion");
        }
        if(telefono == ""){
            alert("te falto insertar el telefono");
        }
    }
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const guardarEnDB = (nombre,telefono,direccion) => {
    db.collection("Usuarios").add({
        Nombre: nombre,
        Telefono: telefono,
        Direccion: direccion,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
};
