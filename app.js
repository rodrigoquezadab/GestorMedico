// GESTOR MÉDICO - LÓGICA DE LA APLICACIÓN (SPA)

// 1. DATA SEED / INITIAL STATE
const SEED_PACIENTES = [
    { 
        rut: "123456789", 
        primerNombre: "Juan", 
        segundoNombre: "Alberto", 
        primerApellido: "Pérez", 
        segundoApellido: "Gómez", 
        nacimiento: "1991-03-12", 
        genero: "Masculino", 
        telefonos: ["+56 9 1234 5678"], 
        contactoEmergencia: { nombre: "María Gómez", telefono: "+56 9 1111 2222", relacion: "Madre" },
        email: "juan.perez@example.com", 
        direccion: "Av. Providencia 1234, Santiago", 
        prevision: "Fonasa", 
        sangre: "O+", 
        alergias: "Ninguna" 
    },
    { 
        rut: "156543210", 
        primerNombre: "María", 
        segundoNombre: "Loreto", 
        primerApellido: "Rojas", 
        segundoApellido: "", 
        nacimiento: "1985-08-05", 
        genero: "Femenino", 
        telefonos: ["+56 9 8765 4321", "+56 2 2987 6543"], 
        contactoEmergencia: { nombre: "Pedro Rojas", telefono: "+56 9 2222 3333", relacion: "Padre" },
        email: "maria.rojas@gmail.com", 
        direccion: "Calle Las Condes 567, Las Condes", 
        prevision: "Isapre Colmena", 
        sangre: "A+", 
        alergias: "Amlodipino" 
    },
    { 
        rut: "87654321", 
        primerNombre: "Carlos", 
        segundoNombre: "", 
        primerApellido: "Díaz", 
        segundoApellido: "Pavez", 
        nacimiento: "1960-11-23", 
        genero: "Masculino", 
        telefonos: ["+56 9 4567 8901"], 
        contactoEmergencia: { nombre: "Ana Díaz", telefono: "+56 9 3333 4444", relacion: "Hija" },
        email: "carlos.diaz@outlook.com", 
        direccion: "Pasaje Los Andes 90, Maipú", 
        prevision: "Particular", 
        sangre: "O-", 
        alergias: "Penicilina" 
    },
    { 
        rut: "203216547", 
        primerNombre: "Sofía", 
        segundoNombre: "", 
        primerApellido: "Balmaceda", 
        segundoApellido: "Ruiz", 
        nacimiento: "2002-01-14", 
        genero: "Femenino", 
        telefonos: ["+56 9 9012 3456"], 
        contactoEmergencia: { nombre: "Lucas Balmaceda", telefono: "+56 9 4444 5555", relacion: "Hermano" },
        email: "sofia.balmaceda@u.cl", 
        direccion: "Av. Vitacura 4321, Vitacura", 
        prevision: "Isapre Banmédica", 
        sangre: "AB+", 
        alergias: "Ninguna" 
    }
];

const SEED_CENTROS_MEDICOS = [
    {
        id: "cm-1",
        nombre: "Centro Médico Vida Sana",
        direccion: "Av. Providencia 1234, Oficina 601, Santiago",
        especialidades: ["Cardiología", "Pediatría", "Medicina General"],
        telefonos: ["+56 2 2987 6543", "+56 2 2987 6544"],
        sucursales: ["Providencia (Casa Matriz)", "Las Condes"]
    },
    {
        id: "cm-2",
        nombre: "Clínica San Francisco",
        direccion: "Av. Vitacura 5000, Vitacura",
        especialidades: ["Traumatología", "Medicina General", "Pediatría"],
        telefonos: ["+56 2 2555 1234"],
        sucursales: ["Vitacura", "Santiago Centro"]
    }
];

const SEED_MEDICOS = [
    { rut: "102223334", titulo: "Dr.", primerNombre: "Gabriel", segundoNombre: "", primerApellido: "Silva", segundoApellido: "", especialidad: "Cardiología", horario: "Jornada Completa", telefono: "+56 9 9999 8888", email: "g.silva@centromedico.cl", direccion: "Av. Vitacura 120, Dpto 42, Las Condes", centrosMedicos: ["cm-1"], atiendeConsultaParticular: true },
    { rut: "134445556", titulo: "Dra.", primerNombre: "Camila", segundoNombre: "", primerApellido: "Fuentes", segundoApellido: "", especialidad: "Pediatría", horario: "Mañana (08:00 - 13:00)", telefono: "+56 9 7777 6666", email: "c.fuentes@centromedico.cl", direccion: "", centrosMedicos: ["cm-1", "cm-2"], atiendeConsultaParticular: false },
    { rut: "118889990", titulo: "Dr.", primerNombre: "Andrés", segundoNombre: "", primerApellido: "Muñoz", segundoApellido: "", especialidad: "Medicina General", horario: "Tarde (14:00 - 19:00)", telefono: "+56 9 5555 4444", email: "a.munoz@centromedico.cl", direccion: "Av. Apoquindo 4500, Las Condes", centrosMedicos: ["cm-1"], atiendeConsultaParticular: true },
    { rut: "121112223", titulo: "Dra.", primerNombre: "Elena", segundoNombre: "", primerApellido: "Vásquez", segundoApellido: "", especialidad: "Traumatología", horario: "Jornada Completa", telefono: "+56 9 3333 2222", email: "e.vasquez@centromedico.cl", direccion: "", centrosMedicos: ["cm-2"], atiendeConsultaParticular: false }
];

// Current date simulation is set to 2026-05-25 (Monday)
const TODAY_STR = "2026-05-25";

const SEED_CITAS = [
    { id: "c-1", pacienteRut: "123456789", medicoRut: "118889990", fecha: "2026-05-25", hora: "14:30", motivo: "Control de Hipertensión", estado: "Pendiente" },
    { id: "c-2", pacienteRut: "156543210", medicoRut: "102223334", fecha: "2026-05-25", hora: "09:00", motivo: "Dolor de pecho ocasional", estado: "Completada" },
    { id: "c-3", pacienteRut: "87654321", medicoRut: "121112223", fecha: "2026-05-25", hora: "16:00", motivo: "Control post-operatorio de rodilla", estado: "Pendiente" },
    { id: "c-4", pacienteRut: "203216547", medicoRut: "134445556", fecha: "2026-05-25", hora: "10:30", motivo: "Chequeo de rutina", estado: "Completada" },
    { id: "c-5", pacienteRut: "123456789", medicoRut: "102223334", fecha: "2026-05-26", hora: "11:00", motivo: "Disnea recurrente", estado: "Pendiente" }
];

const SEED_CONSULTAS = [
    {
        id: "con-1",
        pacienteRut: "156543210",
        medicoRut: "102223334",
        medicoNombre: "Dr. Gabriel Silva",
        fecha: "2026-05-25T09:00",
        presion: "130/85",
        temp: "36.4",
        pulso: 82,
        peso: 68,
        anamnesis: "Paciente femenina de 40 años acude por cuadro de disconfort retroesternal y palpitaciones esporádicas de esfuerzo. Sin antecedentes cardíacos previos.",
        examen: "Ruidos cardíacos rítmicos, sin soplos. Pulmones limpios. EKG basal sin alteraciones agudas del segmento ST.",
        diagnostico: "Angina de pecho no especificada (Sospecha)",
        cie10: "I20.9",
        indicaciones: "Reposo físico relativo. Evitar bebidas estimulantes (café, té). Realizar ecocardiograma de esfuerzo. Control con resultados.",
        receta: {
            emitir: true,
            validez: 30,
            medicamentos: [
                { nombre: "Aspirina (Ácido Acetilsalicílico) 100 mg", dosis: "1 tableta", frecuencia: "cada 24 horas", duracion: "30 días" },
                { nombre: "Propranolol 40 mg", dosis: "1/2 tableta", frecuencia: "cada 12 horas", duracion: "30 días" }
            ]
        }
    },
    {
        id: "con-2",
        pacienteRut: "203216547",
        medicoRut: "134445556",
        medicoNombre: "Dra. Camila Fuentes",
        fecha: "2026-05-25T10:30",
        presion: "110/70",
        temp: "37.2",
        pulso: 76,
        peso: 58,
        anamnesis: "Paciente acude refiriendo odinofagia marcada de 48 horas de evolución, tos seca y cefalea leve. Niega disnea.",
        examen: "Faringe eritematosa con exudado amigdalino bilateral. Adenopatías cervicales dolorosas palpables.",
        diagnostico: "Faringitis estreptocócica",
        cie10: "J02.0",
        indicaciones: "Reposo en domicilio por 3 días. Abundante hidratación oral. Alimentación blanda.",
        receta: {
            emitir: true,
            validez: 7,
            medicamentos: [
                { nombre: "Amoxicilina 500 mg", dosis: "1 cápsula", frecuencia: "cada 8 horas", duracion: "7 días" },
                { nombre: "Paracetamol 500 mg", dosis: "1 tableta", frecuencia: "cada 8 horas en caso de dolor o fiebre", duracion: "3 días" }
            ]
        }
    },
    {
        id: "con-3",
        pacienteRut: "123456789",
        medicoRut: "118889990",
        medicoNombre: "Dr. Andrés Muñoz",
        fecha: "2026-02-10T15:00",
        presion: "145/95",
        temp: "36.2",
        pulso: 68,
        peso: 82,
        anamnesis: "Paciente asintomático acude a chequeo laboral preventivo donde se constatan cifras elevadas de presión arterial.",
        examen: "Paciente normolíneo. Presión arterial elevada confirmada en dos tomas separadas por 15 minutos en reposo.",
        diagnostico: "Hipertensión esencial (primaria)",
        cie10: "I10",
        indicaciones: "Iniciar régimen hiposódico estricto. Aumentar actividad física. Mantener registro de presión por 7 días y revaluar.",
        receta: { emitir: false }
    }
];

