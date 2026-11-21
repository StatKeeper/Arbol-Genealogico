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
