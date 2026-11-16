let listaPersonas = [];
let listaRamas = [];

const PALETA_COLORES = [
    { id: 'c1', num: 1, nombre: 'Rojo', borde: '#dc2626', fondo: 'rgba(220, 38, 38, 0.14)', texto: '#991b1b' },
    { id: 'c2', num: 2, nombre: 'Azul', borde: '#2563eb', fondo: 'rgba(37, 99, 235, 0.14)', texto: '#1e40af' },
    { id: 'c3', num: 3, nombre: 'Amarillo', borde: '#d97706', fondo: 'rgba(217, 119, 6, 0.16)', texto: '#92400e' },
    { id: 'c4', num: 4, nombre: 'Verde', borde: '#16a34a', fondo: 'rgba(22, 163, 74, 0.14)', texto: '#166534' },
    { id: 'c5', num: 5, nombre: 'Naranja', borde: '#ea580c', fondo: 'rgba(234, 88, 12, 0.14)', texto: '#9a3412' },
    { id: 'c6', num: 6, nombre: 'Morado', borde: '#9333ea', fondo: 'rgba(147, 51, 234, 0.14)', texto: '#6b21a8' },
    { id: 'c7', num: 7, nombre: 'Magenta', borde: '#db2777', fondo: 'rgba(219, 39, 119, 0.14)', texto: '#9d174d' },
    { id: 'c8', num: 8, nombre: 'Turquesa', borde: '#0d9488', fondo: 'rgba(13, 148, 136, 0.14)', texto: '#115e59' },
    { id: 'c9', num: 9, nombre: 'Marrón Tierra', borde: '#78350f', fondo: 'rgba(120, 53, 15, 0.14)', texto: '#451a03' },
    { id: 'c10', num: 10, nombre: 'Pizarra', borde: '#475569', fondo: 'rgba(71, 85, 105, 0.14)', texto: '#1e293b' },
    { id: 'c11', num: 11, nombre: 'Lima', borde: '#65a30d', fondo: 'rgba(101, 163, 13, 0.15)', texto: '#3f6212' },
    { id: 'c12', num: 12, nombre: 'Borgoña', borde: '#881337', fondo: 'rgba(136, 19, 55, 0.14)', texto: '#4c0519' }
];

document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
    configurarArrastreLienzo();
});