// 2. STATE MANAGER
const State = {
    pacientes: [],
    medicos: [],
    citas: [],
    consultas: [],
    centrosMedicos: [],
    activePatientRut: null,
    activeCitaId: null,
    activeConsultaId: null,
    
    init() {
        this.pacientes = this.load("pacientes", SEED_PACIENTES);
        this.medicos = this.load("medicos", SEED_MEDICOS);
        this.citas = this.load("citas", SEED_CITAS);
        this.consultas = this.load("consultas", SEED_CONSULTAS);
        this.centrosMedicos = this.load("centrosMedicos", SEED_CENTROS_MEDICOS);
        
        // Migration to clean RUTs of dots/dashes
        let needsMigration = false;
        this.pacientes.forEach(p => {
            if (p.rut && (p.rut.includes(".") || p.rut.includes("-"))) {
                needsMigration = true;
            }
        });
        if (needsMigration) {
            const cleanRut = (r) => r && !r.startsWith("S-RUN-") ? r.replace(/[^0-9kK]/g, "").toUpperCase() : r;
            this.pacientes.forEach(p => p.rut = cleanRut(p.rut));
            this.medicos.forEach(m => m.rut = cleanRut(m.rut));
            this.citas.forEach(c => {
                c.pacienteRut = cleanRut(c.pacienteRut);
                c.medicoRut = cleanRut(c.medicoRut);
            });
            this.consultas.forEach(con => {
                con.pacienteRut = cleanRut(con.pacienteRut);
                con.medicoRut = cleanRut(con.medicoRut);
            });
            this.save("pacientes");
            this.save("medicos");
            this.save("citas");
            this.save("consultas");
        }
        
        // Reset/Migrate check if old localStorage data exists
        const hasOldMedicosSchema = this.medicos.length > 0 && !("centrosMedicos" in this.medicos[0]);
        if ((this.pacientes.length > 0 && !this.pacientes[0].primerNombre) || hasOldMedicosSchema || !localStorage.getItem("gestormedico_centrosMedicos")) {
            localStorage.clear();
            this.pacientes = SEED_PACIENTES;
            this.medicos = SEED_MEDICOS;
            this.citas = SEED_CITAS;
            this.consultas = SEED_CONSULTAS;
            this.centrosMedicos = SEED_CENTROS_MEDICOS;
            this.save("pacientes");
            this.save("medicos");
            this.save("citas");
            this.save("consultas");
            this.save("centrosMedicos");
        }
    },
    
    load(key, defaultValue) {
        const stored = localStorage.getItem(`gestormedico_${key}`);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch(e) {
                console.error("Error loading data key", key, e);
            }
        }
        // Save seed if empty
        localStorage.setItem(`gestormedico_${key}`, JSON.stringify(defaultValue));
        return defaultValue;
    },
    
    save(key) {
        localStorage.setItem(`gestormedico_${key}`, JSON.stringify(this[key]));
    }
};

// Calculate Chilean RUT formatting (e.g. 156543210 -> 15.654.321-0)
function formatRut(rutStr) {
    if (!rutStr) return "";
    if (rutStr.startsWith("S-RUN-")) return rutStr;
    
    const limpio = rutStr.replace(/[^0-9kK]/g, "").toUpperCase();
    if (limpio.length === 0) return "";
    if (limpio.length === 1) return limpio;
    
    const body = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    
    const bodyFormatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${bodyFormatted}-${dv}`;
}

// Format RUT while user is typing
function formatRutInput(value) {
    let limpio = value.replace(/[^0-9kK]/g, "").toUpperCase();
    if (limpio.length === 0) return "";
    if (limpio.length > 9) limpio = limpio.slice(0, 9);
    
    if (limpio.length === 1) return limpio;
    
    const body = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    
    const bodyFormatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${bodyFormatted}-${dv}`;
}

// Calculate Chilean DV
function calcularDV(rutNum) {
    let suma = 0;
    let multiplicador = 2;
    for (let i = rutNum.length - 1; i >= 0; i--) {
        suma += parseInt(rutNum.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = suma % 11;
    const dv = 11 - resto;
    if (dv === 11) return "0";
    if (dv === 10) return "K";
    return dv.toString();
}

// Validate Chilean RUT/RUN
function validarRut(rutString) {
    if (!rutString) return false;
    if (rutString.startsWith("S-RUN-")) return true;
    
    const limpio = rutString.replace(/[^0-9kK]/g, "").toUpperCase();
    if (limpio.length < 2) return false;
    
    const body = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    
    if (!/^\d+$/.test(body)) return false;
    
    return calcularDV(body) === dv;
}

// Setup input formatting listener
function setupRutFormatter(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.addEventListener("input", (e) => {
        const val = e.target.value;
        const formatted = formatRutInput(val);
        e.target.value = formatted;
    });
}

// Calculate age from date of birth
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date(TODAY_STR); // Using our simulated date
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Format Dates nicely
function formatFecha(fechaString) {
    if (!fechaString) return '';
    const parts = fechaString.split('-');
    if (parts.length !== 3) return fechaString;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function formatFechaHora(isoString) {
    if (!isoString) return '';
    const parts = isoString.split('T');
    const fecha = formatFecha(parts[0]);
    const hora = parts[1] || "";
    return `${fecha} a las ${hora}`;
}

// Unify name components
function obtenerNombreCompleto(p) {
    if (!p) return "Desconocido";
    if (p.nombre) return p.nombre; // Para compatibilidad
    const parts = [
        p.primerNombre,
        p.segundoNombre,
        p.primerApellido,
        p.segundoApellido
    ].filter(x => x && x.trim() !== "");
    return parts.join(" ");
}

function obtenerNombreCompletoMedico(m) {
    if (!m) return "Desconocido";
    if (m.nombre) return m.nombre; // Para compatibilidad
    const parts = [
        m.titulo,
        m.primerNombre,
        m.segundoNombre,
        m.primerApellido,
        m.segundoApellido
    ].filter(x => x && x.trim() !== "");
    return parts.join(" ");
}

function obtenerLugarAtencionTexto(lugarKey) {
    if (!lugarKey) return "No especificado";
    if (lugarKey === "particular") return "Consulta Particular";
    const c = State.centrosMedicos.find(x => x.id === lugarKey);
    return c ? c.nombre : lugarKey;
}

// 3. APPLICATION INITIATION
document.addEventListener("DOMContentLoaded", () => {
    State.init();
    lucide.createIcons();
    
    setupUIHandlers();
    setupRouting();
    setupThemeToggle();
    setupDashboard();
    setupPacientes();
    setupMedicos();
    setupCentros();
    setupCitas();
    setupHistorial();
    setupConsultaActiva();
    
    // Set simulated date text in header
    document.getElementById("current-date").textContent = "Lunes, 25 de Mayo, 2026";
});

// Theme Setup
function setupThemeToggle() {
    const body = document.body;
    const btnToggle = document.getElementById("btn-theme-toggle");
    
    // Load stored theme
    const savedTheme = localStorage.getItem("gestormedico_theme") || "dark";
    body.className = `${savedTheme}-theme`;
    
    btnToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("gestormedico_theme", "light");
        } else {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("gestormedico_theme", "dark");
        }
    });
}

// Sidebar toggle for responsive design
function setupUIHandlers() {
    const sidebar = document.getElementById("app-sidebar");
    const toggleBtn = document.getElementById("btn-sidebar-toggle");
    
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
    
    // Close sidebar on click of items on mobile
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    });
}

// Router Simulation
function setupRouting() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".content-section");
    const pageTitleText = document.getElementById("page-title-text");
    
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            
            // Toggle navigation active state
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Switch sections
            sections.forEach(sec => sec.classList.remove("active"));
            const targetSec = document.getElementById(`sec-${target}`);
            if (targetSec) {
                targetSec.classList.add("active");
            }
            
            // Update Page title in header
            const titleMap = {
                dashboard: "Dashboard de Control",
                pacientes: "Registro de Pacientes",
                medicos: "Cuerpo Médico",
                centros: "Gestión de Centros Médicos",
                citas: "Agenda de Citas",
                historial: "Historial Clínico"
            };
            pageTitleText.textContent = titleMap[target] || "Gestor Médico";
            
            // Trigger section-specific refreshes
            if (target === "dashboard") setupDashboard();
            if (target === "pacientes") renderPacientesTable();
            if (target === "medicos") renderMedicosTable();
            if (target === "centros") renderCentrosGrid();
            if (target === "citas") renderCitasAgenda();
            if (target === "historial") {
                // Ensure returning to patient selection view if no active patient
                if (!State.activePatientRut) {
                    document.getElementById("historial-search-view").classList.remove("hidden");
                    document.getElementById("historial-detail-view").classList.add("hidden");
                    document.getElementById("consulta-activa-view").classList.add("hidden");
                    renderHistorialSearchTable();
                } else {
                    mostrarPerfilPaciente(State.activePatientRut);
                }
            }
        });
    });
}

// 4. MODULE: DASHBOARD
function setupDashboard() {
    // Update Stats
    document.getElementById("stat-total-pacientes").textContent = State.pacientes.length;
    
    const citasHoy = State.citas.filter(c => c.fecha === TODAY_STR);
    document.getElementById("stat-citas-hoy").textContent = citasHoy.length;
    
    const completedHoy = citasHoy.filter(c => c.estado === "Completada").length;
    const progressPercent = citasHoy.length > 0 ? Math.round((completedHoy / citasHoy.length) * 100) : 0;
    document.getElementById("stat-citas-progreso").textContent = `${progressPercent}% completadas hoy`;
    
    document.getElementById("stat-medicos-activos").textContent = State.medicos.length;
    
    const recetasEmitidas = State.consultas.filter(c => c.receta && c.receta.emitir).length;
    document.getElementById("stat-recetas-emitidas").textContent = recetasEmitidas;
    
    // Populate upcoming appointments
    const tblCitas = document.getElementById("tbl-citas-hoy");
    tblCitas.innerHTML = "";
    
    // Sort today's appointments by hour
    const todayCitas = State.citas
        .filter(c => c.fecha === TODAY_STR)
        .sort((a, b) => a.hora.localeCompare(b.hora));
        
    if (todayCitas.length === 0) {
        tblCitas.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No hay citas agendadas para hoy.</td></tr>`;
    } else {
        todayCitas.forEach(cita => {
            const pac = State.pacientes.find(p => p.rut === cita.pacienteRut);
            const pacNombre = pac ? obtenerNombreCompleto(pac) : "Desconocido";
            const med = State.medicos.find(m => m.rut === cita.medicoRut);
            const medNombre = med ? obtenerNombreCompletoMedico(med) : "Desconocido";
            const especialidad = med ? med.especialidad : "General";
            
            let badgeClass = "badge-info";
            if (cita.estado === "Completada") badgeClass = "badge-success";
            if (cita.estado === "Cancelada") badgeClass = "badge-danger";
            if (cita.estado === "En Consulta") badgeClass = "badge-blue";
            
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${cita.hora}</strong></td>
                <td>${pacNombre}</td>
                <td>
                    <div>${medNombre}</div>
                    <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;"><i data-lucide="map-pin" style="width:10px;height:10px;display:inline-block;vertical-align:middle;"></i> ${obtenerLugarAtencionTexto(cita.lugarAtencion)}</div>
                </td>
                <td><span class="badge badge-info">${especialidad}</span></td>
                <td><span class="badge ${badgeClass}">${cita.estado}</span></td>
                <td>
                    ${cita.estado === "Pendiente" ? `
                        <button class="btn btn-emerald btn-sm btn-iniciar-consulta" data-cita-id="${cita.id}">
                            Atender
                        </button>
                    ` : cita.estado === "En Consulta" ? `
                        <button class="btn btn-primary btn-sm btn-iniciar-consulta" data-cita-id="${cita.id}">
                            Retomar
                        </button>
                    ` : `
                        <button class="btn btn-secondary btn-sm btn-ver-detalles-consulta" data-paciente-rut="${cita.pacienteRut}">
                            Ver Ficha
                        </button>
                    `}
                </td>
            `;
            tblCitas.appendChild(tr);
        });
    }
    
    // Wire up actions
    // Stat Atender Buttons
    document.querySelectorAll(".btn-iniciar-consulta").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const citaId = e.currentTarget.getAttribute("data-cita-id");
            iniciarConsultaDesdeCita(citaId);
        });
    });
    
    document.querySelectorAll(".btn-ver-detalles-consulta").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const rut = e.currentTarget.getAttribute("data-paciente-rut");
            State.activePatientRut = rut;
            document.getElementById("nav-historial").click();
        });
    });
    
    // Quick buttons
    const btnQuickPac = document.getElementById("btn-quick-paciente");
    btnQuickPac.replaceWith(btnQuickPac.cloneNode(true));
    document.getElementById("btn-quick-paciente").addEventListener("click", () => {
        abrirModalPaciente();
    });
    
    const btnQuickCita = document.getElementById("btn-quick-cita");
    btnQuickCita.replaceWith(btnQuickCita.cloneNode(true));
    document.getElementById("btn-quick-cita").addEventListener("click", () => {
        abrirModalCita();
    });
    
    const btnQuickConsulta = document.getElementById("btn-quick-consulta");
    btnQuickConsulta.replaceWith(btnQuickConsulta.cloneNode(true));
    document.getElementById("btn-quick-consulta").addEventListener("click", () => {
        State.activePatientRut = null;
        document.getElementById("nav-historial").click();
    });
    
    const btnVerCitas = document.getElementById("btn-dashboard-ver-citas");
    btnVerCitas.replaceWith(btnVerCitas.cloneNode(true));
    document.getElementById("btn-dashboard-ver-citas").addEventListener("click", () => {
        document.getElementById("nav-citas").click();
    });
}

