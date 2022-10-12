const firebaseConfig = {
    apiKey: "AIzaSyCu5Jxx2dos-tG0N97o1bAXRc3hiz_resk",
    authDomain: "pruebabasededatos-a9426.firebaseapp.com",
    databaseURL: "https://pruebabasededatos-a9426-default-rtdb.firebaseio.com",
    projectId: "pruebabasededatos-a9426",
    storageBucket: "pruebabasededatos-a9426.appspot.com",
    messagingSenderId: "827771459196",
    appId: "1:827771459196:web:fea3ee20d9551a8e829bf9"
  };

  firebase.initializeApp(firebaseConfig);

var pruebaBaseDeDatosBdD = firebase.database().ref("pruebaBaseDeDatos");
document.getElementById("pruebaBaseDeDatos").addEventListener("submit", registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    var nombre = getElementVal("nombreUsuario");
    var apellido = getElementVal("apellidoUsuario");
    var telefono = getElementVal("telefonoUsuario");

    saveMessages(nombre,apellido,telefono);
    //para resetear el formulario
    document.getElementById("pruebaBaseDeDatos").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const saveMessages = (nombre,apellido,telefono) => {
    var newUsuario = pruebaBaseDeDatosBdD.push();
    newUsuario.set({
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
    });
};