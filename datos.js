function datos() {
    this.nombre = "";
    this.apellido = "";
    this.carrera = "";
    this.titulo = "";
    this.comentario = "";
    this.links = "";
    this.fecha = "";

this.getnombre = function(){
    return nombre;
}

this.getapellido = function() {
    return apellido;
}

this.getcarrera = function() {
    return carrera;
}

this.gettitulo = function() {
    return titulo;
}

this.getcomentario = function() {
    return comentario;
}

this.getlinks = function() {
    return links;
}

this.getfecha = function() {
    return fecha;
}

this.setnombre = function(nomb) {
    nombre = nomb;
}

this.setapellido = function(apelli) {
    apellido = apelli;
}

this.setcarrera = function(carre) {
    carrera = carre;
}

this.settitulo = function(titu) {
    titulo = titu;
}

this.setcomentario = function(comen) {
    comentario = comen;
}

this.setlinks = function(links) {
    links = links
}

this.setfecha = function(fecha) {
    fecha = fecha;
}

}

function salida() {

var obj = new datos();

var nomb = document.getElementById("nombre").value;
var apelli = document.getElementById("apellido").value;
var carre = document.getElementById("carrera").value;
var titu = document.getElementById("titulo").value;
var comen = document.getElementById("comentario").value;
var links = document.getElementById("links de la publicacion").value;
var fecha = document.getElementById("fecha de publicacion").value;

obj.setNombre(nomb);
obj.setApellido(apelli);
obj.setCarrera(carre);
obj.setTitulo(titu);
obj.setComentario(comen);
obj.setLinks(links);
obj.setFecha(fecha);

var nr1 = obj.getNombre();
var nr2 = obj.getApellido();
var nr3 = obj.setCarrera();
var nr4 = obj.setTitulo();
var nr5 = obj.setComentario();
var nr6 = obj.setLinks();
var nr7 = obj.setFecha();

document.write("Datos: ");

document.write("nombre: " +nr1);
document.write("apellido: " +nr2);
document.write("carrera: " +nr3);
document.write("titulo: " +nr4);
document.write("comentario: " +nr5);
document.whrite("links de la publicacion: " + nr6);
document.whrite("fecha de publicacion: " + nr7);

}