// 5. MODULE: PACIENTES
function setupPacientes() {
    // Open Modal
    document.getElementById("btn-abrir-modal-paciente").addEventListener("click", () => abrirModalPaciente());
    document.getElementById("btn-close-modal-paciente").addEventListener("click", cerrarModalPaciente);
    document.getElementById("btn-cancelar-paciente").addEventListener("click", cerrarModalPaciente);
    
    // Add dynamic phone field btn
    document.getElementById("btn-p-agregar-telefono").addEventListener("click", () => {
        agregarCampoTelefonoForm("");
    });
    
    // Form Submit
    document.getElementById("form-paciente").addEventListener("submit", guardarPaciente);
    
    // Search
    document.getElementById("input-search-pacientes").addEventListener("input", renderPacientesTable);

    // Format RUT input dynamically
    setupRutFormatter("p-rut");
}

function agregarCampoTelefonoForm(valor = "") {
    const container = document.getElementById("p-telefonos-container");
    const itemId = `tel-item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    
    const div = document.createElement("div");
    div.className = "telefono-item";
    div.id = itemId;
    
    div.innerHTML = `
        <input type="tel" class="p-tel-input form-control" placeholder="+56 9 1234 5678" value="${valor}" required>
        <button type="button" class="btn btn-danger btn-sm btn-icon-only btn-remove-tel" data-item-id="${itemId}" style="width: 32px; height: 32px; flex-shrink: 0;">
            <i data-lucide="trash-2"></i>
        </button>
    `;
    
    container.appendChild(div);
    lucide.createIcons();
    
    // Wire delete
    div.querySelector(".btn-remove-tel").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-item-id");
        if (container.children.length > 1) {
            const el = document.getElementById(id);
            if (el) el.remove();
        } else {
            alert("Debe mantener al menos un teléfono de contacto.");
        }
    });
}

function renderPacientesTable() {
    const query = document.getElementById("input-search-pacientes").value.toLowerCase();
    const tbody = document.getElementById("tbl-pacientes");
    tbody.innerHTML = "";
    
    const filtered = State.pacientes.filter(p => 
        obtenerNombreCompleto(p).toLowerCase().includes(query) || 
        p.rut.toLowerCase().includes(query) || 
        p.email.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">No se encontraron pacientes.</td></tr>`;
        return;
    }
    
    filtered.forEach((p, idx) => {
        const tr = document.createElement("tr");
        const realIndex = State.pacientes.findIndex(orig => orig.rut === p.rut);
        const edad = calcularEdad(p.nacimiento);
        const pacNombre = obtenerNombreCompleto(p);
        const pacTelefonos = p.telefonos ? p.telefonos.join("<br>") : (p.telefono || "Sin teléfono");
        
        tr.innerHTML = `
            <td><strong>${formatRut(p.rut)}</strong></td>
            <td>${pacNombre}</td>
            <td>${edad} años (${formatFecha(p.nacimiento)})</td>
            <td>${p.genero}</td>
            <td>
                <div style="font-size: 0.85rem; line-height: 1.3;">${pacTelefonos}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${p.email}</div>
            </td>
            <td><span class="badge badge-info">${p.prevision}</span></td>
            <td style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm btn-icon-only btn-edit-paciente" data-index="${realIndex}" title="Editar Paciente">
                    <i data-lucide="edit"></i>
                </button>
                <button class="btn btn-secondary btn-sm btn-icon-only text-emerald btn-historial-paciente" data-rut="${p.rut}" title="Ficha Clínica">
                    <i data-lucide="folder-heart"></i>
                </button>
                <button class="btn btn-secondary btn-sm btn-icon-only text-danger btn-delete-paciente" data-index="${realIndex}" title="Eliminar Paciente">
                    <i data-lucide="trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
    
    // Wire events
    document.querySelectorAll(".btn-edit-paciente").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.currentTarget.getAttribute("data-index");
            abrirModalPaciente(parseInt(index));
        });
    });
    
    document.querySelectorAll(".btn-historial-paciente").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const rut = e.currentTarget.getAttribute("data-rut");
            State.activePatientRut = rut;
            document.getElementById("nav-historial").click();
        });
    });

    document.querySelectorAll(".btn-delete-paciente").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.getAttribute("data-index"));
            const pac = State.pacientes[index];
            const pacNombre = obtenerNombreCompleto(pac);
            if (confirm(`¿Estás seguro de que deseas eliminar al paciente "${pacNombre}"? Esto no eliminará sus registros médicos.`)) {
                State.pacientes.splice(index, 1);
                State.save("pacientes");
                renderPacientesTable();
            }
        });
    });
}

function abrirModalPaciente(index = -1) {
    const modal = document.getElementById("modal-paciente");
    const form = document.getElementById("form-paciente");
    const title = document.getElementById("modal-paciente-title");
    
    form.reset();
    document.getElementById("form-paciente-index").value = index;
    
    const container = document.getElementById("p-telefonos-container");
    container.innerHTML = "";
    
    if (index > -1) {
        title.textContent = "Editar Datos del Paciente";
        const p = State.pacientes[index];
        document.getElementById("p-rut").value = formatRut(p.rut);
        document.getElementById("p-rut").disabled = false;
        
        document.getElementById("p-primer-nombre").value = p.primerNombre || "";
        document.getElementById("p-segundo-nombre").value = p.segundoNombre || "";
        document.getElementById("p-primer-apellido").value = p.primerApellido || "";
        document.getElementById("p-segundo-apellido").value = p.segundoApellido || "";
        
        document.getElementById("p-nacimiento").value = p.nacimiento;
        document.getElementById("p-genero").value = p.genero;
        
        // Telefonos dinámicos
        if (p.telefonos && p.telefonos.length > 0) {
            p.telefonos.forEach(tel => agregarCampoTelefonoForm(tel));
        } else {
            agregarCampoTelefonoForm(p.telefono || "");
        }
        
        document.getElementById("p-email").value = p.email;
        document.getElementById("p-direccion").value = p.direccion;
        document.getElementById("p-prevision").value = p.prevision;
        document.getElementById("p-sangre").value = p.sangre;
        document.getElementById("p-alergias").value = p.alergias;
        
        // Contacto Emergencia
        const emer = p.contactoEmergencia || { nombre: "", telefono: "", relacion: "" };
        document.getElementById("p-emergencia-nombre").value = emer.nombre || "";
        document.getElementById("p-emergencia-telefono").value = emer.telefono || "";
        document.getElementById("p-emergencia-tipo").value = emer.relacion || "";
        
        document.getElementById("btn-guardar-paciente").textContent = "Guardar Cambios";
    } else {
        title.textContent = "Registrar Nuevo Paciente";
        document.getElementById("p-rut").disabled = false;
        
        document.getElementById("p-primer-nombre").value = "";
        document.getElementById("p-segundo-nombre").value = "";
        document.getElementById("p-primer-apellido").value = "";
        document.getElementById("p-segundo-apellido").value = "";
        
        // Add single empty phone
        agregarCampoTelefonoForm("");
        
        document.getElementById("p-emergencia-nombre").value = "";
        document.getElementById("p-emergencia-telefono").value = "";
        document.getElementById("p-emergencia-tipo").value = "";
        
        document.getElementById("btn-guardar-paciente").textContent = "Registrar";
    }
    
    modal.classList.add("open");
    lucide.createIcons();
}

function cerrarModalPaciente() {
    document.getElementById("modal-paciente").classList.remove("open");
}

function guardarPaciente(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("form-paciente-index").value);
    
    // Read phone values
    const phoneInputs = document.querySelectorAll("#p-telefonos-container .p-tel-input");
    const telefonos = [];
    phoneInputs.forEach(inp => {
        const val = inp.value.trim();
        if (val) telefonos.push(val);
    });
    
    if (telefonos.length === 0) {
        alert("Debe agregar al menos un teléfono de contacto.");
        return;
    }
    
    const rawRut = document.getElementById("p-rut").value.trim();
    if (!validarRut(rawRut)) {
        alert("Error: El RUT ingresado no es válido (dígito verificador incorrecto o formato inválido).");
        return;
    }
    const cleanRutVal = rawRut.replace(/[^0-9kK]/g, "").toUpperCase();

    const pData = {
        rut: cleanRutVal,
        primerNombre: document.getElementById("p-primer-nombre").value.trim(),
        segundoNombre: document.getElementById("p-segundo-nombre").value.trim(),
        primerApellido: document.getElementById("p-primer-apellido").value.trim(),
        segundoApellido: document.getElementById("p-segundo-apellido").value.trim(),
        nacimiento: document.getElementById("p-nacimiento").value,
        genero: document.getElementById("p-genero").value,
        telefonos: telefonos,
        contactoEmergencia: {
            nombre: document.getElementById("p-emergencia-nombre").value.trim(),
            telefono: document.getElementById("p-emergencia-telefono").value.trim(),
            relacion: document.getElementById("p-emergencia-tipo").value.trim()
        },
        email: document.getElementById("p-email").value.trim(),
        direccion: document.getElementById("p-direccion").value.trim(),
        prevision: document.getElementById("p-prevision").value,
        sangre: document.getElementById("p-sangre").value,
        alergias: document.getElementById("p-alergias").value.trim() || "Ninguna"
    };
    
    if (index > -1) {
        // Edit existing
        const oldRut = State.pacientes[index].rut;
        const nuevoRut = pData.rut;
        if (nuevoRut !== oldRut) {
            // Check duplicate in other patients
            if (State.pacientes.some((p, idx) => idx !== index && p.rut.toLowerCase() === nuevoRut.toLowerCase())) {
                alert("Error: Ya existe otro paciente registrado con este RUT.");
                return;
            }
            // Cascade update in appointments and consultations
            State.citas.forEach(c => {
                if (c.pacienteRut === oldRut) c.pacienteRut = nuevoRut;
            });
            State.consultas.forEach(c => {
                if (c.pacienteRut === oldRut) c.pacienteRut = nuevoRut;
            });
            State.save("citas");
            State.save("consultas");
            
            // Update active patient reference
            if (State.activePatientRut === oldRut) {
                State.activePatientRut = nuevoRut;
            }
        }
        State.pacientes[index] = pData;
    } else {
        // Check duplicate RUT
        if (State.pacientes.some(p => p.rut.toLowerCase() === pData.rut.toLowerCase())) {
            alert("Error: Ya existe un paciente registrado con este RUT.");
            return;
        }
        // New patient
        State.pacientes.push(pData);
    }
    
    State.save("pacientes");
    cerrarModalPaciente();
    renderPacientesTable();
    setupDashboard();
    
    // Refresh Clinical History view if active
    if (State.activePatientRut) {
        mostrarPerfilPaciente(State.activePatientRut);
    }
}

// 6. MODULE: MÉDICOS
function setupMedicos() {
    document.getElementById("btn-abrir-modal-medico").addEventListener("click", () => abrirModalMedico());
    document.getElementById("btn-close-modal-medico").addEventListener("click", cerrarModalMedico);
    document.getElementById("btn-cancelar-medico").addEventListener("click", cerrarModalMedico);
    
    document.getElementById("form-medico").addEventListener("submit", guardarMedico);
    document.getElementById("input-search-medicos").addEventListener("input", renderMedicosTable);

    // Format RUT input dynamically
    setupRutFormatter("m-rut");
}

function renderMedicosTable() {
    const query = document.getElementById("input-search-medicos").value.toLowerCase();
    const tbody = document.getElementById("tbl-medicos");
    tbody.innerHTML = "";
    
    const filtered = State.medicos.filter(m => 
        obtenerNombreCompletoMedico(m).toLowerCase().includes(query) || 
        m.especialidad.toLowerCase().includes(query) ||
        m.rut.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No se encontraron médicos.</td></tr>`;
        return;
    }
    
    filtered.forEach((m, idx) => {
        const tr = document.createElement("tr");
        const realIndex = State.medicos.findIndex(orig => orig.rut === m.rut);
        const medNombre = obtenerNombreCompletoMedico(m);
        
        // Build places of practice badges
        const placesBadges = [];
        if (m.centrosMedicos) {
            m.centrosMedicos.forEach(cid => {
                const c = State.centrosMedicos.find(x => x.id === cid);
                if (c) {
                    placesBadges.push(`<span class="venue-badge venue-badge-center" title="${c.direccion}">${c.nombre}</span>`);
                }
            });
        }
        if (m.atiendeConsultaParticular) {
            placesBadges.push(`<span class="venue-badge venue-badge-particular" title="${m.direccion || 'Sin dirección registrada'}">Consulta Particular</span>`);
        }
        const placesHtml = placesBadges.length > 0 ? `<div class="venue-badges-container">${placesBadges.join('')}</div>` : `<span style="font-size: 0.75rem; color: var(--text-muted);">Sin lugares asignados</span>`;
        
        tr.innerHTML = `
            <td><strong>${formatRut(m.rut)}</strong></td>
            <td>
                <div><strong>${medNombre}</strong></div>
                ${m.direccion ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;"><i data-lucide="map-pin" style="width:10px;height:10px;display:inline-block;vertical-align:middle;"></i> ${m.direccion}</div>` : ""}
            </td>
            <td>
                <span class="badge badge-info">${m.especialidad}</span>
                ${placesHtml}
            </td>
            <td>
                <div>${m.telefono || "Sin teléfono"}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${m.email || "Sin email"}</div>
            </td>
            <td>${m.horario}</td>
            <td style="display: flex; gap: 8px;">
                <button class="btn btn-secondary btn-sm btn-icon-only btn-edit-medico" data-index="${realIndex}" title="Editar Médico">
                    <i data-lucide="edit"></i>
                </button>
                <button class="btn btn-secondary btn-sm btn-icon-only text-danger btn-delete-medico" data-index="${realIndex}" title="Eliminar Médico">
                    <i data-lucide="trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
    
    // Wire events
    document.querySelectorAll(".btn-edit-medico").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.currentTarget.getAttribute("data-index");
            abrirModalMedico(parseInt(index));
        });
    });
 
    document.querySelectorAll(".btn-delete-medico").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.getAttribute("data-index"));
            const med = State.medicos[index];
            const medNombre = obtenerNombreCompletoMedico(med);
            if (confirm(`¿Estás seguro de que deseas eliminar al médico "${medNombre}"?`)) {
                State.medicos.splice(index, 1);
                State.save("medicos");
                renderMedicosTable();
            }
        });
    });
}
 
