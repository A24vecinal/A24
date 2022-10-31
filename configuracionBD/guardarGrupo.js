document.getElementById("formularioGrupo").addEventListener("submit", registrarGrupo);
function registrarGrupo(e){
    e.preventDefault();
    var nombreGrupo = getElementVal("nombreGrupo");
    if(nombreGrupo != "" ){
        codigoGrupo = generarToken();
        guardarEnDB(nombreGrupo, codigoGrupo);
    }else{
        alert("Inserte el codigo del grupo")
    }
    
    //para resetear el formulario
    document.getElementById("formularioGrupo").reset();
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const guardarEnDB = (nombreGrupo, codigoGrupo) => {
    db.collection("Grupos").add({
        NombreDelGrupo: nombreGrupo,
        CodigoDelGrupo: codigoGrupo,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
};
function generarToken(){
    var digitos = "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    var token = "";
    /* funcion que genera un token de forma random, cambiar el i < n, 
    con n = 8 actualmente para que el token sea más largo o corto */
    for (let i = 0; i < 8; i++) {
       token = token + digitos.charAt(Math.floor(Math.random() * digitos.length));
    }
    return token;
};/* abcdefghijklmnopqrstuvwxyz */
