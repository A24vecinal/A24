export const loginCheck = user => {
    if (user) {
        /* Si el usuario existe, comprobar si este tiene un grupo */
        /* if (condition) {
            
        } else {
            Si no tiene un grupo, mostrar la pag de CrearOUnirseAUnGrupo
            location.href = "../2.CrearOUnirseAUnGrupo/login-grupos.html"
        } */
        location.href = "../2.CrearOUnirseAUnGrupo/login-grupos.html"
    }
}