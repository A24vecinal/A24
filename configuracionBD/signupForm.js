import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { } from './firebase.js'
const validarUsuarios = document.querySelector('#formularioUsuariosIniciarSesion')

console.log(validarUsuarios);

validarUsuarios.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nameUser = validarUsuarios['nombreUsuario'].value
    const telUser = validarUsuarios['telefonoUsuario'].value
    const dirUser = validarUsuarios['direccionUsuario'].value

    console.log(nameUser, telUser, dirUser);
    
    try {
        const UserCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(UserCredentials);
    } catch (error) {
        console.log(error);
        
    }
    
})