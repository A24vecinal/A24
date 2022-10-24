console.log('hola');

document.getElementById("formulariodegrupo").addEventListener("submit", registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    var nombregrupo = getElementVal("nombregrupo");
    
    if(nombregrupo != null ){
        guardarEnDB(nombregrupo);
    
    }
    
    //para resetear el formulario
    document.getElementById("formulariodegrupo").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const guardarEnDB = (nombregrupo) => {
    db.collection("grupo").add({
        Nombredegrupo: nombregrupo,
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
};
