document.getElementById("formParaUnirseAGrupo").addEventListener("submit", agrUsers);

function agrUsers(){
    var codigoGrupo = getElementVal("codigoGrupo");
    
    if(codigoGrupo != "" ){
        agregarUsuarioEnGrupo(codigoGrupo);
    }else{
        alert("Inserte el codigo del grupo")
    }
    //alert(codigoGrupo);
    //para resetear el formulario
    document.getElementById("formParaUnirseAGrupo").reset();
}
async function agregarUsuarioEnGrupo(codigoGrupo) {
    // db.collection("Grupos").doc(codigoGrupo).set({
    //     Nada: codigoGrupo,
    // })
    var telefono;
    const document = await db.collection("aux").get(); // Retorna una Promise
    document.forEach(doc => telefono = doc.id);
    //alert(telefono);

    db.collection("Usuarios").doc(telefono).collection("GruposDelUsuario").doc(codigoGrupo).set({}) //buscar referencia a telefono
    db.collection("aux").doc(telefono).delete()
    db.collection("Grupos").doc(codigoGrupo).collection("UsuarioDelGrupos").doc(telefono).set({})
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
    //alert("llega");
}