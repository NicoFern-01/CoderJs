const medicos = ["Dra. González (Clínica)", "Dr. Pérez (Pediatría)", "Dra. Ramírez (Dermatología)"];
const horarios = ["09:00", "10:00", "11:00", "12:00", "14:00"];
let turnosReservados = [];

function mostrarMedicos() {
  let lista = "Seleccione un médico:\n";
  for (let i = 0; i < medicos.length; i++) {
    lista += `${i + 1}. ${medicos[i]}\n`;
  }
  return prompt(lista);
}

// Mostrar horarios disponibles
function mostrarHorariosDisponibles() {
  let disponibles = horarios.filter(h => !turnosReservados.includes(h));
  if (disponibles.length === 0) {
    alert("No hay horarios disponibles.");
    return null;
  }

  let lista = "Horarios disponibles:\n";
  disponibles.forEach((hora, i) => {
    lista += `${i + 1}. ${hora}\n`;
  });

  let opcion = parseInt(prompt(lista + "Seleccione un horario (número):"));
  if (opcion > 0 && opcion <= disponibles.length) {
    return disponibles[opcion - 1];
  } else {
    alert("Opción inválida.");
    return null;
  }
}

// Asigna turno
function asignarTurno() {
  const medicoElegido = parseInt(mostrarMedicos());

  if (medicoElegido < 1 || medicoElegido > medicos.length) {
    alert("Médico no válido.");
    return;
  }

  const horarioElegido = mostrarHorariosDisponibles();

  if (horarioElegido) {
    turnosReservados.push(horarioElegido);
    alert(
      `Turno confirmado:\nMédico: ${medicos[medicoElegido - 1]}\nHorario: ${horarioElegido}`
    );
  } else {
    alert("No se pudo asignar turno.");
  }
}

function iniciarSimuladorTurnos() {
  alert("Bienvenido al sistema de turnos médicos.");

  let continuar = true;
  while (continuar) {
    asignarTurno();
    continuar = confirm("¿Desea reservar otro turno?");
  }

  alert("Gracias por utilizar el sistema.");
}

// Ejecutar
iniciarSimuladorTurnos();
