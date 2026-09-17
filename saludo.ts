{
  console.log("Hola desde Node.js");

  // 2) TypeScript: variables con tipo (anotaciones).
  let nombre: string = "María Torres";
  let creditos: number = 18;
  let activo: boolean = true;
  console.log(nombre, creditos, activo);

  // 3) Función tipada: recibe y devuelve tipos declarados.
  function saludar(persona: string): string {
    return "Bienvenido/a, " + persona;
  }
  console.log(saludar(nombre));

  // Función para evaluar los créditos
  function evaluarCreditos(cantidadCreditos: number): string {
    if (cantidadCreditos > 20) {
      return "bueno";
    } else {
      return "malo";
    }
  }
  console.log(`Evaluación de créditos (${creditos}):`, evaluarCreditos(creditos));

  // 4) Interfaz: describe la forma de un dato.
  interface Curso {
    nombre: string;
    creditos: number;
  }
  const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
  console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
  console.log(`Evaluación del curso (${curso.creditos} créditos):`, evaluarCreditos(curso.creditos));
}