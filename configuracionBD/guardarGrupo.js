///document.getElementById("formularioGrupo").addEventListener("submit", registrarGrupo);

function registrarGrupo(){
    var nombreGrupo = getElementVal("nombreGrupo");
    if(nombreGrupo != "" ){
        codigoGrupo = generarToken();
        guardarGrupo(nombreGrupo, codigoGrupo);
        cargarDatos(codigoGrupo);
    }else{
        alert("Inserte el nombre del grupo")
    }
    //para resetear el formulario
    document.getElementById("formularioGrupo").reset();
}

async function guardarGrupo(nombreGrupo, codigoGrupo) {
    db.collection("Grupos").doc(codigoGrupo).set({
        NombreDelGrupo: nombreGrupo,
        CodigoDelGrupo: codigoGrupo,
        Alarma: false,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
};

function agregarUsuarioPorCodigo(){
    var codigoGrupo = getElementVal("codigoGrupo");
    if(codigoGrupo != "" ){
        cargarDatos(codigoGrupo);
    }else{
        alert("Inserte el codigo del grupo")
    }
    //para resetear el formulario
    document.getElementById("formParaUnirseAGrupo").reset();
}

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

