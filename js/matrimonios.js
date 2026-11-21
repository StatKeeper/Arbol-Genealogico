const MATRIMONIOS_CONFIRMADOS = [
    ["Kenneth John", "Janet Hick"],
    ["Jason Dubois", "Diana Payne"]
];

const PAREJAS_DESCENDENCIA = [
    // Aquí puede registrar parejas o uniones por descendencia, por ejemplo:
    // ["Moussa Diallo", "Gloria Cruz"],
    // ["Moussa Diallo", "Eyenga Bouba"]
];

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
function renderizarPestanaMatrimonios() {
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
