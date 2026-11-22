const STORAGE_MATRIMONIOS_KEY = "michidm_matrimonios_confirmados_v1";
const STORAGE_DESCENDENCIA_KEY = "michidm_parejas_descendencia_v1";

const MATRIMONIOS_BASE = [
    ["Kenneth John", "Janet Hick"],
    ["Jason Dubois", "Diana Payne"]
];

const DESCENDENCIA_BASE = [
    // Aquí puede registrar parejas o uniones por descendencia, por ejemplo:
    // ["Moussa Diallo", "Gloria Cruz"],
    // ["Moussa Diallo", "Eyenga Bouba"]
];

function cargarListaGuardada(clave, respaldo) {
    try {
        const raw = localStorage.getItem(clave);
        if (!raw) return respaldo.map(par => [...par]);
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
    } catch (e) {
        console.warn("No se pudo leer almacenamiento local:", e);
    }
    return respaldo.map(par => [...par]);
}

function guardarListaLocal(clave, lista) {
    try {
        localStorage.setItem(clave, JSON.stringify(lista));
    } catch (e) {
        console.warn("No se pudo guardar en almacenamiento local:", e);
    }
}

const MATRIMONIOS_CONFIRMADOS = cargarListaGuardada(STORAGE_MATRIMONIOS_KEY, MATRIMONIOS_BASE);
const PAREJAS_DESCENDENCIA = cargarListaGuardada(STORAGE_DESCENDENCIA_KEY, DESCENDENCIA_BASE);

function mismoPar(a1, a2, b1, b2) {
    const x1 = (a1 || "").trim();
    const x2 = (a2 || "").trim();
    const y1 = (b1 || "").trim();
    const y2 = (b2 || "").trim();
    return (x1 === y1 && x2 === y2) || (x1 === y2 && x2 === y1);
}

function obtenerIconoPareja(nombreActual, nombrePareja) {
    const esMatrimonio = MATRIMONIOS_CONFIRMADOS.some(([m1, m2]) =>
        mismoPar(nombreActual, nombrePareja, m1, m2)
    );
    if (esMatrimonio) {
        return '<span style="color: #d4af37;">💍</span>';
    }
    return '❤';
}

function obtenerNombreCompletoPersona(persona) {
    if (!persona) return "";
    const nombre = (persona.nombre || "").trim();
    const apellido = (persona.apellido || "").trim();
    return `${nombre} ${apellido}`.trim();
}

function poblarSelectoresMatrimonios() {
    const sel1 = document.getElementById("sel-pareja-1");
    const sel2 = document.getElementById("sel-pareja-2");
    if (!sel1 || !sel2) return;

    const origen = Array.isArray(window.listaPersonas)
        ? window.listaPersonas
        : (typeof listaPersonas !== "undefined" && Array.isArray(listaPersonas) ? listaPersonas : []);

    const nombresUnicos = Array.from(
        new Set(
            origen
                .map(p => obtenerNombreCompletoPersona(p))
                .filter(Boolean)
        )
    ).sort((a, b) => a.localeCompare(b, "es"));

    const opcionVacia = '<option value="">-- Seleccione una persona --</option>';
    const opciones = nombresUnicos.map(nombre => `<option value="${nombre}">${nombre}</option>`).join("");

    const prev1 = sel1.value;
    const prev2 = sel2.value;

    sel1.innerHTML = opcionVacia + opciones;
    sel2.innerHTML = opcionVacia + opciones;

    if (nombresUnicos.includes(prev1)) sel1.value = prev1;
    if (nombresUnicos.includes(prev2)) sel2.value = prev2;
}

function registrarParejaDesdeUI() {
    const sel1 = document.getElementById("sel-pareja-1");
    const sel2 = document.getElementById("sel-pareja-2");
    const selTipo = document.getElementById("sel-tipo-union");

    const p1 = (sel1?.value || "").trim();
    const p2 = (sel2?.value || "").trim();
    const tipo = selTipo?.value || "matrimonio";

    if (!p1 || !p2) {
        alert("Por favor, seleccione ambas personas para registrar la unión.");
        return;
    }

    if (p1 === p2) {
        alert("Debe seleccionar dos personas distintas.");
        return;
    }

    const destino = tipo === "descendencia" ? PAREJAS_DESCENDENCIA : MATRIMONIOS_CONFIRMADOS;
    const claveStorage = tipo === "descendencia" ? STORAGE_DESCENDENCIA_KEY : STORAGE_MATRIMONIOS_KEY;

    const yaExiste = destino.some(([a, b]) => mismoPar(p1, p2, a, b));
    if (yaExiste) {
        alert("Esa pareja ya se encuentra registrada en esta categoría.");
        return;
    }

    destino.push([p1, p2]);
    guardarListaLocal(claveStorage, destino);

    if (sel1) sel1.value = "";
    if (sel2) sel2.value = "";

    renderizarPestanaMatrimonios();
}

function renderizarPestanaMatrimonios() {
    poblarSelectoresMatrimonios();

    const contMatrimonios = document.getElementById("lista-matrimonios-vista");
    const contDescendencia = document.getElementById("lista-parejas-descendencia-vista");

    if (contMatrimonios) {
        if (!MATRIMONIOS_CONFIRMADOS.length) {
            contMatrimonios.innerHTML = '<p style="color:#666;">No hay matrimonios confirmados registrados.</p>';
        } else {
            contMatrimonios.innerHTML = MATRIMONIOS_CONFIRMADOS.map(([p1, p2]) =>
                `<div class="rama-item"><span style="color:#d4af37;">💍</span> <strong>${p1}</strong> &amp; <strong>${p2}</strong></div>`
            ).join("");
        }
    }

    if (contDescendencia) {
        if (!PAREJAS_DESCENDENCIA.length) {
            contDescendencia.innerHTML = '<p style="color:#666;">No hay parejas por descendencia registradas.</p>';
        } else {
            contDescendencia.innerHTML = PAREJAS_DESCENDENCIA.map(([p1, p2]) =>
                `<div class="rama-item">❤ <strong>${p1}</strong> &amp; <strong>${p2}</strong></div>`
            ).join("");
        }
    }
}
