


function saludar() {
    //Para poner mensajes se utiliza el alert
    alert("Hola mundo!!!");
}

function mostrarSaludoPersonalizado() {
    //let solo es para declarar una variable y el le da el tipo 

    //Leemos el nombre de la persona
    let nombre = document.getElementById("txtNombre").value;

    //Generamos el saludo personalizado
    let saludo = 'Hola ' + nombre;

    alert(saludo);
}

function sumar(x, y) {
    return x + y;

}
function restar(x, y) {
    return x - y;

}
function multiplicar(x, y) {
    return x * y;

}
function dividir(x, y) {
    return x / y;

}

function realizarOperacion(oper) {
    //1. Leemos los valores de la caja de texto

    let a = parseFloat(document.getElementById("txtN1").value);
    let b = parseFloat(document.getElementById("txtN2").value);

    //2. Declaramos una variable para el resultado
    let res = 0;

    switch (oper)
    {
        case 1:
            res = sumar(a, b);

            break;
        case 2:
            res = restar(a, b);
            break;
        case 3:
            res = multiplicar(a, b);
            break;
        case 4:
            res = dividir(a, b);
            break;
    }

    document.getElementById("txtResultado").value = res;
}



