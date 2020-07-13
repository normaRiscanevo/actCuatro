// Funcion que valida el formulario
function validarForma(forma) {
    console.log(" ");
    console.log("validando forma");
    var usuario = forma.usuario;
    console.log("El usuario es" + usuario.value);
    //Validamos ahora el nombre del usuario
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar su nombre completo");
        usuario.focus();
        usuario.select();
        return false;
    }

// //Formulario validado
alert("Formulario válido, enviando datos...");
return true;
}