function abrirModalMedico(index = -1) {
    const modal = document.getElementById("modal-medico");
    const form = document.getElementById("form-medico");
    const title = document.getElementById("modal-medico-title");
    
    form.reset();
    document.getElementById("form-medico-index").value = index;
    
    // Populate places of practice checkboxes
    const centrosContainer = document.getElementById("m-centros-container");
    centrosContainer.innerHTML = "";
    
    State.centrosMedicos.forEach(c => {
        const label = document.createElement("label");
        label.className = "checkbox-item";
        label.innerHTML = `
            <input type="checkbox" class="m-centro-cb" value="${c.id}">
            <span>${c.nombre}</span>
        `;
        centrosContainer.appendChild(label);
    });
    
    const labelParticular = document.createElement("label");
    labelParticular.className = "checkbox-item";
    labelParticular.innerHTML = `
        <input type="checkbox" id="m-particular-cb" value="particular">
        <span class="text-warning">Consulta Particular</span>
    `;
    centrosContainer.appendChild(labelParticular);
    
    if (index > -1) {
        title.textContent = "Editar Datos del Médico";
        const m = State.medicos[index];
        document.getElementById("m-rut").value = formatRut(m.rut);
        document.getElementById("m-rut").disabled = false;
        
        document.getElementById("m-primer-nombre").value = m.primerNombre || "";
        document.getElementById("m-segundo-nombre").value = m.segundoNombre || "";
        document.getElementById("m-primer-apellido").value = m.primerApellido || "";
        document.getElementById("m-segundo-apellido").value = m.segundoApellido || "";
        
        document.getElementById("m-especialidad").value = m.especialidad;
        document.getElementById("m-horario").value = m.horario;
        document.getElementById("m-telefono").value = m.telefono || "";
        document.getElementById("m-email").value = m.email || "";
        document.getElementById("m-direccion").value = m.direccion || "";
        
        // Check checked checkboxes
        const selectedCentros = m.centrosMedicos || [];
        document.querySelectorAll(".m-centro-cb").forEach(cb => {
            cb.checked = selectedCentros.includes(cb.value);
        });
        document.getElementById("m-particular-cb").checked = !!m.atiendeConsultaParticular;
        
        document.getElementById("btn-guardar-medico").textContent = "Guardar Cambios";
    } else {
        title.textContent = "Registrar Nuevo Médico";
        document.getElementById("m-rut").disabled = false;
        
        document.getElementById("m-primer-nombre").value = "";
        document.getElementById("m-segundo-nombre").value = "";
        document.getElementById("m-primer-apellido").value = "";
        document.getElementById("m-segundo-apellido").value = "";
        document.getElementById("m-telefono").value = "";
        document.getElementById("m-email").value = "";
        document.getElementById("m-direccion").value = "";
        
        // Checked Consulta Particular by default for new entries
        document.getElementById("m-particular-cb").checked = true;
        
        document.getElementById("btn-guardar-medico").textContent = "Registrar";
    }
    
    modal.classList.add("open");
    lucide.createIcons();
}
 
function cerrarModalMedico() {
    document.getElementById("modal-medico").classList.remove("open");
}
 
function guardarMedico(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("form-medico-index").value);
    const primerNombre = document.getElementById("m-primer-nombre").value.trim();
    
    let titleVal = "Dr.";
    if (primerNombre.toLowerCase().endsWith("a") || primerNombre.toLowerCase().endsWith("is") || primerNombre.toLowerCase().endsWith("en")) {
        titleVal = "Dra.";
    }
    
    let rawRut = document.getElementById("m-rut").value.trim();
    let rutVal = "";
    if (rawRut) {
        if (!validarRut(rawRut)) {
            alert("Error: El RUT ingresado no es válido (dígito verificador incorrecto o formato inválido).");
            return;
        }
        rutVal = rawRut.replace(/[^0-9kK]/g, "").toUpperCase();
    } else {
        if (index > -1) {
            rutVal = State.medicos[index].rut;
        } else {
            rutVal = `S-RUN-${Date.now()}`;
        }
    }
    
    // Read checkboxes
    const checkedCentros = [];
    document.querySelectorAll(".m-centro-cb").forEach(cb => {
        if (cb.checked) checkedCentros.push(cb.value);
    });
    const atiendeParticular = document.getElementById("m-particular-cb").checked;
    
    if (checkedCentros.length === 0 && !atiendeParticular) {
        alert("Debe seleccionar al menos un lugar de atención (Centro Médico o Consulta Particular).");
        return;
    }
    
    const mData = {
        rut: rutVal,
        titulo: index > -1 ? State.medicos[index].titulo || titleVal : titleVal,
        primerNombre: primerNombre,
        segundoNombre: document.getElementById("m-segundo-nombre").value.trim(),
        primerApellido: document.getElementById("m-primer-apellido").value.trim(),
        segundoApellido: document.getElementById("m-segundo-apellido").value.trim(),
        especialidad: document.getElementById("m-especialidad").value,
        horario: document.getElementById("m-horario").value,
        telefono: document.getElementById("m-telefono").value.trim(),
        email: document.getElementById("m-email").value.trim(),
        direccion: document.getElementById("m-direccion").value.trim(),
        centrosMedicos: checkedCentros,
        atiendeConsultaParticular: atiendeParticular
    };
    
    if (index > -1) {
        const oldRut = State.medicos[index].rut;
        const nuevoRut = mData.rut;
        if (nuevoRut !== oldRut) {
            // Check duplicate in other medicos
            if (!nuevoRut.startsWith("S-RUN-") && State.medicos.some((m, idx) => idx !== index && m.rut.toLowerCase() === nuevoRut.toLowerCase())) {
                alert("Error: Ya existe otro médico registrado con este RUT.");
                return;
            }
            // Cascade update in appointments and consultations
            State.citas.forEach(c => {
                if (c.medicoRut === oldRut) c.medicoRut = nuevoRut;
            });
            State.consultas.forEach(c => {
                if (c.medicoRut === oldRut) c.medicoRut = nuevoRut;
            });
            State.save("citas");
            State.save("consultas");
        }
        State.medicos[index] = mData;
    } else {
        // Check duplicate RUT
        if (!rutVal.startsWith("S-RUN-") && State.medicos.some(m => m.rut.toLowerCase() === mData.rut.toLowerCase())) {
            alert("Error: Ya existe un médico registrado con este RUT.");
            return;
        }
        State.medicos.push(mData);
    }
    
    State.save("medicos");
    cerrarModalMedico();
    renderMedicosTable();
}

