let listaPersonas = [];

document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
    configurarArrastreLienzo();
});

async function cargarDatos() {
    try {
        const respuesta = await fetch('data/familia.json');
        const datos = await respuesta.json();
        listaPersonas = datos.personas || [];
        renderizarArbol(listaPersonas);
        actualizarListaAdmin();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// Control de Pestañas
function cambiarPestana(pestana) {
    const btnArbol = document.getElementById("tab-arbol");
    const btnAdmin = document.getElementById("tab-admin");
    const vistaArbol = document.getElementById("vista-arbol");
    const vistaAdmin = document.getElementById("vista-admin");

    if (pestana === 'arbol') {
        btnArbol.classList.add("active");
        btnAdmin.classList.remove("active");
        vistaArbol.classList.remove("vista-oculta");
        vistaAdmin.classList.add("vista-oculta");
        renderizarArbol(listaPersonas);
    } else {
        btnAdmin.classList.add("active");
        btnArbol.classList.remove("active");
        vistaAdmin.classList.remove("vista-oculta");
        vistaArbol.classList.add("vista-oculta");
        actualizarListaAdmin();
    }
}

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}

// Renderizado del Árbol estructurado por Filas (Gen 1 arriba, Gen 2 abajo)
function renderizarArbol(personas) {
    const contenedor = document.getElementById("arbol-net");
    contenedor.innerHTML = "";

    if (personas.length === 0) {
        contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>No hay registros en el árbol todavía. Usa la pestaña 'Administrar / Agregar' para crear uno.</p>";
        return;
    }

    // Agrupar por generación
    const generaciones = {};
    personas.forEach(persona => {
        const gen = persona.generacion || 'Gen 1';
        if (!generaciones[gen]) generaciones[gen] = [];
        generaciones[gen].push(persona);
    });

    Object.keys(generaciones).sort().forEach(gen => {
        const filaDiv = document.createElement("div");
        filaDiv.className = "fila-generacion";

        generaciones[gen].forEach(persona => {
            const tarjeta = document.createElement("div");
            
            let claseRama = `rama-${persona.ramaColor || 'neutro'}`;
            let estiloExtra = "";

            if (persona.ramaColor === '50-50') {
                claseRama = 'rama-50-50';
                const col1 = obtenerColorHex(persona.color1 || 'azul');
                const col2 = obtenerColorHex(persona.color2 || 'rojo');
                estiloExtra = `style="--color-1: ${col1}; --color-2: ${col2}; --bg-1: ${col1}15; --bg-2: ${col2}15;"`;
            }

            tarjeta.className = `tarjeta-familiar ${claseRama}`;
            if (estiloExtra) tarjeta.setAttribute("style", estiloExtra);

            const iniciales = `${persona.nombre[0]}${persona.apellido ? persona.apellido[0] : ''}`;
            const edadAprox = calcularEdad(persona.anioNacimiento);

            // Tarjeta limpia sin texto interno de descendientes (ahora son tarjetas independientes abajo)
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
                    ${persona.nacionalidad ? `<span class="tag nacionalidad">🌍 ${persona.nacionalidad}</span>` : ''}
                </div>
                <div class="edad-aprox">Edad aprox.: ${edadAprox} años</div>
                <div class="seccion-parejas">
                    <h4>Pareja(s):</h4>
                    <ul class="lista-nombres">
                        ${persona.parejas?.length ? persona.parejas.map(p => `<li>❤️ ${p}</li>`).join('') : '<li>Sin pareja registrada</li>'}
                    </ul>
                </div>
            `;
            filaDiv.appendChild(tarjeta);
        });

        contenedor.appendChild(filaDiv);
    });
}

function obtenerColorHex(nombreColor) {
    const colores = {
        'rojo': '#dc2626',
        'azul': '#2563eb',
        'amarillo': '#d97706',
        'verde': '#16a34a',
        'morado': '#9333ea'
    };
    return colores[nombreColor] || '#2563eb';
}

// Habilitar arrastre del lienzo con el mouse
function configurarArrastreLienzo() {
    const lienzo = document.getElementById("canvas-arbol");
    let estaArrastrando = false;
    let inicioX, inicioY, scrollLeft, scrollTop;

    if (!lienzo) return;

    lienzo.addEventListener("mousedown", (e) => {
        estaArrastrando = true;
        inicioX = e.pageX - lienzo.offsetLeft;
        inicioY = e.pageY - lienzo.offsetTop;
        scrollLeft = lienzo.scrollLeft;
        scrollTop = lienzo.scrollTop;
    });

    lienzo.addEventListener("mouseleave", () => { estaArrastrando = false; });
    lienzo.addEventListener("mouseup", () => { estaArrastrando = false; });

    lienzo.addEventListener("mousemove", (e) => {
        if (!estaArrastrando) return;
        e.preventDefault();
        const x = e.pageX - lienzo.offsetLeft;
        const y = e.pageY - lienzo.offsetTop;
        const walkX = (x - inicioX) * 1.5;
        const walkY = (y - inicioY) * 1.5;
        lienzo.scrollLeft = scrollLeft - walkX;
        lienzo.scrollTop = scrollTop - walkY;
    });
}

// Filtros
function filtrarTarjetas() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const genFiltro = document.getElementById("filtro-generacion").value;

    const filtrados = listaPersonas.filter(p => {
        const coincideTexto = `${p.nombre} ${p.apellido} ${p.nacionalidad || ''}`.toLowerCase().includes(texto);
        const coincideGen = genFiltro === 'todas' || p.generacion === genFiltro;
        return coincideTexto && coincideGen;
    });

    renderizarArbol(filtrados);
}

// Panel Administrador
function toggleColoresRama() {
    const sexo = document.getElementById("inp-sexo").value;
    const bloqueColores = document.getElementById("bloque-colores");
    if (sexo === 'F') {
        bloqueColores.classList.remove("oculto");
    } else {
        bloqueColores.classList.add("oculto");
    }
}

function guardarFamiliar(event) {
    event.preventDefault();
    const editId = document.getElementById("edit-id").value;
    
    const nombre = document.getElementById("inp-nombre").value.trim();
    const apellido = document.getElementById("inp-apellido").value.trim();
    const generacion = document.getElementById("inp-generacion").value;
    const sexo = document.getElementById("inp-sexo").value;
    const anioNacimiento = parseInt(document.getElementById("inp-anio").value);
    const nacionalidad = document.getElementById("inp-nacionalidad").value.trim();
    
    const parejasStr = document.getElementById("inp-parejas").value;
    const hijosStr = document.getElementById("inp-hijos").value;
    
    const parejas = parejasStr ? parejasStr.split(',').map(s => s.trim()).filter(Boolean) : [];
    const hijos = hijosStr ? hijosStr.split(',').map(s => s.trim()).filter(Boolean) : [];

    let ramaColor = "neutro";
    let color1 = "";
    let color2 = "";

    if (sexo === 'F') {
        ramaColor = document.getElementById("inp-color-1").value;
    }

    const id = editId ? editId : `${nombre.toLowerCase()}_${apellido.toLowerCase()}`.replace(/\s+/g, '_');

    const objetoFamiliar = {
        id,
        nombre,
        apellido,
        generacion,
        sexo,
        anioNacimiento,
        nacionalidad,
        ramaColor,
        color1,
        color2,
        parejas,
        hijos
    };

    if (editId) {
        const index = listaPersonas.findIndex(p => p.id === editId);
        if (index !== -1) listaPersonas[index] = objetoFamiliar;
    } else {
        listaPersonas.push(objetoFamiliar);
    }

    limpiarFormulario();
    actualizarListaAdmin();
    alert("¡Familiar guardado con éxito! No olvides hacer clic en 'Exportar JSON'.");
}

function actualizarListaAdmin() {
    const contenedorLista = document.getElementById("lista-admin-registros");
    document.getElementById("contador-registros").innerText = listaPersonas.length;
    contenedorLista.innerHTML = "";

    listaPersonas.forEach(p => {
        const fila = document.createElement("div");
        fila.className = "admin-item-row";
        fila.innerHTML = `
            <span><b>${p.nombre} ${p.apellido || ''}</b> (${p.generacion} - ${p.sexo}) [${p.nacionalidad || 'Sin nacionalidad'}]</span>
            <div class="admin-item-botones">
                <button class="btn-editar-item" onclick="cargarParaEditar('${p.id}')">Editar</button>
                <button class="btn-eliminar-item" onclick="eliminarFamiliar('${p.id}')">Eliminar</button>
            </div>
        `;
        contenedorLista.appendChild(fila);
    });
}

function cargarParaEditar(id) {
    const p = listaPersonas.find(item => item.id === id);
    if (!p) return;

    cambiarPestana('admin');
    document.getElementById("edit-id").value = p.id;
    document.getElementById("inp-nombre").value = p.nombre;
    document.getElementById("inp-apellido").value = p.apellido || '';
    document.getElementById("inp-generacion").value = p.generacion;
    document.getElementById("inp-sexo").value = p.sexo;
    document.getElementById("inp-anio").value = p.anioNacimiento;
    document.getElementById("inp-nacionalidad").value = p.nacionalidad || '';
    
    document.getElementById("inp-parejas").value = p.parejas ? p.parejas.join(', ') : '';
    document.getElementById("inp-hijos").value = p.hijos ? p.hijos.join(', ') : '';

    toggleColoresRama();
    if (p.sexo === 'F') {
        document.getElementById("inp-color-1").value = p.ramaColor || 'rojo';
    }
}

function eliminarFamiliar(id) {
    if (confirm("¿Estás seguro de eliminar a este familiar?")) {
        listaPersonas = listaPersonas.filter(p => p.id !== id);
        actualizarListaAdmin();
        renderizarArbol(listaPersonas);
    }
}

function limpiarFormulario() {
    document.getElementById("form-familiar").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("bloque-colores").classList.add("oculto");
}

function exportarJSON() {
    const datosFinales = { personas: listaPersonas };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datosFinales, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "familia.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}
