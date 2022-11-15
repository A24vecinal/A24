document.getElementById("formularioUsuariosIniciarSesion").addEventListener("submit", registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    var nombre = getElementVal("nombreUsuario");
    var telefono = getElementVal("telefonoUsuario");
    var direccion = getElementVal("direccionUsuario");
    if(nombre != "" && telefono != "" && direccion != ""){
        guardarUsuario(nombre,telefono,direccion);
        //para resetear el formulario
        document.getElementById("formularioUsuariosIniciarSesion").reset();
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

function guardarUsuario (nombre,telefono,direccion){
    db.collection("Usuarios").doc(telefono).set({
        Nombre: nombre,
        Telefono: telefono,
        Direccion: direccion,
    })
    .then((docRef) => {
        alert("Registro exitoso");
        location.href = "../2.CrearOUnirseAUnGrupo/login-grupos.html"
    })
    .catch((error) => {
        alert("Error en el registro");
    });
    
    db.collection("aux").doc(telefono).set({Telefono: telefono});
    
};