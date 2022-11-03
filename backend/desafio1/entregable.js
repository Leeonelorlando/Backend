class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName () {
        return this.nombre + " " + this.apellido
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook (nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames() {
        return this.libros.filter((Libro => Libro.nombre))
    }
}

let persona1 = new Usuario("Leonel", "Orlando", [
    {nombre: "El Señor de los Anillos", autor: "Tolkien"},
    {nombre: "Crepúsculo", autor: "Stephenie Meyer"}],
    ["Rossie"]);

console.log(persona1.getFullName())
persona1.addMascota("Kati")
console.log(persona1.countMascotas())
persona1.addBook("El Alquimista", "Paulo Coelho")
console.log(persona1.getBookNames())