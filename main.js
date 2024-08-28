let colorCodigo = document.getElementById("colorCodigo");

let rojo = 0;
let verde = 0;
let azul = 0;
let intervalo;

function actualizarColor() {
    let color = "rgb(" + rojo + "," + verde + "," + azul + ")";
    document.body.style.backgroundColor = color;
    colorCodigo.innerText = color;
}

function aumentarRojo() {
    rojo += 5;
    if (rojo > 255) rojo = 255;
    actualizarColor();
}

function disminuirRojo() {
    rojo -= 5;
    if (rojo < 0) rojo = 0;
    actualizarColor();
}

function aumentarVerde() {
    verde += 5;
    if (verde > 255) verde = 255;
    actualizarColor();
}

function disminuirVerde() {
    verde -= 5;
    if (verde < 0) verde = 0;
    actualizarColor();
}

function aumentarAzul() {
    azul += 5;
    if (azul > 255) azul = 255;
    actualizarColor();
}

function disminuirAzul() {
    azul -= 5;
    if (azul < 0) azul = 0;
    actualizarColor();
}

function iniciarCambio(funcion) {
    funcion();
    intervalo = setInterval(funcion, 100);
}

function detenerCambio() {
    clearInterval(intervalo);
}

document.getElementById("btnAumentarRojo").addEventListener("mousedown", () => iniciarCambio(aumentarRojo));
document.getElementById("btnDisminuirRojo").addEventListener("mousedown", () => iniciarCambio(disminuirRojo));
document.getElementById("btnAumentarVerde").addEventListener("mousedown", () => iniciarCambio(aumentarVerde));
document.getElementById("btnDisminuirVerde").addEventListener("mousedown", () => iniciarCambio(disminuirVerde));
document.getElementById("btnAumentarAzul").addEventListener("mousedown", () => iniciarCambio(aumentarAzul));
document.getElementById("btnDisminuirAzul").addEventListener("mousedown", () => iniciarCambio(disminuirAzul));

document.addEventListener("mouseup", detenerCambio);
document.addEventListener("mouseleave", detenerCambio);
