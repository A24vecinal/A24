document.getElementById("formularioGrupo").addEventListener("submit", registrarGrupo);

function registrarGrupo(e){
    e.preventDefault();
    var nombreGrupo = getElementVal("nombreGrupo");
    
    if(nombreGrupo != "" ){
        guardarEnDB(nombreGrupo);
    }else{
        alert("inserte el codigo del grupo")
    }
    
    //para resetear el formulario
    document.getElementById("formularioGrupo").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const guardarEnDB = (nombreGrupo) => {
    db.collection("Grupos").add({
        NombreDelGrupo: nombreGrupo,
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
};