// 6B. MODULE: CENTROS MÉDICOS
function setupCentros() {
    document.getElementById("btn-abrir-modal-centro").addEventListener("click", () => abrirModalCentro());
    document.getElementById("btn-close-modal-centro").addEventListener("click", cerrarModalCentro);
    document.getElementById("btn-cancelar-centro").addEventListener("click", cerrarModalCentro);
    
    document.getElementById("btn-c-agregar-telefono").addEventListener("click", () => {
        agregarCampoTelefonoCentroForm("");
    });
    
    document.getElementById("btn-c-agregar-sucursal").addEventListener("click", () => {
        agregarCampoSucursalCentroForm("");
    });
    
    document.getElementById("form-centro").addEventListener("submit", guardarCentro);
    document.getElementById("input-search-centros").addEventListener("input", renderCentrosGrid);
}

function agregarCampoTelefonoCentroForm(valor = "") {
    const container = document.getElementById("c-telefonos-container");
    const itemId = `c-tel-item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    
    const div = document.createElement("div");
    div.className = "telefono-item";
    div.id = itemId;
    
    div.innerHTML = `
        <input type="tel" class="c-tel-input form-control" placeholder="+56 2 2987 6543" value="${valor}" required>
        <button type="button" class="btn btn-danger btn-sm btn-icon-only btn-remove-c-tel" data-item-id="${itemId}" style="width: 32px; height: 32px; flex-shrink: 0;">
            <i data-lucide="trash-2"></i>
        </button>
    `;
    
    container.appendChild(div);
    lucide.createIcons();
    
    div.querySelector(".btn-remove-c-tel").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-item-id");
        if (container.children.length > 1) {
            const el = document.getElementById(id);
            if (el) el.remove();
        } else {
            alert("Debe mantener al menos un teléfono de contacto.");
        }
    });
}

function agregarCampoSucursalCentroForm(valor = "") {
    const container = document.getElementById("c-sucursales-container");
    const itemId = `c-suc-item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    
    const div = document.createElement("div");
    div.className = "sucursal-item";
    div.id = itemId;
    
    div.innerHTML = `
        <input type="text" class="c-suc-input form-control" placeholder="Providencia" value="${valor}" required>
        <button type="button" class="btn btn-danger btn-sm btn-icon-only btn-remove-c-suc" data-item-id="${itemId}" style="width: 32px; height: 32px; flex-shrink: 0;">
            <i data-lucide="trash-2"></i>
        </button>
    `;
    
    container.appendChild(div);
    lucide.createIcons();
    
    div.querySelector(".btn-remove-c-suc").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-item-id");
        if (container.children.length > 1) {
            const el = document.getElementById(id);
            if (el) el.remove();
        } else {
            alert("Debe registrar al menos una sucursal.");
        }
    });
}

function renderCentrosGrid() {
    const query = document.getElementById("input-search-centros").value.toLowerCase();
    const grid = document.getElementById("grid-centros");
    grid.innerHTML = "";
    
    const filtered = State.centrosMedicos.filter(c => 
        c.nombre.toLowerCase().includes(query) || 
        c.direccion.toLowerCase().includes(query) ||
        c.especialidades.some(e => e.toLowerCase().includes(query)) ||
        c.sucursales.some(s => s.toLowerCase().includes(query))
    );
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 48px;">No se encontraron centros médicos.</div>`;
        return;
    }
    
    filtered.forEach((c) => {
        const realIndex = State.centrosMedicos.findIndex(orig => orig.id === c.id);
        
        // Find doctors associated with this medical center
        const associatedDocs = State.medicos.filter(m => m.centrosMedicos && m.centrosMedicos.includes(c.id));
        
        let docsHtml = "";
        if (associatedDocs.length === 0) {
            docsHtml = `<div style="font-size: 0.8rem; color: var(--text-muted);">Sin médicos asignados</div>`;
        } else {
            docsHtml = associatedDocs.map(m => {
                const nombre = obtenerNombreCompletoMedico(m);
                return `<div><i data-lucide="user"></i> ${nombre} (${m.especialidad})</div>`;
            }).join('');
        }
        
        const card = document.createElement("div");
        card.className = "centro-card";
        card.innerHTML = `
            <div class="centro-card-header">
                <div class="centro-card-icon">
                    <i data-lucide="building-2"></i>
                </div>
                <div class="centro-card-actions">
                    <button class="btn btn-secondary btn-sm btn-icon-only btn-edit-centro" data-index="${realIndex}" title="Editar Centro">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm btn-icon-only text-danger btn-delete-centro" data-index="${realIndex}" title="Eliminar Centro">
                        <i data-lucide="trash"></i>
                    </button>
                </div>
            </div>
            
            <div>
                <h3 class="centro-card-title">${c.nombre}</h3>
                <div class="centro-card-direccion">
                    <i data-lucide="map-pin"></i> ${c.direccion}
                </div>
            </div>
            
            <div class="centro-card-section">
                <div class="centro-card-section-title">Especialidades</div>
                <div class="centro-badge-list">
                    ${c.especialidades.map(e => `<span class="centro-badge centro-badge-blue">${e}</span>`).join('')}
                </div>
            </div>
            
            <div class="centro-card-section">
                <div class="centro-card-section-title">Sucursales</div>
                <div class="centro-badge-list">
                    ${c.sucursales.map(s => `<span class="centro-badge centro-badge-purple">${s}</span>`).join('')}
                </div>
            </div>
            
            <div class="centro-card-section">
                <div class="centro-card-section-title">Teléfonos</div>
                <div class="centro-phones-list">
                    ${c.telefonos.map(t => `<div><i data-lucide="phone"></i> ${t}</div>`).join('')}
                </div>
            </div>
            
            <div class="centro-card-section">
                <div class="centro-card-section-title">Médicos en Convenio</div>
                <div class="centro-medicos-list">
                    ${docsHtml}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    lucide.createIcons();
    
    // Wire events
    document.querySelectorAll(".btn-edit-centro").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.currentTarget.getAttribute("data-index");
            abrirModalCentro(parseInt(index));
        });
    });
    
    document.querySelectorAll(".btn-delete-centro").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.getAttribute("data-index"));
            const centro = State.centrosMedicos[index];
            if (confirm(`¿Estás seguro de que deseas eliminar el centro médico "${centro.nombre}"?`)) {
                // Remove center reference from medicos
                State.medicos.forEach(m => {
                    if (m.centrosMedicos) {
                        m.centrosMedicos = m.centrosMedicos.filter(id => id !== centro.id);
                    }
                });
                State.save("medicos");
                
                State.centrosMedicos.splice(index, 1);
                State.save("centrosMedicos");
                renderCentrosGrid();
            }
        });
    });
}

function abrirModalCentro(index = -1) {
    const modal = document.getElementById("modal-centro");
    const form = document.getElementById("form-centro");
    const title = document.getElementById("modal-centro-title");
    
    form.reset();
    document.getElementById("form-centro-index").value = index;
    
    const telContainer = document.getElementById("c-telefonos-container");
    telContainer.innerHTML = "";
    
    const sucContainer = document.getElementById("c-sucursales-container");
    sucContainer.innerHTML = "";
    
    if (index > -1) {
        title.textContent = "Editar Centro Médico";
        const c = State.centrosMedicos[index];
        
        document.getElementById("c-nombre").value = c.nombre;
        document.getElementById("c-direccion").value = c.direccion;
        document.getElementById("c-especialidades").value = c.especialidades ? c.especialidades.join(", ") : "";
        
        // Pop telefonos
        if (c.telefonos && c.telefonos.length > 0) {
            c.telefonos.forEach(t => agregarCampoTelefonoCentroForm(t));
        } else {
            agregarCampoTelefonoCentroForm("");
        }
        
        // Pop sucursales
        if (c.sucursales && c.sucursales.length > 0) {
            c.sucursales.forEach(s => agregarCampoSucursalCentroForm(s));
        } else {
            agregarCampoSucursalCentroForm("");
        }
        
        document.getElementById("btn-guardar-centro").textContent = "Guardar Cambios";
    } else {
        title.textContent = "Registrar Nuevo Centro Médico";
        agregarCampoTelefonoCentroForm("");
        agregarCampoSucursalCentroForm("");
        document.getElementById("btn-guardar-centro").textContent = "Registrar";
    }
    
    modal.classList.add("open");
    lucide.createIcons();
}

function cerrarModalCentro() {
    document.getElementById("modal-centro").classList.remove("open");
}

function guardarCentro(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("form-centro-index").value);
    
    // Read dynamic phones
    const phoneInputs = document.querySelectorAll("#c-telefonos-container .c-tel-input");
    const telefonos = [];
    phoneInputs.forEach(inp => {
        const val = inp.value.trim();
        if (val) telefonos.push(val);
    });
    
    if (telefonos.length === 0) {
        alert("Debe agregar al menos un teléfono.");
        return;
    }
    
    // Read dynamic branches
    const branchInputs = document.querySelectorAll("#c-sucursales-container .c-suc-input");
    const sucursales = [];
    branchInputs.forEach(inp => {
        const val = inp.value.trim();
        if (val) sucursales.push(val);
    });
    
    if (sucursales.length === 0) {
        alert("Debe agregar al menos una sucursal.");
        return;
    }
    
    // Parse specialties
    const espRaw = document.getElementById("c-especialidades").value;
    const especialidades = espRaw.split(",")
        .map(e => e.trim())
        .filter(e => e.length > 0);
        
    if (especialidades.length === 0) {
        alert("Debe ingresar al menos una especialidad.");
        return;
    }
    
    const cData = {
        id: index > -1 ? State.centrosMedicos[index].id : `cm-${Date.now()}`,
        nombre: document.getElementById("c-nombre").value.trim(),
        direccion: document.getElementById("c-direccion").value.trim(),
        especialidades: especialidades,
        telefonos: telefonos,
        sucursales: sucursales
    };
    
    if (index > -1) {
        State.centrosMedicos[index] = cData;
    } else {
        // Check duplicate name
        if (State.centrosMedicos.some(c => c.nombre.toLowerCase() === cData.nombre.toLowerCase())) {
            alert("Ya existe un centro médico registrado con este nombre.");
            return;
        }
        State.centrosMedicos.push(cData);
    }
    
    State.save("centrosMedicos");
    cerrarModalCentro();
    renderCentrosGrid();
}

// 7. MODULE: CITAS
function setupCitas() {
    // Set default date picker to simulated Today
    document.getElementById("calendar-date-picker").value = TODAY_STR;
    
    // Open Modal
    document.getElementById("btn-abrir-modal-cita").addEventListener("click", () => abrirModalCita());
    document.getElementById("btn-close-modal-cita").addEventListener("click", cerrarModalCita);
    document.getElementById("btn-cancelar-cita").addEventListener("click", cerrarModalCita);
    
    // Form Submit
    document.getElementById("form-cita").addEventListener("submit", guardarCita);
    
    // Filters & Date Pickers listeners
    document.getElementById("calendar-date-picker").addEventListener("change", renderCitasAgenda);
    document.getElementById("filter-cita-medico").addEventListener("change", renderCitasAgenda);
    document.getElementById("filter-cita-estado").addEventListener("change", renderCitasAgenda);
    
    // Doctor selection change
    document.getElementById("c-medico").addEventListener("change", (e) => {
        actualizarLugarAtencionSelector(e.target.value);
    });
    
    // Populate filter dropdown
    populateMedicosFilterDropdown();
}

function populateMedicosFilterDropdown() {
    const select = document.getElementById("filter-cita-medico");
    select.innerHTML = '<option value="todos">Todos los Médicos</option>';
    
    State.medicos.forEach(m => {
        const option = document.createElement("option");
        option.value = m.rut;
        option.textContent = `${obtenerNombreCompletoMedico(m)} (${m.especialidad})`;
        select.appendChild(option);
    });
}

function renderCitasAgenda() {
    const selectedDate = document.getElementById("calendar-date-picker").value;
    const filterMedico = document.getElementById("filter-cita-medico").value;
    const filterEstado = document.getElementById("filter-cita-estado").value;
    
    // Dynamic title of calendar list
    document.getElementById("citas-list-title").textContent = `Agenda de Citas - ${formatFecha(selectedDate)}`;
    
    const tbody = document.getElementById("tbl-citas-agenda");
    tbody.innerHTML = "";
    
    // Filter list
    let filtered = State.citas.filter(c => c.fecha === selectedDate);
    
    if (filterMedico !== "todos") {
        filtered = filtered.filter(c => c.medicoRut === filterMedico);
    }
    
    if (filterEstado !== "todos") {
        filtered = filtered.filter(c => c.estado === filterEstado);
    }
    
    // Sort by hour
    filtered.sort((a, b) => a.hora.localeCompare(b.hora));
    
    // Count Badge
    document.getElementById("citas-count-badge").textContent = `${filtered.length} ${filtered.length === 1 ? 'cita' : 'citas'}`;
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No hay citas agendadas para esta fecha con los filtros seleccionados.</td></tr>`;
        return;
    }
    
    filtered.forEach(cita => {
        const pac = State.pacientes.find(p => p.rut === cita.pacienteRut);
        const pacNombre = pac ? obtenerNombreCompleto(pac) : "Desconocido";
        const med = State.medicos.find(m => m.rut === cita.medicoRut);
        const medNombre = med ? obtenerNombreCompletoMedico(med) : "Desconocido";
        const especialidad = med ? med.especialidad : "General";
        const realIndex = State.citas.findIndex(orig => orig.id === cita.id);
        
        let badgeClass = "badge-info";
        if (cita.estado === "Completada") badgeClass = "badge-success";
        if (cita.estado === "Cancelada") badgeClass = "badge-danger";
        if (cita.estado === "En Consulta") badgeClass = "badge-blue";
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${cita.hora}</strong></td>
            <td>
                <div><strong>${pacNombre}</strong></div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">RUT: ${formatRut(cita.pacienteRut)}</div>
            </td>
            <td>
                <div>${medNombre}</div>
                <div style="font-size: 0.75rem; color: var(--color-primary);">${especialidad}</div>
                <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;"><i data-lucide="map-pin" style="width:10px;height:10px;display:inline-block;vertical-align:middle;"></i> ${obtenerLugarAtencionTexto(cita.lugarAtencion)}</div>
            </td>
            <td>${cita.motivo}</td>
            <td><span class="badge ${badgeClass}">${cita.estado}</span></td>
            <td style="display: flex; gap: 8px;">
                ${cita.estado === "Pendiente" ? `
                    <button class="btn btn-emerald btn-sm btn-atender-cita" data-cita-id="${cita.id}">
                        Atender
                    </button>
                ` : cita.estado === "En Consulta" ? `
                    <button class="btn btn-primary btn-sm btn-atender-cita" data-cita-id="${cita.id}">
                        Retomar
                    </button>
                ` : ``}
                <button class="btn btn-secondary btn-sm btn-icon-only btn-edit-cita" data-index="${realIndex}" title="Editar Cita">
                    <i data-lucide="edit"></i>
                </button>
                <button class="btn btn-secondary btn-sm btn-icon-only text-danger btn-delete-cita" data-index="${realIndex}" title="Eliminar Cita">
                    <i data-lucide="trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
    
    // Wire events
    document.querySelectorAll(".btn-atender-cita").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-cita-id");
            iniciarConsultaDesdeCita(id);
        });
    });

    document.querySelectorAll(".btn-edit-cita").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.currentTarget.getAttribute("data-index");
            abrirModalCita(parseInt(index));
        });
    });

    document.querySelectorAll(".btn-delete-cita").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.getAttribute("data-index"));
            const cita = State.citas[index];
            if (confirm("¿Estás seguro de que deseas eliminar esta cita de la agenda?")) {
                State.citas.splice(index, 1);
                State.save("citas");
                renderCitasAgenda();
            }
        });
    });
}

