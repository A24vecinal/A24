import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from '../configuracionBD/firebase.js'

import { loginCheck } from '../configuracionBD/loginCheck.js'

import '../configuracionBD/validarUsuarios.js'
import '../configuracionBD/loginGoogle.js'


onAuthStateChanged(auth, async (user) => {
    console.log(user);
    loginCheck(user);
/*     if (user) {

    } else {

    } */

})