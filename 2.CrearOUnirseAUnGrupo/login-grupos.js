/* document.querySelector(".boton1").addEventListener("button", mostrar_CrearNuevoGrupo);
document.querySelector(".boton2").addEventListener("button", mostrar_UnirseGrupo); */

console.log('nunu');


function mostrar_CrearNuevoGrupo() {
    document.getElementById('buttons-grupos').style.display = 'none';
    document.getElementById('page-nuevo-grupo').style.display = 'block';
    document.getElementById('botonAtrasDiv').style.display = 'block';
    console.log('hola');
    
}

function mostrar_UnirseGrupo() {
    document.getElementById('buttons-grupos').style.display = 'none';
    document.getElementById('page-unirse-grupo').style.display = 'block';
    document.getElementById('botonAtrasDiv').style.display = 'block';
    console.log('lala');
    
}

function volverAtras() {
    document.getElementById('buttons-grupos').style.display = 'block';
    document.getElementById('page-unirse-grupo').style.display = 'none';
    document.getElementById('page-nuevo-grupo').style.display = 'none';
    document.getElementById('botonAtrasDiv').style.display = 'none';
}