document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
});

async function cargarDatos() {
    try {
        const respuesta = await fetch('data/familia.json');
        const datos = await respuesta.json();
        renderizarArbol(datos.personas);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

function calcularEdad(anioNacimiento) {
    return new Date().getFullYear() - anioNacimiento;
}

function renderizarArbol(personas) {
    const contenedor = document.getElementById("arbol-net");
    contenedor.innerHTML = "";

    personas.forEach(persona => {
        const tarjeta = document.createElement("div");
        
        let estiloExtra = "";
        let claseRama = `rama-${persona.ramaColor || 'neutro'}`;
        
        if (persona.ramaColor === '50-50') {
            claseRama = 'rama-50-50';
            estiloExtra = `style="--color-1: ${persona.color1}; --color-2: ${persona.color2}; --bg-1: ${persona.bg1}; --bg-2: ${persona.bg2};"`;
        }

        tarjeta.className = `tarjeta-familiar ${claseRama}`;
        if (estiloExtra) tarjeta.setAttribute("style", estiloExtra);

        const iniciales = `${persona.nombre[0]}${persona.apellido ? persona.apellido[0] : ''}`;
        const edadAprox = calcularEdad(persona.anioNacimiento);

        tarjeta.innerHTML = `
            <div class="card-header">
                <div class="avatar">${iniciales}</div>
                <div class="info-principal">
                    <h3>${persona.nombre}</h3>
                    <p>${persona.apellido || ''}</p>
                </div>
            </div>
            <div class="tags-gen">
                <span class="tag">${persona.generacion}</span>
                <span class="tag ${persona.sexo.toLowerCase()}">${persona.sexo}</span>
            </div>
            <div class="edad-aprox">Edad aprox.: ${edadAprox} años</div>
            <div class="seccion-parejas">
                <h4>Pareja(s):</h4>
                <ul class="lista-nombres">
                    ${persona.parejas?.length ? persona.parejas.map(p => `<li>❤️ ${p}</li>`).join('') : '<li>Sin pareja</li>'}
                </ul>
            </div>
            <div class="seccion-hijos">
                <h4>Descendientes (${persona.hijos?.length || 0}):</h4>
                <ul class="lista-nombres">
                    ${persona.hijos?.length ? persona.hijos.map(h => `<li>• ${h}</li>`).join('') : '<li>Sin hijos</li>'}
                </ul>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}
