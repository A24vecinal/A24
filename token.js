var digitos = "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
var token = "";
/* funcion que genera un token de forma random, cambiar el i < n, 
con n = 8 actualmente para que el token sea más largo o corto */
for (let i = 0; i < 8; i++) {
    token = token + digitos.charAt(Math.floor(Math.random() * digitos.length));
}

console.log(token);
