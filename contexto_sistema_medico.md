# Contexto de la Aplicación: Gestor Médico

Este documento contiene toda la información relevante sobre el diseño, arquitectura, módulos y modelos de datos de la aplicación **Gestor Médico**, sirviendo como guía de referencia rápida para el desarrollo y mantenimiento del sistema.

---

## 1. Información General del Proyecto
* **Nombre del Sistema**: Gestor Médico
* **Propósito**: Digitalizar y optimizar la administración operativa de un centro de salud de tamaño medio (gestión de expedientes, citas, fichas clínicas y recetas médicas).
* **Tipo de Aplicación**: Single Page Application (SPA) autogestionada en el cliente.
* **Stack Tecnológico**:
  * **HTML5**: Estructura semántica de las vistas y formularios.
  * **CSS3 (Vanilla)**: Maquetación responsiva, variables de diseño para soporte nativo de **Tema Claro / Oscuro**, y diseño de receta imprimible (`@media print`).
  * **JavaScript (ES6+)**: Enrutador SPA, lógica CRUD, control de datos y persistencia.
  * **Persistencia**: LocalStorage del navegador web (con inicializador de datos semilla).

---

## 2. Estructura de Archivos del Proyecto
* [index.html](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/index.html): Maqueta base de la SPA, menús de navegación, contenedores de secciones y ventanas modales de interacción. Importa iconos mediante el CDN Lucide.
* [styles.css](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/styles.css): Diseño estético del dashboard, animaciones de transición, efectos de glassmorphism para modales y reglas tipográficas.
* [app.js](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/app.js): Lógica central de enrutamiento, base de datos simulada y operaciones CRUD.
* [package.json](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/package.json): Script de ejecución de servidor de desarrollo ligero.
* [planificacion_sistema_medico.txt](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/planificacion_sistema_medico.txt): Planificación formal de requisitos del sistema.

---

## 3. Módulos y Funcionalidades Clave

### A. Dashboard Principal
* **Métricas en vivo**: Mapea el total de pacientes, citas del día, médicos activos y total de recetas emitidas en el sistema.
* **Control del día**: Despliega una lista ordenada de las citas correspondientes a la fecha de simulación (`25 de mayo de 2026`).
* **Accesos Rápidos**: Atajos directos con efectos hover para registrar pacientes, citas e iniciar la ficha clínica.

### B. Módulo de Pacientes
* **Modelo de Nombres Separados**: Registra nombres segregados en 4 campos independientes: *Primer Nombre, Segundo Nombre, Primer Apellido y Segundo Apellido*.
* **Teléfonos Múltiples**: Permite agregar dinámicamente varios números telefónicos en una lista de entrada (exige mínimo uno).
* **Contacto de Emergencia**: Asocia a un contacto externo con campos de *Nombre*, *Teléfono* y *Relación / Tipo de Contacto* (por ejemplo, Madre, Esposo, etc.).
* **Filtro Avanzado**: Buscador de texto reactivo que busca por RUT, nombre completo o correo.
* **Ficha Médica**: Visualización detallada del perfil con la línea de tiempo de consultas médicas realizadas.

### C. Módulo de Médicos
* **Registro Segregado**: Estructuración del nombre del profesional en 4 partes.
* **Campos Opcionales**: Solo se exige rellenar el *Primer Nombre* de manera obligatoria. Todos los demás campos (RUT/RUN, apellidos, especialidad, horario, teléfono, email y dirección particular/de consulta) son opcionales para facilitar el ingreso ágil del personal médico.
* **Autogeneración de RUN/RUT**: Si se omite el RUT en el formulario, el sistema autogenera un identificador único con prefijo `S-RUN-[timestamp]` para mantener los vínculos e integridad de los datos en la base de datos de citas y consultas.
* **Lugares de Atención**: Un médico puede atender en múltiples centros médicos (seleccionados mediante casillas de verificación) y/o en su consulta particular. Los lugares elegidos determinan las opciones de ubicación disponibles al agendar una cita para ese médico.
* **Horarios y Especialidades**: Asignación opcional de especialidad (con valor "No especificada" por defecto) y turno de consulta (con valor "No especificado" por defecto).
* **Heurística de Títulos**: Lógica en JS que asigna automáticamente el prefijo `Dr.` o `Dra.` al nombre del profesional según el primer nombre.

### D. Agenda y Calendario de Citas
* **Selector de Calendario**: Filtro por fechas específicas para revisar la agenda médica.
* **Lugar de Atención**: Permite asignar una ubicación específica para la cita (un centro médico en convenio o consulta particular) según los lugares donde atiende el médico seleccionado.
* **Conflictos Horarios**: Validador en JS que impide agendar citas duplicadas a un mismo médico en la misma fecha y hora.
* **Redirección de Estados**: El flujo cambia el estado de la cita a *En Consulta* al presionar el botón *"Atender"*, redirigiendo automáticamente a la pantalla de consulta en vivo.