function abrirModalCita(index = -1) {
    const modal = document.getElementById("modal-cita");
    const form = document.getElementById("form-cita");
    const title = document.getElementById("modal-cita-title");
    
    form.reset();
    document.getElementById("form-cita-index").value = index;
    
    // Fill Patient select options
    const selectPac = document.getElementById("c-paciente");
    selectPac.innerHTML = '<option value="" disabled selected>Seleccione un paciente...</option>';
    State.pacientes.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.rut;
        opt.textContent = `${obtenerNombreCompleto(p)} (RUT: ${formatRut(p.rut)})`;
        selectPac.appendChild(opt);
    });
    
    // Fill Doctor select options
    const selectMed = document.getElementById("c-medico");
    selectMed.innerHTML = '<option value="" disabled selected>Seleccione un médico / especialidad...</option>';
    State.medicos.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.rut;
        opt.textContent = `${obtenerNombreCompletoMedico(m)} - ${m.especialidad} (${m.horario})`;
        selectMed.appendChild(opt);
    });
    
    const estadoContainer = document.getElementById("c-estado-container");
    
    if (index > -1) {
        title.textContent = "Editar Cita Programada";
        const c = State.citas[index];
        selectPac.value = c.pacienteRut;
        selectMed.value = c.medicoRut;
        
        // Dynamically populate place select and set value
        actualizarLugarAtencionSelector(c.medicoRut, c.lugarAtencion);
        
        document.getElementById("c-fecha").value = c.fecha;
        document.getElementById("c-hora").value = c.hora;
        document.getElementById("c-motivo").value = c.motivo;
        
        estadoContainer.style.display = "block";
        document.getElementById("c-estado").value = c.estado;
        
        document.getElementById("btn-guardar-cita").textContent = "Guardar Cambios";
    } else {
        title.textContent = "Agendar Cita Médica";
        document.getElementById("c-fecha").value = document.getElementById("calendar-date-picker").value || TODAY_STR;
        
        // Clear place select
        actualizarLugarAtencionSelector("");
        
        estadoContainer.style.display = "none";
        document.getElementById("btn-guardar-cita").textContent = "Agendar Cita";
    }
    
    modal.classList.add("open");
    lucide.createIcons();
}

function cerrarModalCita() {
    document.getElementById("modal-cita").classList.remove("open");
}

function actualizarLugarAtencionSelector(medicoRut, valorSeleccionado = "") {
    const selectLugar = document.getElementById("c-lugar-atencion");
    selectLugar.innerHTML = "";
    
    if (!medicoRut) {
        selectLugar.innerHTML = '<option value="" disabled selected>Seleccione primero un médico...</option>';
        return;
    }
    
    const m = State.medicos.find(med => med.rut === medicoRut);
    if (!m) {
        selectLugar.innerHTML = '<option value="" disabled selected>Médico no encontrado...</option>';
        return;
    }
    
    const options = [];
    if (m.centrosMedicos) {
        m.centrosMedicos.forEach(cid => {
            const c = State.centrosMedicos.find(x => x.id === cid);
            if (c) {
                options.push({ value: c.id, label: c.nombre });
            }
        });
    }
    if (m.atiendeConsultaParticular) {
        options.push({ value: "particular", label: "Consulta Particular" });
    }
    
    if (options.length === 0) {
        selectLugar.innerHTML = '<option value="" disabled selected>El médico no tiene lugares asignados...</option>';
        return;
    }
    
    selectLugar.innerHTML = '<option value="" disabled selected>Seleccione lugar...</option>';
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        if (valorSeleccionado && opt.value === valorSeleccionado) {
            option.selected = true;
        }
        selectLugar.appendChild(option);
    });
}

function guardarCita(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("form-cita-index").value);
    
    const cData = {
        id: index > -1 ? State.citas[index].id : `c-${Date.now()}`,
        pacienteRut: document.getElementById("c-paciente").value,
        medicoRut: document.getElementById("c-medico").value,
        lugarAtencion: document.getElementById("c-lugar-atencion").value,
        fecha: document.getElementById("c-fecha").value,
        hora: document.getElementById("c-hora").value,
        motivo: document.getElementById("c-motivo").value.trim(),
        estado: index > -1 ? document.getElementById("c-estado").value : "Pendiente"
    };
    
    // Conflict Check (Same doctor, same date, same hour)
    const conflict = State.citas.some((c, idx) => 
        idx !== index &&
        c.medicoRut === cData.medicoRut && 
        c.fecha === cData.fecha && 
        c.hora === cData.hora &&
        c.estado !== "Cancelada"
    );
    
    if (conflict) {
        const med = State.medicos.find(m => m.rut === cData.medicoRut);
        const medName = med ? obtenerNombreCompletoMedico(med) : "el médico";
        alert(`Conflicto de horario: El ${medName} ya tiene una cita agendada el ${formatFecha(cData.fecha)} a las ${cData.hora}. Por favor elija otra hora.`);
        return;
    }
    
    if (index > -1) {
        State.citas[index] = cData;
    } else {
        State.citas.push(cData);
    }
    
    State.save("citas");
    cerrarModalCita();
    renderCitasAgenda();
    setupDashboard(); // refresh dashboard stats
}

