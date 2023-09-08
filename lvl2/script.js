const estudiantes = [
    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
  ];
  
  
  let sumaNotas = 0;
  let notaMasBaja = Infinity; 
  let estudianteNotaMasBaja = "";
  let notaMasAlta = -Infinity; 
  let estudianteNotaMasAlta = "";
  
  
  for (const estudiante of estudiantes) {
    const notas = estudiante.notas;
    
    
    for (const nota of notas) {
      sumaNotas += nota;
    }
  
    
    const minNota = Math.min(...notas);
    if (minNota < notaMasBaja) {
      notaMasBaja = minNota;
      estudianteNotaMasBaja = estudiante.nombre;
    }
  
    
    const maxNota = Math.max(...notas);
    if (maxNota > notaMasAlta) {
      notaMasAlta = maxNota;
      estudianteNotaMasAlta = estudiante.nombre;
    }
  }
  
  
  const promedioGeneral = sumaNotas / (estudiantes.length * estudiantes[0].notas.length);
  
  
  console.log("Promedio General de la Clase:", promedioGeneral);
  console.log("Estudiante con la Nota Más Baja:", estudianteNotaMasBaja);
  console.log("Estudiante con la Nota Más Alta:", estudianteNotaMasAlta);