### E. Ficha Clínica y Receta Imprimible
* **Historial Activo**: Registro de signos vitales (Presión, Temperatura, Pulso, Peso), anamnesis, examen físico, diagnóstico principal (con código CIE-10 simulado), e indicaciones médicas.
* **Medicamentos dinámicos**: Constructor de recetas donde el médico puede añadir múltiples medicamentos, especificando dosis, frecuencia y duración.
* **Salida de Impresión**: El sistema oculta la interfaz de la web y formatea una receta médica en tamaño carta/A4 limpia para imprimir o exportar a PDF con estilos profesionales.

### F. Módulo de Centros Médicos
* **Información del Centro**: Registra nombre, dirección principal, especialidades, múltiples teléfonos de contacto y múltiples sucursales.
* **Lista Dinámica de Teléfonos y Sucursales**: Interfaz que permite agregar y remover campos de teléfonos y sucursales dinámicamente en el formulario.
* **Relaciones en Vivo**: Muestra en la tarjeta de cada centro la lista de médicos en convenio asignados que atienden en el lugar.

---

## 4. Estructuras de Datos de la Aplicación

### Paciente
```json
{
  "rut": "12.345.678-9",
  "primerNombre": "Juan",
  "segundoNombre": "Alberto",
  "primerApellido": "Pérez",
  "segundoApellido": "Gómez",
  "nacimiento": "1991-03-12",
  "genero": "Masculino",
  "telefonos": ["+56 9 1234 5678"],
  "contactoEmergencia": {
    "nombre": "María Gómez",
    "telefono": "+56 9 1111 2222",
    "relacion": "Madre"
  },
  "email": "juan.perez@example.com",
  "direccion": "Av. Providencia 1234, Santiago",
  "prevision": "Fonasa",
  "sangre": "O+",
  "alergias": "Ninguna"
}
```

### Médico
```json
{
  "rut": "10.222.333-4",
  "titulo": "Dr.",
  "primerNombre": "Gabriel",
  "segundoNombre": "",
  "primerApellido": "Silva",
  "segundoApellido": "",
  "especialidad": "Cardiología",
  "horario": "Jornada Completa",
  "telefono": "+56 9 9999 8888",
  "email": "g.silva@centromedico.cl",
  "direccion": "Av. Vitacura 120, Dpto 42, Las Condes",
  "centrosMedicos": ["cm-1"],
  "atiendeConsultaParticular": true
}
```

### Centro Médico
```json
{
  "id": "cm-1",
  "nombre": "Centro Médico Vida Sana",
  "direccion": "Av. Providencia 1234, Oficina 601, Santiago",
  "especialidades": ["Cardiología", "Pediatría", "Medicina General"],
  "telefonos": ["+56 2 2987 6543", "+56 2 2987 6544"],
  "sucursales": ["Providencia (Casa Matriz)", "Las Condes"]
}
```

### Cita
```json
{
  "id": "c-1",
  "pacienteRut": "12.345.678-9",
  "medicoRut": "11.888.999-0",
  "lugarAtencion": "cm-1", // ID de un Centro Médico o la cadena "particular"
  "fecha": "2026-05-25",
  "hora": "14:30",
  "motivo": "Control de Hipertensión",
  "estado": "Pendiente" // Pendiente | En Consulta | Completada | Cancelada
}
```

### Consulta Médica
```json
{
  "id": "con-1",
  "pacienteRut": "15.654.321-0",
  "medicoRut": "10.222.333-4",
  "medicoNombre": "Dr. Gabriel Silva",
  "fecha": "2026-05-25T09:00",
  "presion": "130/85",
  "temp": "36.4",
  "pulso": 82,
  "peso": 68,
  "anamnesis": "...",
  "examen": "...",
  "diagnostico": "...",
  "cie10": "...",
  "indicaciones": "...",
  "receta": {
    "emitir": true,
    "validez": 30,
    "medicamentos": [
      { "nombre": "Aspirina 100 mg", "dosis": "1 tableta", "frecuencia": "cada 24 horas", "duracion": "30 días" }
    ]
  }
}
```

---

## 5. Instrucciones de Uso y Ejecución
1. Abre tu navegador web y arrastra/abre el archivo [index.html](file:///c:/Users/RodCode/Desktop/Code/GestorMedico/index.html) directamente en la barra de direcciones.
2. Si tienes Node.js instalado, puedes situar tu consola en el directorio del proyecto y ejecutar:
   ```bash
   npm run dev
   ```
   Esto iniciará un servidor web local y abrirá la aplicación automáticamente en `http://localhost:3000`.
