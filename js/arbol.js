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
        poblarSelectoresCabezas();
        renderizarArbol(listaPersonas);
        renderizarColumnasSeleccionada();
        actualizarListaAdmin();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// Control de Pestañas
function cambiarPestana(pestana) {
    const btnArbol = document.getElementById("tab-arbol");
    const btnColumnas = document.getElementById("tab-columnas");
    const btnAdmin = document.getElementById("tab-admin");
    
    const vistaArbol = document.getElementById("vista-arbol");
    const vistaColumnas = document.getElementById("vista-columnas");
    const vistaAdmin = document.getElementById("vista-admin");

    btnArbol.classList.remove("active");
    if (btnColumnas) btnColumnas.classList.remove("active");
    btnAdmin.classList.remove("active");

    vistaArbol.classList.add("vista-oculta");
    if (vistaColumnas) vistaColumnas.classList.add("vista-oculta");
    vistaAdmin.classList.add("vista-oculta");

    if (pestana === 'arbol') {
        btnArbol.classList.add("active");
        vistaArbol.classList.remove("vista-oculta");
        renderizarArbol(listaPersonas);
    } else if (pestana === 'columnas') {
        if (btnColumnas) btnColumnas.classList.add("active");
        if (vistaColumnas) vistaColumnas.classList.remove("vista-oculta");
        renderizarColumnasSeleccionada();
    } else {
        btnAdmin.classList.add("active");
        vistaAdmin.classList.remove("vista-oculta");
        actualizarListaAdmin();
    }
}

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}

// Poblar selectores automáticos de Cabezas de Familia (Masculinos)
function poblarSelectoresCabezas() {
    const cabezas = listaPersonas.filter(p => p.sexo === 'M');
    
    const selectArbol = document.getElementById("select-cabeza-arbol");
    const selectColumna = document.getElementById("select-cabeza-columna");

    if (selectArbol) {
        selectArbol.innerHTML = '<option value="todos">-- Todos los Árboles (Cabezas de Familia) --</option>';
        cabezas.forEach(c => {
            selectArbol.innerHTML += `<option value="${c.nombre} ${c.apellido || ''}">${c.nombre} ${c.apellido || ''}</option>`;
        });
    }

    if (selectColumna) {
        selectColumna.innerHTML = '';
        cabezas.forEach(c => {
            selectColumna.innerHTML += `<option value="${c.nombre} ${c.apellido || ''}">${c.nombre} ${c.apellido || ''}</option>`;
        });
    }
}

// Renderizado del Árbol
function renderizarArbol(personasAMostrar) {
    const contenedor = document.getElementById("arbol-net");
    contenedor.innerHTML = "";

    const cabezaSeleccionada = document.getElementById("select-cabeza-arbol")?.value || "todos";

    let filtradas = personasAMostrar;
    if (cabezaSeleccionada !== "todos") {
        const cabezaObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === cabezaSeleccionada);
        if (cabezaObj) {
            // Incluir al cabeza y sus parejas e hijos relacionados
            const nombresRelacionados = [
                `${cabezaObj.nombre} ${cabezaObj.apellido || ''}`.trim(),
                ...(cabezaObj.parejas || []),
                ...(cabezaObj.hijos || [])
            ];
            filtradas = listaPersonas.filter(p => nombresRelacionados.includes(`${p.nombre} ${p.apellido || ''}`.trim()));
        }
    }

    if (filtradas.length === 0) {
        contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>No hay registros para este cabeza de familia.</p>";
        return;
    }

    const generaciones = {};
    filtradas.forEach(persona => {
        const gen = persona.generacion || 'Gen 1';
        if (!generaciones[gen]) generaciones[gen] = [];
        generaciones[gen].push(persona);
    });

    Object.keys(generaciones).sort().forEach(gen => {
        const filaDiv = document.createElement("div");
        filaDiv.className = "fila-generacion";

        generaciones[gen].forEach(persona => {
            const tarjeta = document.createElement("div");
            
            // Los hombres (M) no llevan color de rama (neutro). Solo las mujeres (F) llevan color.
            let claseRama = persona.sexo === 'M' ? 'rama-neutro' : `rama-${persona.ramaColor || 'neutro'}`;

            tarjeta.className = `tarjeta-familiar ${claseRama}`;

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

// Renderizado de la Vista en Columnas según el selector
function renderizarColumnasSeleccionada() {
    const contenedor = document.getElementById("columnas-net");
    const selectColumna = document.getElementById("select-cabeza-columna");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const cabezaNombre = selectColumna?.value;
    const cabeza = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === cabezaNombre && p.sexo === 'M');

    if (!cabeza || !cabeza.parejas || cabeza.parejas.length === 0) {
        contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>Selecciona un cabeza de familia válido con parejas registradas.</p>";
        return;
    }

    const bloque = document.createElement("div");
    bloque.className = "bloque-familia-col";

    let htmlParejas = `<div class="grid-parejas-hijos">`;

    cabeza.parejas.forEach(nombrePareja => {
        const parejaObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === nombrePareja);
        const hijosDePareja = parejaObj && parejaObj.hijos ? parejaObj.hijos : [];

        htmlParejas += `
            <div class="columna-pareja">
                <h4>❤️ ${nombrePareja}</h4>
                <div class="lista-hijos-columna">
                    ${hijosDePareja.length > 0 ? hijosDePareja.map(h => `<div class="hijo-item-col">• ${h}</div>`).join('') : '<span style="font-size:0.8rem; color:#777;">Sin hijos directos registrados</span>'}
                </div>
            </div>
        `;
    });

    htmlParejas += `</div>`;

    bloque.innerHTML = `
        <div class="cabeza-familia-titulo">🌳 Cabeza de Familia: ${cabeza.nombre} ${cabeza.apellido || ''}</div>
        ${htmlParejas}
    `;

    contenedor.appendChild(bloque);
}

// Arrastre del lienzo con el mouse
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
        actualizarColoresDisponibles();
    } else {
        bloqueColores.classList.add("oculto");
    }
}

