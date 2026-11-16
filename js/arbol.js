let listaPersonas = [];
let listaRamas = [];

const PALETA_COLORES = [
    { id: 'c1', num: 1, nombre: 'Rojo', borde: '#dc2626', fondo: '#fee2e2', texto: '#991b1b', tipo: 'sólido' },
    { id: 'c2', num: 2, nombre: 'Azul', borde: '#2563eb', fondo: '#dbeafe', texto: '#1e40af', tipo: 'sólido' },
    { id: 'c3', num: 3, nombre: 'Amarillo', borde: '#d97706', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c4', num: 4, nombre: 'Verde', borde: '#16a34a', fondo: '#dcfce7', texto: '#166534', tipo: 'sólido' },
    { id: 'c5', num: 5, nombre: 'Naranja', borde: '#ea580c', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c6', num: 6, nombre: 'Morado', borde: '#9333ea', fondo: '#f3e8ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c7', num: 7, nombre: 'Magenta', borde: '#db2777', fondo: '#fce7f3', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c8', num: 8, nombre: 'Turquesa', borde: '#0d9488', fondo: '#ccfbf1', texto: '#115e59', tipo: 'sólido' },
    { id: 'c9', num: 9, nombre: 'Marrón Tierra', borde: '#78350f', fondo: '#fef3c7', texto: '#451a03', tipo: 'sólido' },
    { id: 'c10', num: 10, nombre: 'Pizarra', borde: '#475569', fondo: '#f1f5f9', texto: '#1e293b', tipo: 'sólido' },
    { id: 'c11', num: 11, nombre: 'Lima', borde: '#65a30d', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c12', num: 12, nombre: 'Borgoña', borde: '#881337', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c13', num: 13, nombre: 'Rosa Coral', borde: '#e11d48', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c14', num: 14, nombre: 'Cian Profundo', borde: '#0284c7', fondo: '#e0f2fe', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c15', num: 15, nombre: 'Ámbar Claro', borde: '#ca8a04', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c16', num: 16, nombre: 'Esmeralda', borde: '#059669', fondo: '#d1fae5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c17', num: 17, nombre: 'Teja', borde: '#c2410c', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c18', num: 18, nombre: 'Violeta', borde: '#7c3aed', fondo: '#ede9fe', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c19', num: 19, nombre: 'Rosa Fucsia', borde: '#c026d3', fondo: '#fae8ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c20', num: 20, nombre: 'Azul Acero', borde: '#2563eb', fondo: '#dbeafe', texto: '#1d4ed8', tipo: 'sólido' },
    { id: 'c21', num: 21, nombre: 'Chocolate', borde: '#57534e', fondo: '#e7e5e4', texto: '#292524', tipo: 'sólido' },
    { id: 'c22', num: 22, nombre: 'Índigo', borde: '#4f46e5', fondo: '#e0e7ff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c23', num: 23, nombre: 'Oliva', borde: '#4d7c0f', fondo: '#ecfccb', texto: '#365314', tipo: 'sólido' },
    { id: 'c24', num: 24, nombre: 'Frambuesa', borde: '#9f1239', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c25', num: 25, nombre: 'Rayas Rojo/Azul', borde: '#1e3a8a', fondo: 'repeating-linear-gradient(45deg, #fee2e2, #fee2e2 10px, #dbeafe 10px, #dbeafe 20px)', texto: '#1e3a8a', tipo: 'patron' },
    { id: 'c26', num: 26, nombre: 'Rayas Verde/Oro', borde: '#166534', fondo: 'repeating-linear-gradient(45deg, #dcfce7, #dcfce7 10px, #fef3c7 10px, #fef3c7 20px)', texto: '#166534', tipo: 'patron' },
    { id: 'c27', num: 27, nombre: 'Rayas Morado/Rosa', borde: '#6b21a8', fondo: 'repeating-linear-gradient(45deg, #f3e8ff, #f3e8ff 10px, #fce7f3 10px, #fce7f3 20px)', texto: '#6b21a8', tipo: 'patron' },
    { id: 'c28', num: 28, nombre: 'Rayas Naranja/Teal', borde: '#9a3412', fondo: 'repeating-linear-gradient(45deg, #ffedd5, #ffedd5 10px, #ccfbf1 10px, #ccfbf1 20px)', texto: '#9a3412', tipo: 'patron' },
    { id: 'c29', num: 29, nombre: 'Rayas Pizarra/Lima', borde: '#1e293b', fondo: 'repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 10px, #ecfccb 10px, #ecfccb 20px)', texto: '#1e293b', tipo: 'patron' },
    { id: 'c30', num: 30, nombre: 'Rayas Borgoña/Cyan', borde: '#4c0519', fondo: 'repeating-linear-gradient(45deg, #ffe4e6, #ffe4e6 10px, #e0f2fe 10px, #e0f2fe 20px)', texto: '#4c0519', tipo: 'patron' },
    { id: 'c31', num: 31, nombre: 'Líneas Horizontales Azul', borde: '#1d4ed8', fondo: 'repeating-linear-gradient(0deg, #dbeafe, #dbeafe 8px, #ffffff 8px, #ffffff 16px)', texto: '#1e40af', tipo: 'patron' },
    { id: 'c32', num: 32, nombre: 'Líneas Horizontales Rojo', borde: '#b91c1c', fondo: 'repeating-linear-gradient(0deg, #fee2e2, #fee2e2 8px, #ffffff 8px, #ffffff 16px)', texto: '#991b1b', tipo: 'patron' },
    { id: 'c33', num: 33, nombre: 'Líneas Verticales Verde', borde: '#15803d', fondo: 'repeating-linear-gradient(90deg, #dcfce7, #dcfce7 8px, #ffffff 8px, #ffffff 16px)', texto: '#166534', tipo: 'patron' },
    { id: 'c34', num: 34, nombre: 'Líneas Verticales Oro', borde: '#b45309', fondo: 'repeating-linear-gradient(90deg, #fef3c7, #fef3c7 8px, #ffffff 8px, #ffffff 16px)', texto: '#92400e', tipo: 'patron' },
    { id: 'c35', num: 35, nombre: 'Líneas Verticales Morado', borde: '#7e22ce', fondo: 'repeating-linear-gradient(90deg, #f3e8ff, #f3e8ff 8px, #ffffff 8px, #ffffff 16px)', texto: '#6b21a8', tipo: 'patron' },
    { id: 'c36', num: 36, nombre: 'Líneas Verticales Marrón', borde: '#78350f', fondo: 'repeating-linear-gradient(90deg, #fef3c7, #fef3c7 8px, #ffffff 8px, #ffffff 16px)', texto: '#451a03', tipo: 'patron' }
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
        if (!respuesta.ok) throw new Error("No se pudo cargar familia.json");
        const datos = await respuesta.json();
        listaPersonas = datos.personas || [];
        listaRamas = datos.ramas || [];

        guardarEnMemoriaLocal();
        refrescarTodo();
    } catch (error) {
        console.warn("Aviso al cargar datos externos, inicializando vacío:", error);
        listaPersonas = [];
        listaRamas = [];
        refrescarTodo();
    }
}

function guardarEnMemoriaLocal() {
    try {
        const datosActuales = { personas: listaPersonas, ramas: listaRamas };
        localStorage.setItem('familia_datos_privados', JSON.stringify(datosActuales));
    } catch (e) {
        console.error("Error al guardar en memoria local:", e);
    }
}

function refrescarTodo() {
    try {
        poblarSelectoresCabezas();
        poblarSelectoresRamas();
        if (typeof poblarSelectoresParejasHijosAdmin === 'function') {
            poblarSelectoresParejasHijosAdmin();
        }
        renderizarPaletaColores();
        renderizarListaRamasActivas();
        renderizarArbol(listaPersonas);
        renderizarColumnasSeleccionada();
        actualizarListaAdmin();
    } catch (e) {
        console.error("Error al refrescar la interfaz:", e);
    }
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
        if (typeof poblarSelectoresParejasHijosAdmin === 'function') {
            poblarSelectoresParejasHijosAdmin();
        }
    }
}

function calcularEdad(anioNacimiento) {
    if (!anioNacimiento) return 0;
    return new Date().getFullYear() - anioNacimiento;
}

function obtenerCodigoISO(pais) {
    if (!pais) return null;
    const limpio = pais.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const codigos = {
        'argentina': 'ar', 'bolivia': 'bo', 'brasil': 'br', 'canada': 'ca',
        'chile': 'cl', 'colombia': 'co', 'costa rica': 'cr', 'cuba': 'cu',
        'ecuador': 'ec', 'el salvador': 'sv', 'estados unidos': 'us', 'usa': 'us',
        'guatemala': 'gt', 'honduras': 'hn', 'mexico': 'mx', 'nicaragua': 'ni',
        'panama': 'pa', 'paraguay': 'py', 'peru': 'pe', 'puerto rico': 'pr',
        'republica dominicana': 'do', 'uruguay': 'uy', 'venezuela': 've',
        'alemania': 'de', 'espana': 'es', 'francia': 'fr', 'italia': 'it',
        'reino unido': 'gb', 'uk': 'gb', 'portugal': 'pt', 'suiza': 'ch'
    };
    return codigos[limpio] || null;
}

function obtenerInfoBanderasYTexto(persona) {
    const paisPropio = (persona.nacionalidad || '').trim();
    if (paisPropio !== '') {
        const iso = obtenerCodigoISO(paisPropio);
        const htmlBanderas = iso 
            ? `<div class="banderas-contenedor-der"><img src="https://flagcdn.com/w40/${iso}.png" alt="${paisPropio}" title="${paisPropio}" class="bandera-header"></div>` 
            : '';
        return { htmlBanderas, textoTag: paisPropio };
    }
    return { htmlBanderas: '', textoTag: '' };
}

function obtenerObjetoColorPorIdOPersonalizado(colorId) {
    if (colorId && colorId.startsWith('#')) {
        return {
            id: colorId,
            num: 'Custom',
            nombre: 'Personalizado',
            borde: colorId,
            fondo: colorId + '25',
            texto: '#111827',
            tipo: 'sólido'
        };
    }
    return PALETA_COLORES.find(c => c.id === colorId) || null;
}

function obtenerEstiloPersona(persona) {
    const nombreCompleto = `${persona.nombre} ${persona.apellido || ''}`.trim();
    const ramasDirectas = listaRamas.filter(r => r.mujer === nombreCompleto || r.hombre === nombreCompleto);
    let colorPropioObj = null;
    if (ramasDirectas.length > 0) {
        colorPropioObj = obtenerObjetoColorPorIdOPersonalizado(ramasDirectas[0].colorId);
    }

    if (colorPropioObj) {
        return { tipo: 'unico', color: colorPropioObj, etiqueta: `Color ${colorPropioObj.num} - ${colorPropioObj.nombre}`, colorNombre: colorPropioObj.texto };
    }

    if (persona.sexo === 'M') {
        return { tipo: 'neutro', colorNombre: '#1d4ed8' };
    }
    return { tipo: 'neutro', colorNombre: '#be185d' };
}

function crearElementoTarjeta(persona) {
    const tarjeta = document.createElement("div");
    const estiloInfo = obtenerEstiloPersona(persona);
    let estiloInline = "";
    let badgeHtml = "";

    if (estiloInfo.tipo === 'unico') {
        estiloInline = `border-color: ${estiloInfo.color.borde}; background: ${estiloInfo.color.fondo};`;
        badgeHtml = `<div class="badge-rama" style="color: ${estiloInfo.color.texto}; border-color: ${estiloInfo.color.borde};">● ${estiloInfo.etiqueta}</div>`;
    }

    tarjeta.className = "tarjeta-familiar";
    if (estiloInline) tarjeta.setAttribute("style", estiloInline);

    let avatarContent = `${persona.nombre[0]}${persona.apellido ? persona.apellido[0] : ''}`;
    if (persona.foto && persona.foto.trim() !== "") {
        avatarContent = `<img src="${persona.foto}" alt="${persona.nombre}" onerror="this.parentElement.innerText='${avatarContent}'">`;
    }

    const { htmlBanderas, textoTag } = obtenerInfoBanderasYTexto(persona);
    const edadAprox = calcularEdad(persona.anioNacimiento);

    tarjeta.innerHTML = `
        <div class="card-header">
            <div class="header-izq">
                <div class="avatar">${avatarContent}</div>
                <div class="info-principal">
                    <h3>
                        <span class="nombre-persona" style="color: ${estiloInfo.colorNombre};">${persona.nombre}</span>
                        <span class="apellido-persona">${persona.apellido || ''}</span>
                    </h3>
                </div>
            </div>
            ${htmlBanderas}
        </div>
        ${badgeHtml}
        <div class="tags-gen">
            <span class="tag">${persona.generacion}</span>
            <span class="tag ${persona.sexo.toLowerCase()}">${persona.sexo}</span>
            ${textoTag ? `<span class="tag nacionalidad">${textoTag}</span>` : ''}
        </div>
        <div class="edad-aprox">Edad aprox.: ${edadAprox} años</div>
        <div class="seccion-parejas">
            <h4>Pareja(s):</h4>
            <ul class="lista-nombres">
                ${persona.parejas?.length ? persona.parejas.map(p => `<li>❤️ ${p}</li>`).join('') : '<li>Sin pareja registrada</li>'}
            </ul>
        </div>
    `;
    return tarjeta;
}

function renderizarArbol(personasAMostrar) {
    const contenedor = document.getElementById("arbol-net");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (!personasAMostrar || personasAMostrar.length === 0) {
        contenedor.innerHTML = "<p style='padding: 30px; color: #555; font-size: 1rem;'>No hay familiares registrados todavía. Ve a la pestaña <b>'Administrar / Agregar'</b> para registrar a tus primeros familiares.</p>";
        return;
    }

    const filaBusqueda = document.createElement("div");
    filaBusqueda.style.display = "flex";
    filaBusqueda.style.flexWrap = "wrap";
    filaBusqueda.style.gap = "24px";
    personasAMostrar.forEach(p => filaBusqueda.appendChild(crearElementoTarjeta(p)));
    contenedor.appendChild(filaBusqueda);
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
    const seleccionadoActual = document.getElementById("rama-color-seleccionado")?.value || "";

    PALETA_COLORES.forEach(col => {
        const estaUsado = coloresUsados.includes(col.id);
        const swatch = document.createElement("div");
        swatch.className = `color-swatch ${estaUsado ? 'bloqueado' : ''} ${seleccionadoActual === col.id ? 'seleccionado' : ''}`;

        if (estaUsado) {
            swatch.innerHTML = `🔒<span>C${col.num}</span><small>Usado</small>`;
        } else {
            swatch.style.background = col.fondo;
            swatch.style.borderColor = col.borde;
            swatch.style.color = col.texto;
            swatch.innerHTML = `<span>C${col.num}</span><small>${col.nombre}</small>`;
            swatch.onclick = () => {
                const inpColor = document.getElementById("rama-color-seleccionado");
                if (inpColor) inpColor.value = col.id;
                renderizarPaletaColores();
            };
        }
        grid.appendChild(swatch);
    });
}

function seleccionarColorPersonalizado(hex) {
    const inp = document.getElementById("rama-color-seleccionado");
    if (inp) inp.value = hex;
    renderizarPaletaColores();
}

function crearAsignarRama() {
    const hombre = document.getElementById("rama-select-hombre")?.value;
    const mujer = document.getElementById("rama-select-mujer")?.value;
    const colorId = document.getElementById("rama-color-seleccionado")?.value;

    if (!hombre || !mujer) {
        alert("Debes tener registrado al menos un hombre y una mujer para crear una rama.");
        return;
    }
    if (!colorId) {
        alert("Por favor, selecciona un color de la paleta o un color personalizado.");
        return;
    }

    listaRamas = listaRamas.filter(r => !(r.hombre === hombre && r.mujer === mujer));
    listaRamas.push({ id: `rama_${Date.now()}`, hombre, mujer, colorId });

    const inpColor = document.getElementById("rama-color-seleccionado");
    if (inpColor) inpColor.value = "";
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

function cambiarColorRama(idRama) {
    const nuevaColorHex = prompt("Ingresa un color en formato HEX (ej. #3b82f6):");
    if (!nuevaColorHex) return;
    
    const rama = listaRamas.find(r => r.id === idRama);
    if (rama) {
        rama.colorId = nuevaColorHex.trim();
        guardarEnMemoriaLocal();
        refrescarTodo();
        alert("¡Color de rama actualizado con éxito!");
    }
}

function renderizarListaRamasActivas() {
    const contenedor = document.getElementById("lista-ramas-activas");
    const contadorRamasEl = document.getElementById("contador-ramas");
    if (contadorRamasEl) contadorRamasEl.innerText = listaRamas.length;
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (listaRamas.length === 0) {
        contenedor.innerHTML = "<p style='color:#666; font-size:0.85rem;'>No hay ramas con color asignado todavía.</p>";
        return;
    }

    listaRamas.forEach(r => {
        const colObj = obtenerObjetoColorPorIdOPersonalizado(r.colorId) || PALETA_COLORES[0];
        const row = document.createElement("div");
        row.className = "rama-item-row";
        row.style.background = colObj.fondo;
        row.style.borderColor = colObj.borde;

        row.innerHTML = `
            <div>
                <strong style="color:${colObj.texto};">Color ${colObj.num} (${colObj.nombre})</strong><br>
                <span>👨 ${r.hombre} + 👩 <b>${r.mujer}</b></span>
            </div>
            <div style="display: flex; gap: 6px;">
                <button class="btn-editar-item" onclick="cambiarColorRama('${r.id}')" style="background:#e0f2fe; color:#0369a1; border:none; padding:5px 8px; border-radius:6px; cursor:pointer; font-weight:600;">Cambiar Color</button>
                <button class="btn-eliminar-item" onclick="eliminarRama('${r.id}')" style="background:#fee2e2; color:#b91c1c; border:none; padding:5px 8px; border-radius:6px; cursor:pointer; font-weight:600;">Liberar</button>
            </div>
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
    if (!contenedor) return;
    contenedor.innerHTML = "<p style='padding:20px; color:#666;'>Vista en columnas disponible.</p>";
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
    const texto = document.getElementById("buscador")?.value.toLowerCase() || "";
    const genFiltro = document.getElementById("filtro-generacion")?.value || "todas";

    const filtrados = listaPersonas.filter(p => {
        const coincideTexto = `${p.nombre} ${p.apellido || ''} ${p.nacionalidad || ''}`.toLowerCase().includes(texto);
        const coincideGen = genFiltro === 'todas' || p.generacion === genFiltro;
        return coincideTexto && coincideGen;
    });

    renderizarArbol(filtrados);
}

function poblarSelectoresParejasHijosAdmin() {
    const contParejas = document.getElementById("contenedor-check-parejas");
    const contHijos = document.getElementById("contenedor-check-hijos");
    if (!contParejas || !contHijos) return;

    contParejas.innerHTML = "";
    contHijos.innerHTML = "";

    listaPersonas.forEach(p => {
        const nom = `${p.nombre} ${p.apellido || ''}`.trim();
        contParejas.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-pareja" value="${nom}"> ${nom} (${p.generacion})
            </label>
        `;
        contHijos.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-hijo" value="${nom}"> ${nom} (${p.generacion})
            </label>
        `;
    });
}

function guardarFamiliar(event) {
    event.preventDefault();
    const editId = document.getElementById("edit-id").value;
    const nombre = document.getElementById("inp-nombre").value.trim();
    const apellido = document.getElementById("inp-apellido").value.trim();
    const generacion = document.getElementById("inp-generacion").value;
    const sexo = document.getElementById("inp-sexo").value;
    const anioNacimiento = parseInt(document.getElementById("inp-anio").value) || 2000;
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
    const contadorRegistrosEl = document.getElementById("contador-registros");
    if (contadorRegistrosEl) contadorRegistrosEl.innerText = listaPersonas.length;
    if (!contenedorLista) return;
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
