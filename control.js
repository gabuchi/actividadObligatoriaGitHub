var formulario = document.getElementById("formulario");
var boton = document.getElementById("formulario__btn");

var validarUsuario = function (e) {
    if (formulario.usuario.value == 0) {
        alert("Complete su usuario. El mismo debe contener un @");
        e.preventDeFault();
    }
}
var validarPassword = function (e) {
    if (formulario.password.value == 0) {
        alert("El campo clave no debe estar vacio");
        e.preventDeFault();
    }       
}
var validar = function (e) {
    validarUsuario(e);
    validarPassword(e)
}     
formulario.addEventListener("submit", validar);