// Validación para evitar duplicar colores de rama en mujeres
function actualizarColoresDisponibles(colorActualExcluir = "") {
    const selectColor = document.getElementById("inp-color-rama");
    if (!selectColor) return;

    // Colores ya ocupados por otras mujeres registradas
    const coloresOcupados = listaPersonas
        .filter(p => p.sexo === 'F' && p.ramaColor && p.ramaColor !== colorActualExcluir)
        .map(p => p.ramaColor);

    const opciones = selectColor.options;
    for (let i = 0; i < opciones.length; i++) {
        const val = opciones[i].value;
        if (coloresOcupados.includes(val)) {
            opciones[i].disabled = true;
            opciones[i].text = `${val.charAt(0).toUpperCase() + val.slice(1)} (Ocupado)`;
        } else {
            opciones[i].disabled = false;
            opciones[i].text = val.charAt(0).toUpperCase() + val.slice(1);
        }
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

    // Los hombres (M) no llevan color de rama
    let ramaColor = "neutro";
    if (sexo === 'F') {
        ramaColor = document.getElementById("inp-color-rama").value;
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
    poblarSelectoresCabezas();
    actualizarListaAdmin();
    renderizarArbol(listaPersonas);
    renderizarColumnasSeleccionada();
    alert("¡Familiar guardado con éxito! Recuerda hacer clic en 'Exportar JSON'.");
}

function actualizarListaAdmin() {
    const contenedorLista = document.getElementById("lista-admin-registros");
    document.getElementById("contador-registros").innerText = listaPersonas.length;
    contenedorLista.innerHTML = "";

    listaPersonas.forEach(p => {
        const fila = document.createElement("div");
        fila.className = "admin-item-row";
        fila.innerHTML = `
            <span><b>${p.nombre} ${p.apellido || ''}</b> (${p.generacion} - ${p.sexo}) [${p.nacionalidad || 'Sin país'}]</span>
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
        actualizarColoresDisponibles(p.ramaColor);
        document.getElementById("inp-color-rama").value = p.ramaColor || 'rojo';
    }
    document.getElementById("titulo-formulario").innerText = `Editando a: ${p.nombre} ${p.apellido || ''}`;
}

function eliminarFamiliar(id) {
    if (confirm("¿Estás seguro de eliminar a este familiar?")) {
        listaPersonas = listaPersonas.filter(p => p.id !== id);
        poblarSelectoresCabezas();
        actualizarListaAdmin();
        renderizarArbol(listaPersonas);
        renderizarColumnasSeleccionada();
    }
}

function limpiarFormulario() {
    document.getElementById("form-familiar").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("titulo-formulario").innerText = "Registrar / Editar Familiar";
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
