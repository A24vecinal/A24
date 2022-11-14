document.getElementById("formularioGrupo").addEventListener("submit", registrarGrupo);

function registrarGrupo(){
    //e.preventDefault();
    var nombreGrupo = getElementVal("nombreGrupo");
    if(nombreGrupo != "" ){
        codigoGrupo = generarToken();
        guardarGrupo(nombreGrupo, codigoGrupo);
    }else{
        alert("Inserte el codigo del grupo")
    }
    
    //para resetear el formulario
    document.getElementById("formularioGrupo").reset();
}

function getElementVal(id){
    return document.getElementById(id).value;
}

async function guardarGrupo(nombreGrupo, codigoGrupo) {
    db.collection("Grupos").doc(codigoGrupo).set({
        NombreDelGrupo: nombreGrupo,
        CodigoDelGrupo: codigoGrupo,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
    
    const document = await db.collection("aux").get(); // Retorna una Promise
    var telefono;
    document.forEach(doc => telefono = doc.id);

    db.collection("Usuarios").doc(telefono).collection("GruposDelUsuario").doc(codigoGrupo).set({}); //buscar referencia a telefono
    //alert(telefono);
    db.collection("aux").doc(telefono).delete();
    
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
