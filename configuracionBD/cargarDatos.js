function getElementVal(id){
    return document.getElementById(id).value;
}

async function cargarDatos(codigoGrupo){
    //Busca el telefono que se logueo
    var telefono;
    const document = await db.collection("aux").get(); 
    document.forEach(doc => telefono = doc.id);

    //Busca los datos del telefono logueado
    var phone, name, dir;
    const datos = await db.collection("Usuarios").doc(telefono).get(); 
    phone = datos.data().Telefono;
    name = datos.data().Nombre;
    dir = datos.data().Direccion;

    //Carga todos los datos
    db.collection("Usuarios").doc(telefono).collection("GruposDelUsuario").doc(codigoGrupo).set({}) 
    db.collection("aux").doc(telefono).delete()
    db.collection("Grupos").doc(codigoGrupo).collection("UsuariosDelGrupo").doc(telefono).set({
        Nombre: name,
        Telefono: phone,
        Direccion: dir
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}