"use strict";
{
    console.log("Hola desde Node.js");
    // 2) TypeScript: variables con tipo (anotaciones).
    let nombre = "María Torres";
    let creditos = 18;
    let activo = true;
    console.log(nombre, creditos, activo);
    // 3) Función tipada: recibe y devuelve tipos declarados.
    function saludar(persona) {
        return "Bienvenido/a, " + persona;
    }
    console.log(saludar(nombre));
    // Función para evaluar los créditos
    function evaluarCreditos(cantidadCreditos) {
        if (cantidadCreditos > 20) {
            return "bueno";
        }
        else {
            return "malo";
        }
    }
    console.log(`Evaluación de créditos (${creditos}):`, evaluarCreditos(creditos));
    const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
    console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
    console.log(`Evaluación del curso (${curso.creditos} créditos):`, evaluarCreditos(curso.creditos));
}