// 8. MODULE: HISTORIAL CLÍNICO
function setupHistorial() {
    // Search
    document.getElementById("input-search-historial-pacientes").addEventListener("input", renderHistorialSearchTable);
    
    // Return button
    document.getElementById("btn-regresar-busqueda-historial").addEventListener("click", () => {
        State.activePatientRut = null;
        document.getElementById("historial-search-view").classList.remove("hidden");
        document.getElementById("historial-detail-view").classList.add("hidden");
        document.getElementById("consulta-activa-view").classList.add("hidden");
        renderHistorialSearchTable();
    });

    // Patient profile edit button click handler
    document.getElementById("btn-editar-paciente-desde-perfil").addEventListener("click", () => {
        if (State.activePatientRut) {
            const idx = State.pacientes.findIndex(p => p.rut === State.activePatientRut);
            if (idx > -1) {
                abrirModalPaciente(idx);
            }
        }
    });
}

function renderHistorialSearchTable() {
    const query = document.getElementById("input-search-historial-pacientes").value.toLowerCase();
    const tbody = document.getElementById("tbl-historial-pacientes");
    tbody.innerHTML = "";
    
    const filtered = State.pacientes.filter(p => 
        obtenerNombreCompleto(p).toLowerCase().includes(query) || 
        p.rut.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No se encontraron pacientes registrados.</td></tr>`;
        return;
    }
    
    filtered.forEach(p => {
        const tr = document.createElement("tr");
        const edad = calcularEdad(p.nacimiento);
        const pacNombre = obtenerNombreCompleto(p);
        
        // Find last consultation date
        const patientCon = State.consultas.filter(c => c.pacienteRut === p.rut);
        let lastDate = "Sin registros";
        if (patientCon.length > 0) {
            patientCon.sort((a,b) => b.fecha.localeCompare(a.fecha));
            lastDate = formatFechaHora(patientCon[0].fecha);
        }
        
        tr.innerHTML = `
            <td><strong>${formatRut(p.rut)}</strong></td>
            <td>${pacNombre}</td>
            <td>${edad} años (${formatFecha(p.nacimiento)})</td>
            <td><span class="text-warning">${p.alergias}</span></td>
            <td>${lastDate}</td>
            <td>
                <button class="btn btn-primary btn-sm btn-seleccionar-paciente-hist" data-rut="${p.rut}">
                    Ver Ficha
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Wire events
    document.querySelectorAll(".btn-seleccionar-paciente-hist").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const rut = e.currentTarget.getAttribute("data-rut");
            mostrarPerfilPaciente(rut);
        });
    });
}

function mostrarPerfilPaciente(rut) {
    State.activePatientRut = rut;
    const p = State.pacientes.find(pac => pac.rut === rut);
    if (!p) return;
    
    document.getElementById("historial-search-view").classList.add("hidden");
    document.getElementById("consulta-activa-view").classList.add("hidden");
    document.getElementById("historial-detail-view").classList.remove("hidden");
    
    // Populate client profile details
    document.getElementById("clinical-patient-name").textContent = `Ficha Clínica - ${obtenerNombreCompleto(p)}`;
    document.getElementById("cp-rut").textContent = formatRut(p.rut);
    document.getElementById("cp-edad").textContent = `${calcularEdad(p.nacimiento)} años (${formatFecha(p.nacimiento)})`;
    document.getElementById("cp-prevision").textContent = p.prevision;
    document.getElementById("cp-telefonos").textContent = p.telefonos ? p.telefonos.join(', ') : p.telefono || 'Sin registrar';
    document.getElementById("cp-sangre").textContent = p.sangre;
    
    // Contacto Emergencia
    const emer = p.contactoEmergencia || { nombre: "Sin registrar", telefono: "-", relacion: "" };
    document.getElementById("cp-emergencia-nombre").textContent = emer.nombre || "Sin registrar";
    document.getElementById("cp-emergencia-tel").textContent = emer.telefono || "-";
    document.getElementById("cp-emergencia-tipo").textContent = emer.relacion || "";
    
    const alergiasEl = document.getElementById("cp-alergias");
    alergiasEl.textContent = p.alergias;
    if (p.alergias !== "Ninguna") {
        alergiasEl.className = "pcc-val text-danger font-semibold";
    } else {
        alergiasEl.className = "pcc-val text-muted";
    }
    
    // Populate Consultation Timeline
    const timeline = document.getElementById("consultation-timeline");
    timeline.innerHTML = "";
    
    const patientCon = State.consultas
        .filter(c => c.pacienteRut === rut)
        .sort((a, b) => b.fecha.localeCompare(a.fecha)); // Newest first
        
    if (patientCon.length === 0) {
        timeline.innerHTML = `<div class="timeline-empty" style="text-align: center; padding: 32px; color: var(--text-muted);">No existen consultas registradas anteriormente en el historial del paciente.</div>`;
    } else {
        patientCon.forEach(con => {
            const event = document.createElement("div");
            event.className = "timeline-event";
            
            // Build medications list block if there is a recipe
            let recipeHtml = "";
            if (con.receta && con.receta.emitir && con.receta.medicamentos && con.receta.medicamentos.length > 0) {
                recipeHtml = `
                    <div class="te-sec">
                        <div class="te-sec-title">Medicamentos Recetados (Receta Electrónica)</div>
                        <ul style="padding-left: 18px; margin-top: 4px; font-size: 0.85rem;">
                            ${con.receta.medicamentos.map(m => `<li><strong>${m.nombre}</strong>: ${m.dosis} / ${m.frecuencia} (${m.duracion})</li>`).join('')}
                        </ul>
                        <button class="btn btn-secondary btn-sm te-recipe-btn" data-con-id="${con.id}">
                            <i data-lucide="printer"></i> Imprimir Receta
                        </button>
                    </div>
                `;
            }
            
            event.innerHTML = `
                <div class="te-header">
                    <div class="te-meta">
                        <span class="te-date">${formatFechaHora(con.fecha)}</span>
                        <span class="te-doc">Atendido por: <strong>${con.medicoNombre}</strong></span>
                    </div>
                    <div class="te-actions">
                        <button class="btn btn-secondary btn-sm te-edit-btn" data-con-id="${con.id}">
                            <i data-lucide="edit"></i> Editar Consulta
                        </button>
                    </div>
                </div>
                <div class="te-body">
                    <div class="te-sec">
                        <div class="te-vitals-pill">
                            <span>PA: <strong>${con.presion || 'N/A'}</strong></span>
                            <span>T°: <strong>${con.temp || 'N/A'}°C</strong></span>
                            <span>FC: <strong>${con.pulso || 'N/A'} lpm</strong></span>
                            <span>Peso: <strong>${con.peso || 'N/A'} kg</strong></span>
                        </div>
                    </div>
                    <div class="te-sec">
                        <div class="te-sec-title">Anamnesis / Síntomas</div>
                        <div class="te-sec-val">${con.anamnesis}</div>
                    </div>
                    ${con.examen ? `
                        <div class="te-sec">
                            <div class="te-sec-title">Examen Físico</div>
                            <div class="te-sec-val">${con.examen}</div>
                        </div>
                    ` : ""}
                    <div class="te-sec">
                        <div class="te-sec-title">Diagnóstico</div>
                        <div class="te-sec-val"><strong>${con.diagnostico}</strong> ${con.cie10 ? `<span class="badge badge-info">${con.cie10}</span>` : ""}</div>
                    </div>
                    <div class="te-sec">
                        <div class="te-sec-title">Indicaciones Clínicas</div>
                        <div class="te-sec-val">${con.indicaciones}</div>
                    </div>
                    ${recipeHtml}
                </div>
            `;
            timeline.appendChild(event);
        });
        
        lucide.createIcons();
        
        // Print action bind
        document.querySelectorAll(".te-recipe-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const conId = e.currentTarget.getAttribute("data-con-id");
                abrirPrescripcionImprimible(conId);
            });
        });

        // Edit action bind
        document.querySelectorAll(".te-edit-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const conId = e.currentTarget.getAttribute("data-con-id");
                iniciarConsultaActivaForm(null, conId);
            });
        });
    }
}

// 9. MODULE: CONSULTA ACTIVA / REGISTRO
function setupConsultaActiva() {
    // Checkbox recipe toggle
    const checkboxRecipe = document.getElementById("ca-emitir-receta");
    checkboxRecipe.addEventListener("change", () => {
        const builder = document.getElementById("receta-builder-panel");
        if (checkboxRecipe.checked) {
            builder.classList.remove("hidden");
            // Add at least one empty medication field if empty
            if (document.getElementById("medication-list-items").children.length === 0) {
                agregarCamposMedicamento();
            }
        } else {
            builder.classList.add("hidden");
        }
    });
    
    // Add medication btn
    document.getElementById("btn-agregar-medicamento").addEventListener("click", () => agregarCamposMedicamento());
    
    // Cancel consulta btn
    document.getElementById("btn-cancelar-consulta-activa").addEventListener("click", () => {
        if (confirm("¿Estás seguro de cancelar la atención actual? Se perderán todos los datos ingresados.")) {
            // Restore Active appointment state to Pendiente if needed
            if (State.activeCitaId) {
                const cita = State.citas.find(c => c.id === State.activeCitaId);
                if (cita && cita.estado === "En Consulta") {
                    cita.estado = "Pendiente";
                    State.save("citas");
                }
            }
            State.activeCitaId = null;
            State.activeConsultaId = null;
            mostrarPerfilPaciente(State.activePatientRut);
        }
    });
    
    // Submit consulta btn
    document.getElementById("btn-guardar-consulta").addEventListener("click", guardarConsultaClinica);
    
    // Print Modal buttons
    document.getElementById("btn-cerrar-modal-receta").addEventListener("click", cerrarPrescripcionImprimible);
    document.getElementById("btn-imprimir-receta").addEventListener("click", () => {
        window.print();
    });
}

function iniciarConsultaDesdeCita(citaId) {
    const cita = State.citas.find(c => c.id === citaId);
    if (!cita) return;
    
    State.activeCitaId = citaId;
    State.activePatientRut = cita.pacienteRut;
    
    // Change appointment state to En Consulta
    cita.estado = "En Consulta";
    State.save("citas");
    
    // Load Clinical view
    const navBtnHist = document.getElementById("nav-historial");
    navBtnHist.click(); // switch to clinical section
    
    // Trigger Consulta view
    iniciarConsultaActivaForm(cita);
}

// Binds the button "Nueva Consulta" from the Patient Profile
document.getElementById("btn-iniciar-consulta-activa").addEventListener("click", () => {
    iniciarConsultaActivaForm();
});

