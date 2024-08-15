var usuario = 0;
var precioTiquete = 1000000
var precioTiqueteFinal = 0;

edad = prompt("Ingrese la edad del niño");

if (isNaN(edad) || edad < 0) {
    
    alert("Por favor ingrese una edad válida.");

} else {
    var mensaje;

    if (edad < 2) {
        mensaje = "No puede viajar.";
    } else if (edad >= 2 && edad < 5) {
        mensaje = "Su viaje es gratis.";
    } else if (edad >= 5 && edad < 11) {
        const precioTiqueteFinal = precioTiquete * 0.5;
        mensaje = "El valor de su tiquete es de " + precioTiqueteFinal + ".";
    } else if (edad >= 11 && edad < 15) {
        const precioTiqueteFinal = precioTiquete * 0.75;
        mensaje = "El valor de su tiquete es de " + precioTiqueteFinal + ".";
    } else {
        mensaje = "Su tiquete no tiene ningún descuento. El precio de su tiquete es de " + precioTiquete + ".";
    }

    alert(mensaje);
}