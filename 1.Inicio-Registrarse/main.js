import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { auth, db } from '../configuracionBD/firebase.js'

import { loginCheck } from '../configuracionBD/loginCheck.js'
import { setupParticipantes } from '../configuracionBD/participantes.js'

import '../configuracionBD/signupForm.js'
import '../configuracionBD/loginGoogle.js'
/* import '../configuracionBD/logout.js' */


onAuthStateChanged(auth, async (user) => {
    console.log(user);
    /* if (user) {
        const querySnapshot = await getDocs(collection(db, 'Usuarios'))
        console.log(querySnapshot);
        setupParticipantes(querySnapshot.docs)
    } else {
        setupParticipantes([])
    } */
    loginCheck(user);

})