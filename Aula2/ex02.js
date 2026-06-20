function validarSenha(senha) {
    if (senha.length >= 8) {
        return true;
    } else {
        return false;
    }
}

let senha = prompt("Digite uma senha:");

if (validarSenha(senha)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca – minimo 8 caracteres");
}