function iniciarConsultaActivaForm(cita = null, conId = null) {
    const p = State.pacientes.find(pac => pac.rut === State.activePatientRut);
    if (!p) return;
    
    document.getElementById("historial-detail-view").classList.add("hidden");
    document.getElementById("consulta-activa-view").classList.remove("hidden");
    
    // Update badge/title
    document.getElementById("active-consultation-patient-badge").textContent = `Paciente: ${obtenerNombreCompleto(p)} (RUT: ${formatRut(p.rut)})`;
    
    // Pre-fill doctor select dropdown
    const selectDoc = document.getElementById("ca-medico");
    selectDoc.innerHTML = '<option value="" disabled selected>Seleccione el médico que atiende...</option>';
    State.medicos.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.rut;
        opt.textContent = `${obtenerNombreCompletoMedico(m)} (${m.especialidad})`;
        selectDoc.appendChild(opt);
    });
    
    // Reset Form
    document.getElementById("form-consulta-activa").reset();
    document.getElementById("ca-emitir-receta").checked = false;
    document.getElementById("receta-builder-panel").classList.add("hidden");
    document.getElementById("medication-list-items").innerHTML = "";
    
    const cardTitle = document.querySelector("#consulta-activa-view .card-header h3");
    
    if (conId) {
        // Edit past consultation mode
        State.activeConsultaId = conId;
        if (cardTitle) cardTitle.textContent = "Editar Registro de Consulta";
        
        const con = State.consultas.find(c => c.id === conId);
        if (con) {
            selectDoc.value = con.medicoRut;
            document.getElementById("ca-fecha").value = con.fecha;
            
            document.getElementById("ca-presion").value = con.presion === "N/A" ? "" : con.presion;
            document.getElementById("ca-temp").value = con.temp === "N/A" ? "" : con.temp;
            document.getElementById("ca-pulso").value = con.pulso === "N/A" ? "" : con.pulso;
            document.getElementById("ca-peso").value = con.peso === "N/A" ? "" : con.peso;
            
            document.getElementById("ca-anamnesis").value = con.anamnesis;
            document.getElementById("ca-examen").value = con.examen || "";
            document.getElementById("ca-diagnostico").value = con.diagnostico;
            document.getElementById("ca-cie10").value = con.cie10 || "";
            document.getElementById("ca-indicaciones").value = con.indicaciones;
            
            if (con.receta && con.receta.emitir) {
                document.getElementById("ca-emitir-receta").checked = true;
                document.getElementById("receta-builder-panel").classList.remove("hidden");
                document.getElementById("ca-receta-validez").value = con.receta.validez || 30;
                
                if (con.receta.medicamentos && con.receta.medicamentos.length > 0) {
                    con.receta.medicamentos.forEach(med => {
                        agregarCamposMedicamento(med.nombre, med.dosis, med.frecuencia, med.duracion);
                    });
                } else {
                    agregarCamposMedicamento();
                }
            }
        }
    } else {
        // New consultation mode
        State.activeConsultaId = null;
        if (cardTitle) cardTitle.textContent = "Registro de Atención";
        
        // Date/Time default
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const localISOTime = (new Date(Date.now() - offset)).toISOString().slice(0, 16);
        document.getElementById("ca-fecha").value = localISOTime;
        
        // Pre-fill values if we come from an appointment
        if (cita) {
            selectDoc.value = cita.medicoRut;
            document.getElementById("ca-anamnesis").value = cita.motivo;
            // Use scheduled time if it's today
            document.getElementById("ca-fecha").value = `${cita.fecha}T${cita.hora}`;
        }
    }
}

function agregarCamposMedicamento(valName = "", valDose = "", valFreq = "", valDur = "") {
    const container = document.getElementById("medication-list-items");
    const itemId = `med-item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    
    const div = document.createElement("div");
    div.className = "medication-item";
    div.id = itemId;
    
    div.innerHTML = `
        <input type="text" class="med-name" placeholder="Paracetamol 500mg" value="${valName}" required>
        <input type="text" class="med-dose" placeholder="1 tableta" value="${valDose}" required>
        <input type="text" class="med-freq" placeholder="c/8 hrs" value="${valFreq}" required>
        <input type="text" class="med-dur" placeholder="3 días" value="${valDur}" required>
        <button type="button" class="btn btn-danger btn-sm btn-icon-only btn-remove-med" data-item-id="${itemId}" style="width: 24px; height: 24px;">
            <i data-lucide="minus"></i>
        </button>
    `;
    
    container.appendChild(div);
    lucide.createIcons();
    
    // Wire delete btn
    div.querySelector(".btn-remove-med").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-item-id");
        const element = document.getElementById(id);
        if (element) element.remove();
    });
}

function guardarConsultaClinica() {
    // Trigger validation
    const form = document.getElementById("form-consulta-activa");
    if (!form.reportValidity()) {
        return; // fails HTML5 validity check
    }
    
    const pRut = State.activePatientRut;
    const p = State.pacientes.find(pac => pac.rut === pRut);
    const mRut = document.getElementById("ca-medico").value;
    const m = State.medicos.find(med => med.rut === mRut);
    
    if (!m) {
        alert("Por favor seleccione el médico tratante.");
        return;
    }
    
    // Collect recipe if enabled
    const emitirReceta = document.getElementById("ca-emitir-receta").checked;
    let recetaData = { emitir: false };
    
    if (emitirReceta) {
        const medItems = document.querySelectorAll("#medication-list-items .medication-item");
        if (medItems.length === 0) {
            alert("Debe agregar al menos un medicamento a la receta.");
            return;
        }
        
        const meds = [];
        let validMeds = true;
        
        medItems.forEach(item => {
            const nombre = item.querySelector(".med-name").value.trim();
            const dosis = item.querySelector(".med-dose").value.trim();
            const frecuencia = item.querySelector(".med-freq").value.trim();
            const duracion = item.querySelector(".med-dur").value.trim();
            
            if (!nombre || !dosis || !frecuencia || !duracion) {
                validMeds = false;
            } else {
                meds.push({ nombre, dosis, frecuencia, duracion });
            }
        });
        
        if (!validMeds) {
            alert("Por favor rellene todos los campos de los medicamentos de la receta.");
            return;
        }
        
        recetaData = {
            emitir: true,
            validez: parseInt(document.getElementById("ca-receta-validez").value) || 30,
            medicamentos: meds
        };
    }
    
    const isEdit = !!State.activeConsultaId;
    const conId = isEdit ? State.activeConsultaId : `con-${Date.now()}`;
    
    const conData = {
        id: conId,
        pacienteRut: pRut,
        medicoRut: mRut,
        medicoNombre: obtenerNombreCompletoMedico(m),
        fecha: document.getElementById("ca-fecha").value,
        presion: document.getElementById("ca-presion").value.trim() || "N/A",
        temp: document.getElementById("ca-temp").value.trim() || "N/A",
        pulso: parseInt(document.getElementById("ca-pulso").value) || "N/A",
        peso: parseFloat(document.getElementById("ca-peso").value) || "N/A",
        anamnesis: document.getElementById("ca-anamnesis").value.trim(),
        examen: document.getElementById("ca-examen").value.trim() || "",
        diagnostico: document.getElementById("ca-diagnostico").value.trim(),
        cie10: document.getElementById("ca-cie10").value.trim() || "",
        indicaciones: document.getElementById("ca-indicaciones").value.trim(),
        receta: recetaData
    };
    
    if (isEdit) {
        const idx = State.consultas.findIndex(c => c.id === conId);
        if (idx > -1) {
            State.consultas[idx] = conData;
        }
        State.activeConsultaId = null;
    } else {
        // Save consultation
        State.consultas.push(conData);
    }
    State.save("consultas");
    
    if (!isEdit) {
        // Update appointment if active
        if (State.activeCitaId) {
            const cita = State.citas.find(c => c.id === State.activeCitaId);
            if (cita) {
                cita.estado = "Completada";
                State.save("citas");
            }
            State.activeCitaId = null;
        } else {
            // If registered directly, search if there was a pending appointment today for this patient/doctor and complete it
            const todayCitas = State.citas.filter(c => 
                c.pacienteRut === pRut && 
                c.medicoRut === mRut && 
                c.fecha === TODAY_STR && 
                (c.estado === "Pendiente" || c.estado === "En Consulta")
            );
            if (todayCitas.length > 0) {
                todayCitas[0].estado = "Completada";
                State.save("citas");
            }
        }
    }
    
    alert(isEdit ? "Registro clínico actualizado exitosamente." : "Consulta registrada exitosamente en el historial clínico.");
    
    // Refresh Dashboard stats
    setupDashboard();
    
    // View details
    mostrarPerfilPaciente(pRut);
    
    // If recipe was issued, open print layout automatically for convenient workflow
    if (emitirReceta) {
        abrirPrescripcionImprimible(conId);
    }
}

// 10. RECETA PRINT PREVIEW MODAL ACTIONS
function abrirPrescripcionImprimible(conId) {
    const con = State.consultas.find(c => c.id === conId);
    if (!con || !con.receta || !con.receta.emitir) return;
    
    const p = State.pacientes.find(pac => pac.rut === con.pacienteRut);
    const m = State.medicos.find(med => med.rut === con.medicoRut) || { nombre: con.medicoNombre, especialidad: "Medicina General" };
    
    // Populate Printable Modal elements
    const docNombre = obtenerNombreCompletoMedico(m);
    document.getElementById("print-doc-name").textContent = docNombre;
    document.getElementById("print-doc-specialty").textContent = m.especialidad;
    document.getElementById("print-signature-doc-name").textContent = docNombre;
    document.getElementById("print-signature-doc-spec").textContent = m.especialidad;
    
    document.getElementById("print-pac-name").textContent = obtenerNombreCompleto(p);
    document.getElementById("print-pac-rut").textContent = formatRut(p.rut);
    document.getElementById("print-pac-edad").textContent = `${calcularEdad(p.nacimiento)} años`;
    
    // Format issue date nicely
    const isoDateParts = con.fecha.split('T');
    const issueDate = formatFecha(isoDateParts[0]);
    document.getElementById("print-date-emision").textContent = issueDate;
    document.getElementById("print-date-validez").textContent = `${con.receta.validez} días`;
    
    // Medications Table body
    const tbody = document.getElementById("print-medication-list");
    tbody.innerHTML = "";
    con.receta.medicamentos.forEach(med => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${med.nombre}</strong></td>
            <td>Toma: ${med.dosis} - Frecuencia: ${med.frecuencia} - Duración: ${med.duracion}</td>
        `;
        tbody.appendChild(tr);
    });
    
    // Additional instructions
    const instructionsSection = document.getElementById("print-instructions-section");
    if (con.indicaciones) {
        instructionsSection.style.display = "block";
        document.getElementById("print-additional-instructions").textContent = con.indicaciones;
    } else {
        instructionsSection.style.display = "none";
    }
    
    // Open Modal
    document.getElementById("modal-receta-impresion").classList.add("open");
    lucide.createIcons();
}

function cerrarPrescripcionImprimible() {
    document.getElementById("modal-receta-impresion").classList.remove("open");
}