async function cargarDatos() {
    try {
        const guardadoLocal = localStorage.getItem('familia_datos_privados');
        if (guardadoLocal) {
            const datosLocales = JSON.parse(guardadoLocal);
            listaPersonas = datosLocales.personas || [];
            listaRamas = datosLocales.ramas || [];
            refrescarTodo();
            return;
        }

        const respuesta = await fetch('data/familia.json');
        const datos = await respuesta.json();
        listaPersonas = datos.personas || [];
        listaRamas = datos.ramas || [];

        guardarEnMemoriaLocal();
        refrescarTodo();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

function guardarEnMemoriaLocal() {
    const datosActuales = { personas: listaPersonas, ramas: listaRamas };
    localStorage.setItem('familia_datos_privados', JSON.stringify(datosActuales));
}

function refrescarTodo() {
    poblarSelectoresCabezas();
    poblarSelectoresRamas();
    poblarSelectoresParejasHijosAdmin();
    renderizarPaletaColores();
    renderizarListaRamasActivas();
    renderizarArbol(listaPersonas);
    renderizarColumnasSeleccionada();
    actualizarListaAdmin();
}

function cambiarPestana(pestana) {
    const tabs = ['arbol', 'columnas', 'ramas', 'admin'];
    tabs.forEach(t => {
        document.getElementById(`tab-${t}`)?.classList.remove("active");
        document.getElementById(`vista-${t}`)?.classList.add("vista-oculta");
    });

    document.getElementById(`tab-${pestana}`)?.classList.add("active");
    document.getElementById(`vista-${pestana}`)?.classList.remove("vista-oculta");

    if (pestana === 'arbol') renderizarArbol(listaPersonas);
    if (pestana === 'columnas') renderizarColumnasSeleccionada();
    if (pestana === 'ramas') {
        poblarSelectoresRamas();
        renderizarPaletaColores();
        renderizarListaRamasActivas();
    }
    if (pestana === 'admin') {
        poblarSelectoresParejasHijosAdmin();
    }
}

function calcularEdad(anioNacimiento) {
    return new Date().getFullYear() - anioNacimiento;
}

// Obtener bandera real según el país escrito
function obtenerBanderaPais(pais) {
    if (!pais) return '🌍';
    const p = pais.toLowerCase().trim();
    const mapBanderas = {
        'brasil': '🇧🇷',
        'brazil': '🇧🇷',
        'argentina': '🇦🇷',
        'alemania': '🇩🇪',
        'germany': '🇩🇪',
        'perú': '🇵🇪',
        'peru': '🇵🇪',
        'españa': '🇪🇸',
        'spain': '🇪🇸',
        'chile': '🇨🇱',
        'colombia': '🇨🇴',
        'méxico': '🇲🇽',
        'mexico': '🇲🇽',
        'estados unidos': '🇺🇸',
        'eeuu': '🇺🇸',
        'usa': '🇺🇸',
        'italia': '🇮🇹',
        'francia': '🇫🇷',
        'japón': '🇯🇵',
        'japon': '🇯🇵'
    };
    return mapBanderas[p] || '🌍';
}

function poblarSelectoresParejasHijosAdmin(parejasSeleccionadas = [], hijosSeleccionados = []) {
    const contenedorParejas = document.getElementById("contenedor-check-parejas");
    const contenedorHijos = document.getElementById("contenedor-check-hijos");
    if (!contenedorParejas || !contenedorHijos) return;

    contenedorParejas.innerHTML = "";
    contenedorHijos.innerHTML = "";

    const personasOrdenadas = [...listaPersonas].sort((a, b) => {
        const nombreA = `${a.nombre} ${a.apellido || ''}`.toLowerCase();
        const nombreB = `${b.nombre} ${b.apellido || ''}`.toLowerCase();
        return nombreA.localeCompare(nombreB);
    });

    if (personasOrdenadas.length === 0) {
        contenedorParejas.innerHTML = "<span style='font-size:0.8rem; color:#777; padding:4px;'>No hay familiares registrados aún.</span>";
        contenedorHijos.innerHTML = "<span style='font-size:0.8rem; color:#777; padding:4px;'>No hay familiares registrados aún.</span>";
        return;
    }

    personasOrdenadas.forEach(p => {
        const nombreCompleto = `${p.nombre} ${p.apellido || ''}`.trim();
        const idEditando = document.getElementById("edit-id").value;
        if (idEditando && p.id === idEditando) return;

        const isParejaChecked = parejasSeleccionadas.includes(nombreCompleto);
        const divP = document.createElement("label");
        divP.className = "checkbox-item-label";
        divP.innerHTML = `<input type="checkbox" name="check-pareja" value="${nombreCompleto}" ${isParejaChecked ? 'checked' : ''}> ${nombreCompleto} (${p.generacion} - ${p.sexo})`;
        contenedorParejas.appendChild(divP);

        const isHijoChecked = hijosSeleccionados.includes(nombreCompleto);
        const divH = document.createElement("label");
        divH.className = "checkbox-item-label";
        divH.innerHTML = `<input type="checkbox" name="check-hijo" value="${nombreCompleto}" ${isHijoChecked ? 'checked' : ''}> ${nombreCompleto} (${p.generacion} - ${p.sexo})`;
        contenedorHijos.appendChild(divH);
    });
}

function obtenerEstiloPersona(persona) {
    if (persona.sexo === 'M') {
        return { tipo: 'neutro', colorNombre: '#1d4ed8' }; // Azul para hombres
    }

    const nombreCompleto = `${persona.nombre} ${persona.apellido || ''}`.trim();
    const ramasDirectas = listaRamas.filter(r => r.mujer === nombreCompleto);
    
    const madreConRama = listaPersonas.find(p => p.sexo === 'F' && p.hijos && p.hijos.includes(nombreCompleto));
    let colorHeredadoObj = null;
    if (madreConRama) {
        const ramaMadre = listaRamas.find(r => r.mujer === `${madreConRama.nombre} ${madreConRama.apellido || ''}`.trim());
        if (ramaMadre) colorHeredadoObj = PALETA_COLORES.find(c => c.id === ramaMadre.colorId);
    }

    if (colorHeredadoObj && ramasDirectas.length > 0) {
        const nuevaRamaColorObj = PALETA_COLORES.find(c => c.id === ramasDirectas[0].colorId);
        if (nuevaRamaColorObj && colorHeredadoObj.id !== nuevaRamaColorObj.id) {
            return {
                tipo: '50-50',
                top: colorHeredadoObj,
                bottom: nuevaRamaColorObj,
                etiqueta: `Color ${colorHeredadoObj.num} / Color ${nuevaRamaColorObj.num}`,
                colorNombre: colorHeredadoObj.texto
            };
        }
    }

    if (ramasDirectas.length > 0) {
        const colObj = PALETA_COLORES.find(c => c.id === ramasDirectas[0].colorId);
        if (colObj) {
            return { tipo: 'unico', color: colObj, etiqueta: `Color ${colObj.num} - ${colObj.nombre}`, colorNombre: colObj.texto };
        }
    }

    if (colorHeredadoObj) {
        return { tipo: 'unico', color: colorHeredadoObj, etiqueta: `Heredado: Color ${colorHeredadoObj.num} - ${colorHeredadoObj.nombre}`, colorNombre: colorHeredadoObj.texto };
    }

    return { tipo: 'neutro', colorNombre: '#be185d' }; // Rosado/Fucsia por defecto para mujeres sin rama
}

function renderizarArbol(personasAMostrar) {
    const contenedor = document.getElementById("arbol-net");
    contenedor.innerHTML = "";

    const cabezaSeleccionada = document.getElementById("select-cabeza-arbol")?.value || "todos";
    let filtradas = personasAMostrar;

    if (cabezaSeleccionada !== "todos") {
        const cabezaObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === cabezaSeleccionada);
        if (cabezaObj) {
            const relacionados = new Set([
                `${cabezaObj.nombre} ${cabezaObj.apellido || ''}`.trim(),
                ...(cabezaObj.parejas || []),
                ...(cabezaObj.hijos || [])
            ]);
            listaPersonas.forEach(p => {
                if (cabezaObj.parejas && cabezaObj.parejas.includes(`${p.nombre} ${p.apellido || ''}`.trim())) {
                    (p.hijos || []).forEach(h => relacionados.add(h));
                }
            });
            filtradas = listaPersonas.filter(p => relacionados.has(`${p.nombre} ${p.apellido || ''}`.trim()));
        }
    }

    if (filtradas.length === 0) {
        contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>No hay registros para mostrar.</p>";
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
            const estiloInfo = obtenerEstiloPersona(persona);
            let estiloInline = "";
            let badgeHtml = "";

            if (estiloInfo.tipo === 'unico') {
                estiloInline = `border-color: ${estiloInfo.color.borde}; background-color: ${estiloInfo.color.fondo};`;
                badgeHtml = `<div class="badge-rama" style="color: ${estiloInfo.color.texto}; border-color: ${estiloInfo.color.borde};">● ${estiloInfo.etiqueta}</div>`;
            } else if (estiloInfo.tipo === '50-50') {
                tarjeta.classList.add("tarjeta-50-50");
                estiloInline = `--bg-top: ${estiloInfo.top.fondo}; --bg-bottom: ${estiloInfo.bottom.fondo}; --border-top: ${estiloInfo.top.borde}; --border-bottom: ${estiloInfo.bottom.borde};`;
                badgeHtml = `<div class="badge-rama">◐ ${estiloInfo.etiqueta} (50/50)</div>`;
            }

            tarjeta.className += " tarjeta-familiar";
            if (estiloInline) tarjeta.setAttribute("style", estiloInline);

            // Avatar con foto o iniciales
            let avatarContent = `${persona.nombre[0]}${persona.apellido ? persona.apellido[0] : ''}`;
            if (persona.foto && persona.foto.trim() !== "") {
                avatarContent = `<img src="${persona.foto}" alt="${persona.nombre}" onerror="this.parentElement.innerText='${avatarContent}'">`;
            }

            const bandera = obtenerBanderaPais(persona.nacionalidad);
            const edadAprox = calcularEdad(persona.anioNacimiento);

            tarjeta.innerHTML = `
                <div class="card-header">
                    <div class="avatar">${avatarContent}</div>
                    <div class="info-principal">
                        <h3>
                            <span class="nombre-persona" style="color: ${estiloInfo.colorNombre};">${persona.nombre}</span>
                            <span class="apellido-persona">${persona.apellido || ''}</span>
                        </h3>
                    </div>
                </div>
                ${badgeHtml}
                <div class="tags-gen">
                    <span class="tag">${persona.generacion}</span>
                    <span class="tag ${persona.sexo.toLowerCase()}">${persona.sexo}</span>
                    ${persona.nacionalidad ? `<span class="tag nacionalidad">${bandera} ${persona.nacionalidad}</span>` : ''}
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

function poblarSelectoresRamas() {
    const selHombre = document.getElementById("rama-select-hombre");
    const selMujer = document.getElementById("rama-select-mujer");
    if (!selHombre || !selMujer) return;

    selHombre.innerHTML = "";
    selMujer.innerHTML = "";

    listaPersonas.filter(p => p.sexo === 'M').forEach(h => {
        const nom = `${h.nombre} ${h.apellido || ''}`.trim();
        selHombre.innerHTML += `<option value="${nom}">${nom} (${h.generacion})</option>`;
    });

    listaPersonas.filter(p => p.sexo === 'F').forEach(m => {
        const nom = `${m.nombre} ${m.apellido || ''}`.trim();
        selMujer.innerHTML += `<option value="${nom}">${nom} (${m.generacion})</option>`;
    });
}

function renderizarPaletaColores() {
    const grid = document.getElementById("paleta-colores-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const coloresUsados = listaRamas.map(r => r.colorId);
    const seleccionadoActual = document.getElementById("rama-color-seleccionado").value;

    PALETA_COLORES.forEach(col => {
        const estaUsado = coloresUsados.includes(col.id);
        const swatch = document.createElement("div");
        swatch.className = `color-swatch ${estaUsado ? 'bloqueado' : ''} ${seleccionadoActual === col.id ? 'seleccionado' : ''}`;

        if (estaUsado) {
            swatch.innerHTML = `<span>🔒</span><span>Color ${col.num}</span><small>Usado</small>`;
        } else {
            swatch.style.backgroundColor = col.fondo;
            swatch.style.borderColor = col.borde;
            swatch.style.color = col.texto;
            swatch.innerHTML = `<span>Color ${col.num}</span><small>${col.nombre}</small>`;
            swatch.onclick = () => {
                document.getElementById("rama-color-seleccionado").value = col.id;
                renderizarPaletaColores();
            };
        }
        grid.appendChild(swatch);
    });
}

function crearAsignarRama() {
    const hombre = document.getElementById("rama-select-hombre").value;
    const mujer = document.getElementById("rama-select-mujer").value;
    const colorId = document.getElementById("rama-color-seleccionado").value;

    if (!hombre || !mujer) {
        alert("Debes tener registrado al menos un hombre y una mujer para crear una rama.");
        return;
    }
    if (!colorId) {
        alert("Por favor, selecciona un color disponible de la paleta.");
        return;
    }

    listaRamas = listaRamas.filter(r => !(r.hombre === hombre && r.mujer === mujer));
    listaRamas.push({ id: `rama_${Date.now()}`, hombre, mujer, colorId });

    document.getElementById("rama-color-seleccionado").value = "";
    guardarEnMemoriaLocal();
    refrescarTodo();
    alert(`¡Rama asignada correctamente!`);
}

function eliminarRama(id) {
    if (confirm("¿Deseas eliminar esta rama y liberar su color del candado?")) {
        listaRamas = listaRamas.filter(r => r.id !== id);
        guardarEnMemoriaLocal();
        refrescarTodo();
    }
}

function renderizarListaRamasActivas() {
    const contenedor = document.getElementById("lista-ramas-activas");
    document.getElementById("contador-ramas").innerText = listaRamas.length;
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (listaRamas.length === 0) {
        contenedor.innerHTML = "<p style='color:#666; font-size:0.85rem;'>No hay ramas con color asignado todavía.</p>";
        return;
    }

    listaRamas.forEach(r => {
        const colObj = PALETA_COLORES.find(c => c.id === r.colorId) || PALETA_COLORES[0];
        const row = document.createElement("div");
        row.className = "rama-item-row";
        row.style.backgroundColor = colObj.fondo;
        row.style.borderColor = colObj.borde;

        row.innerHTML = `
            <div>
                <strong style="color:${colObj.texto};">Color ${colObj.num} (${colObj.nombre})</strong><br>
                <span>👨 ${r.hombre} + 👩 <b>${r.mujer}</b></span>
            </div>
            <button class="btn-eliminar-item" onclick="eliminarRama('${r.id}')">Liberar Color</button>
        `;
        contenedor.appendChild(row);
    });
}

function poblarSelectoresCabezas() {
    const cabezas = listaPersonas.filter(p => p.sexo === 'M');
    const selectArbol = document.getElementById("select-cabeza-arbol");
    const selectColumna = document.getElementById("select-cabeza-columna");

    if (selectArbol) {
        const valPrevio = selectArbol.value;
        selectArbol.innerHTML = '<option value="todos">-- Todos los Árboles (Cabezas de Familia) --</option>';
        cabezas.forEach(c => {
            const nom = `${c.nombre} ${c.apellido || ''}`.trim();
            selectArbol.innerHTML += `<option value="${nom}">${nom}</option>`;
        });
        if (valPrevio) selectArbol.value = valPrevio;
    }

    if (selectColumna) {
        const valPrevioCol = selectColumna.value;
        selectColumna.innerHTML = '';
        cabezas.forEach(c => {
            const nom = `${c.nombre} ${c.apellido || ''}`.trim();
            selectColumna.innerHTML += `<option value="${nom}">${nom}</option>`;
        });
        if (valPrevioCol) selectColumna.value = valPrevioCol;
    }
}

function renderizarColumnasSeleccionada() {
    const contenedor = document.getElementById("columnas-net");
    const selectColumna = document.getElementById("select-cabeza-columna");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const cabezaNombre = selectColumna?.value;
    const cabeza = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === cabezaNombre && p.sexo === 'M');

    if (!cabeza || !cabeza.parejas || cabeza.parejas.length === 0) {
        contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>Selecciona un cabeza de familia con parejas registradas.</p>";
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
    bloque.innerHTML = `<div class="cabeza-familia-titulo">🌳 Cabeza de Familia: ${cabeza.nombre} ${cabeza.apellido || ''}</div>${htmlParejas}`;
    contenedor.appendChild(bloque);
}

function configurarArrastreLienzo() {
    const lienzo = document.getElementById("canvas-arbol");
    let estaArrastrando = false, inicioX, inicioY, scrollLeft, scrollTop;
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
        lienzo.scrollLeft = scrollLeft - (x - inicioX) * 1.5;
        lienzo.scrollTop = scrollTop - (y - inicioY) * 1.5;
    });
}

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

function guardarFamiliar(event) {
    event.preventDefault();
    const editId = document.getElementById("edit-id").value;
    const nombre = document.getElementById("inp-nombre").value.trim();
    const apellido = document.getElementById("inp-apellido").value.trim();
    const generacion = document.getElementById("inp-generacion").value;
    const sexo = document.getElementById("inp-sexo").value;
    const anioNacimiento = parseInt(document.getElementById("inp-anio").value);
    const nacionalidad = document.getElementById("inp-nacionalidad").value.trim();
    const foto = document.getElementById("inp-foto").value.trim();
    
    const parejas = Array.from(document.querySelectorAll('input[name="check-pareja"]:checked')).map(el => el.value);
    const hijos = Array.from(document.querySelectorAll('input[name="check-hijo"]:checked')).map(el => el.value);

    const id = editId ? editId : `${nombre.toLowerCase()}_${apellido.toLowerCase()}`.replace(/\s+/g, '_');
    const objetoFamiliar = { id, nombre, apellido, generacion, sexo, anioNacimiento, nacionalidad, foto, parejas, hijos };

    if (editId) {
        const index = listaPersonas.findIndex(p => p.id === editId);
        if (index !== -1) listaPersonas[index] = objetoFamiliar;
    } else {
        listaPersonas.push(objetoFamiliar);
    }

    limpiarFormulario();
    guardarEnMemoriaLocal();
    refrescarTodo();
    alert("¡Familiar guardado con éxito y respaldado en tu navegador!");
}

function actualizarListaAdmin() {
    const contenedorLista = document.getElementById("lista-admin-registros");
    document.getElementById("contador-registros").innerText = listaPersonas.length;
    contenedorLista.innerHTML = "";

    const personasOrdenadasAdmin = [...listaPersonas].sort((a, b) => {
        const nA = `${a.nombre} ${a.apellido || ''}`.toLowerCase();
        const nB = `${b.nombre} ${b.apellido || ''}`.toLowerCase();
        return nA.localeCompare(nB);
    });

    personasOrdenadasAdmin.forEach(p => {
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
    document.getElementById("inp-foto").value = p.foto || '';
    
    poblarSelectoresParejasHijosAdmin(p.parejas || [], p.hijos || []);
    document.getElementById("titulo-formulario").innerText = `Editando a: ${p.nombre} ${p.apellido || ''}`;
}

function eliminarFamiliar(id) {
    if (confirm("¿Estás seguro de eliminar a este familiar?")) {
        listaPersonas = listaPersonas.filter(p => p.id !== id);
        guardarEnMemoriaLocal();
        refrescarTodo();
    }
}

function limpiarFormulario() {
    document.getElementById("form-familiar").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("titulo-formulario").innerText = "Registrar / Editar Familiar";
    poblarSelectoresParejasHijosAdmin();
}

function exportarJSON() {
    const datosFinales = { personas: listaPersonas, ramas: listaRamas };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datosFinales, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "familia.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}
