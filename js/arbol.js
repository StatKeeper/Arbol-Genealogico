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
        poblarSelectoresParejasHijosAdmin();
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
        poblarSelectoresParejasHijosAdmin();
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
        'antigua y barbuda': 'ag', 'argentina': 'ar', 'argentino': 'ar', 'bahamas': 'bs', 'bahameno': 'bs',
        'barbados': 'bb', 'belice': 'bz', 'bolivia': 'bo', 'boliviano': 'bo', 'boliviana': 'bo',
        'brasil': 'br', 'brazil': 'br', 'brasileno': 'br', 'brasilena': 'br', 'canada': 'ca', 'canadiense': 'ca',
        'chile': 'cl', 'chileno': 'cl', 'chilena': 'cl', 'colombia': 'co', 'colombiano': 'co', 'colombiana': 'co',
        'costa rica': 'cr', 'costarricense': 'cr', 'cuba': 'cu', 'cubano': 'cu', 'cubana': 'cu',
        'dominica': 'dm', 'ecuador': 'ec', 'ecuatoriano': 'ec', 'ecuatoriana': 'ec',
        'el salvador': 'sv', 'salvadoreno': 'sv', 'estados unidos': 'us', 'eeuu': 'us', 'ee.uu.': 'us', 'usa': 'us',
        'granada': 'gd', 'guatemala': 'gt', 'guatemalteco': 'gt', 'guyana': 'gy', 'haiti': 'ht', 'haitiano': 'ht',
        'honduras': 'hn', 'hondureno': 'hn', 'jamaica': 'jm', 'jamaiquino': 'jm',
        'mexico': 'mx', 'mejico': 'mx', 'mexicano': 'mx', 'mexicana': 'mx', 'nicaragua': 'ni', 'nicaraguense': 'ni',
        'panama': 'pa', 'panameno': 'pa', 'paraguay': 'py', 'paraguayo': 'py', 'peru': 'pe', 'peruano': 'pe', 'peruana': 'pe',
        'puerto rico': 'pr', 'republica dominicana': 'do', 'dominicana': 'do', 'dominicano': 'do',
        'uruguay': 'uy', 'uruguayo': 'uy', 'venezuela': 've', 'venezolano': 've', 'venezolana': 've',
        'albania': 'al', 'alemania': 'de', 'germany': 'de', 'aleman': 'de', 'alemana': 'de', 'andorra': 'ad',
        'armenia': 'am', 'austria': 'at', 'austriaco': 'at', 'azerbaiyan': 'az', 'belgica': 'be', 'belga': 'be',
        'bielorrusia': 'by', 'bosnia y herzegovina': 'ba', 'bulgaria': 'bg', 'chipre': 'cy', 'croacia': 'hr',
        'dinamarca': 'dk', 'escocia': 'gb-sct', 'escoces': 'gb-sct', 'escocesa': 'gb-sct', 'eslovaquia': 'sk', 'eslovenia': 'si',
        'espana': 'es', 'spain': 'es', 'espanol': 'es', 'espanola': 'es', 'estonia': 'ee', 'finlandia': 'fi',
        'francia': 'fr', 'france': 'fr', 'frances': 'fr', 'francesa': 'fr', 'gales': 'gb-wls', 'georgia': 'ge',
        'grecia': 'gr', 'griego': 'gr', 'holanda': 'nl', 'paises bajos': 'nl', 'hungria': 'hu', 'irlanda': 'ie',
        'islandia': 'is', 'italia': 'it', 'italy': 'it', 'italiano': 'it', 'italiana': 'it', 'kosovo': 'xk',
        'letonia': 'lv', 'liechtenstein': 'li', 'lituania': 'lt', 'luxemburgo': 'lu', 'macedonia del norte': 'mk',
        'malta': 'mt', 'moldavia': 'md', 'monaco': 'mc', 'montenegro': 'me', 'noruega': 'no', 'polonia': 'pl',
        'portugal': 'pt', 'portugues': 'pt', 'reino unido': 'gb', 'inglaterra': 'gb', 'uk': 'gb', 'ingles': 'gb', 'inglesa': 'gb',
        'republica checa': 'cz', 'rumania': 'ro', 'rusia': 'ru', 'ruso': 'ru', 'san marino': 'sm', 'serbia': 'rs',
        'suecia': 'se', 'suiza': 'ch', 'ucrania': 'ua', 'vaticano': 'va',
        'angola': 'ao', 'argelia': 'dz', 'benin': 'bj', 'botsuana': 'bw', 'burkina faso': 'bf', 'burundi': 'bi',
        'cabo verde': 'cv', 'camerun': 'cm', 'cameroon': 'cm', 'camerunes': 'cm', 'camerunesa': 'cm',
        'chad': 'td', 'comoras': 'km', 'congo': 'cg', 'republica democratica del congo': 'cd', 'costa de marfil': 'ci',
        'egipto': 'eg', 'eritrea': 'er', 'etiopia': 'et', 'gabon': 'ga', 'gambia': 'gm', 'ghana': 'gh',
        'guinea': 'gn', 'guinea ecuatorial': 'gq', 'guinea-bisau': 'gw', 'kenia': 'ke', 'lesoto': 'ls', 'liberia': 'lr',
        'libia': 'ly', 'madagascar': 'mg', 'malaui': 'mw', 'mali': 'ml', 'marruecos': 'ma', 'mauricio': 'mu',
        'mauritania': 'mr', 'mozambique': 'mz', 'namibia': 'na', 'niger': 'ne', 'nigeria': 'ng', 'republica centroafricana': 'cf',
        'ruanda': 'rw', 'santo tome y principe': 'st', 'senegal': 'sn', 'senegales': 'sn', 'seychelles': 'sc',
        'sierra leona': 'sl', 'somalia': 'so', 'suazilandia': 'sz', 'sudafrica': 'za', 'sudan': 'sd', 'sudan del sur': 'ss',
        'tanzania': 'tz', 'togo': 'tg', 'tunez': 'tn', 'uganda': 'ug', 'yibuti': 'dj', 'zambia': 'zm', 'zimbabue': 'zw',
        'afganistan': 'af', 'arabia saudita': 'sa', 'banglades': 'bd', 'barein': 'bh', 'birmania': 'mm', 'brunei': 'bn',
        'butan': 'bt', 'camboya': 'kh', 'catar': 'qa', 'qatar': 'qa', 'china': 'cn', 'chino': 'cn',
        'corea del norte': 'kp', 'corea del sur': 'kr', 'corea': 'kr', 'emiratos arabes unidos': 'ae', 'dubai': 'ae',
        'filipinas': 'ph', 'india': 'in', 'indonesia': 'id', 'irak': 'iq', 'iran': 'ir', 'israel': 'il',
        'japon': 'jp', 'japan': 'jp', 'japones': 'jp', 'jordania': 'jo', 'kazajistan': 'kz', 'kirguistan': 'kg',
        'kuwait': 'kw', 'laos': 'la', 'libano': 'lb', 'malasia': 'my', 'maldivas': 'mv', 'mongolia': 'mn',
        'nepal': 'np', 'oman': 'om', 'pakistan': 'pk', 'palestina': 'ps', 'singapur': 'sg', 'siria': 'sy',
        'sri lanka': 'lk', 'tailandia': 'th', 'taiwan': 'tw', 'tayikistan': 'tj', 'timor oriental': 'tl',
        'turkmenistan': 'tm', 'turquia': 'tr', 'uzbekistan': 'uz', 'vietnam': 'vn', 'yemen': 'ye',
        'australia': 'au', 'fiyi': 'fj', 'islas marshall': 'mh', 'islas salomon': 'sb', 'kiribati': 'ki',
        'micronesia': 'fm', 'nauru': 'nr', 'nueva zelanda': 'nz', 'palaos': 'pw', 'papua nueva guinea': 'pg',
        'samoa': 'ws', 'tonga': 'to', 'tuvalu': 'tv', 'vanuatu': 'vu'
    };
    return codigos[limpio] || null;
}

function obtenerInfoBanderasYTexto(persona) {
    const paisesSet = new Set();
    const textosPaises = [];

    // 1. País propio de la persona
    const paisPropio = (persona.nacionalidad || '').trim();
    if (paisPropio !== '') {
        paisPropio.split('/').forEach(p => {
            const limpio = p.trim();
            if (limpio) {
                paisesSet.add(limpio);
                textosPaises.push(limpio);
            }
        });
    }

    // 2. Buscar padres biológicos para heredar sus nacionalidades hacia abajo
    const nombreCompleto = `${persona.nombre} ${persona.apellido || ''}`.trim();
    if (typeof listaPersonas !== 'undefined') {
        const padre = listaPersonas.find(p => p.sexo === 'M' && p.hijos && p.hijos.includes(nombreCompleto));
        const madre = listaPersonas.find(p => p.sexo === 'F' && p.hijos && p.hijos.includes(nombreCompleto));

        if (padre && (padre.nacionalidad || '').trim() !== '') {
            padre.nacionalidad.split('/').forEach(p => {
                const limpio = p.trim();
                if (limpio && !paisesSet.has(limpio)) {
                    paisesSet.add(limpio);
                    textosPaises.push(limpio);
                }
            });
        }

        if (madre && (madre.nacionalidad || '').trim() !== '') {
            madre.nacionalidad.split('/').forEach(p => {
                const limpio = p.trim();
                if (limpio && !paisesSet.has(limpio)) {
                    paisesSet.add(limpio);
                    textosPaises.push(limpio);
                }
            });
        }
    }

    if (paisesSet.size === 0) {
        return { htmlBanderas: '', textoTag: '' };
    }

    // Generar las banderas acumuladas verticalmente
    let htmlBanderas = '<div class="banderas-contenedor-der">';
    paisesSet.forEach(pais => {
        const iso = obtenerCodigoISO(pais);
        if (iso) {
            htmlBanderas += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="${pais}" class="bandera-doble-item">`;
        }
    });
    htmlBanderas += '</div>';

    const textoTag = textosPaises.join(' / ');
    return { htmlBanderas, textoTag };
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

    const tienePadreRegistrado = listaPersonas.some(p => p.hijos && p.hijos.includes(nombreCompleto));
    if (persona.sexo === 'M' && !tienePadreRegistrado) {
        return { tipo: 'neutro', colorNombre: '#1d4ed8' };
    }

    const padreBiologico = listaPersonas.find(p => p.sexo === 'M' && p.hijos && p.hijos.includes(nombreCompleto));
    const madreBiologica = listaPersonas.find(p => p.sexo === 'F' && p.hijos && p.hijos.includes(nombreCompleto));

    let colorHeredadoObj = null;
    if (padreBiologico && madreBiologica) {
        const nombrePadre = `${padreBiologico.nombre} ${padreBiologico.apellido || ''}`.trim();
        const nombreMadre = `${madreBiologica.nombre} ${madreBiologica.apellido || ''}`.trim();
        const ramaEspecifica = listaRamas.find(r => r.hombre === nombrePadre && r.mujer === nombreMadre);
        if (ramaEspecifica) {
            colorHeredadoObj = obtenerObjetoColorPorIdOPersonalizado(ramaEspecifica.colorId);
        }
    }

    if (!colorHeredadoObj && madreBiologica) {
        const nombreMadre = `${madreBiologica.nombre} ${madreBiologica.apellido || ''}`.trim();
        const ramaMadre = listaRamas.find(r => r.mujer === nombreMadre);
        if (ramaMadre) {
            colorHeredadoObj = obtenerObjetoColorPorIdOPersonalizado(ramaMadre.colorId);
        } else {
            const estiloMadre = obtenerEstiloPersona(madreBiologica);
            if (estiloMadre.tipo === 'unico' || estiloMadre.tipo === '50-50') {
                colorHeredadoObj = estiloMadre.color || estiloMadre.top;
            }
        }
    }

    const ramasDirectas = listaRamas.filter(r => r.mujer === nombreCompleto || r.hombre === nombreCompleto);
    let colorPropioObj = null;
    if (ramasDirectas.length > 0) {
        colorPropioObj = obtenerObjetoColorPorIdOPersonalizado(ramasDirectas[0].colorId);
    } else if (persona.sexo === 'F' && persona.parejas && persona.parejas.length > 0) {
        for (const nombrePareja of persona.parejas) {
            const ramaPareja = listaRamas.find(r => r.hombre === nombrePareja || r.mujer === nombrePareja);
            if (ramaPareja) {
                colorPropioObj = obtenerObjetoColorPorIdOPersonalizado(ramaPareja.colorId);
                break;
            }
        }
    }

    if (colorHeredadoObj && colorPropioObj && colorHeredadoObj.id !== colorPropioObj.id) {
        if (colorHeredadoObj.tipo === 'patron' || colorPropioObj.tipo === 'patron') {
            const colorPrincipal = colorPropioObj.tipo === 'patron' ? colorPropioObj : colorHeredadoObj;
            return { tipo: 'unico', color: colorPrincipal, etiqueta: `Color ${colorPrincipal.num} - ${colorPrincipal.nombre}`, colorNombre: colorPrincipal.texto };
        }

        return {
            tipo: '50-50',
            top: colorHeredadoObj,
            bottom: colorPropioObj,
            etiqueta: `Color ${colorHeredadoObj.num} / Color ${colorPropioObj.num}`,
            colorNombre: colorHeredadoObj.texto
        };
    } 

    if (colorPropioObj) {
        return { tipo: 'unico', color: colorPropioObj, etiqueta: `Color ${colorPropioObj.num} - ${colorPropioObj.nombre}`, colorNombre: colorPropioObj.texto };
    }

    if (colorHeredadoObj) {
        return { tipo: 'unico', color: colorHeredadoObj, etiqueta: `Heredado: Color ${colorHeredadoObj.num} - ${colorHeredadoObj.nombre}`, colorNombre: colorHeredadoObj.texto };
    }

    if (persona.sexo === 'M') {
        return { tipo: 'neutro', colorNombre: '#1d4ed8' };
    }
    return { tipo: 'neutro', colorNombre: '#be185d' };
}

function crearElementoTarjeta(persona) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-familiar";

    const estiloInfo = obtenerEstiloPersona(persona);
    let estiloInline = "";
    let badgeHtml = "";

    if (estiloInfo.tipo === 'unico') {
        estiloInline = `border-color: ${estiloInfo.color.borde}; background: ${estiloInfo.color.fondo};`;
        badgeHtml = `<div class="badge-rama" style="color: ${estiloInfo.color.texto}; border-color: ${estiloInfo.color.borde};">● ${estiloInfo.etiqueta}</div>`;
    } else if (estiloInfo.tipo === '50-50') {
        tarjeta.classList.add("tarjeta-50-50");
        const fondoBottom = estiloInfo.bottom.tipo === 'patron' ? estiloInfo.bottom.fondo : estiloInfo.bottom.fondo;
        estiloInline = `--bg-top: ${estiloInfo.top.fondo}; --bg-bottom: ${fondoBottom}; --border-top: ${estiloInfo.top.borde}; --border-bottom: ${estiloInfo.bottom.borde};`;
        badgeHtml = `<div class="badge-rama" style="border-color: ${estiloInfo.top.borde}; color: ${estiloInfo.top.texto};">◐ ${estiloInfo.etiqueta} (50/50)</div>`;
    }

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

    const cabezaSeleccionada = document.getElementById("select-cabeza-arbol")?.value || "todos";
    const textoBuscado = document.getElementById("buscador")?.value.toLowerCase().trim() || "";
    const genFiltro = document.getElementById("filtro-generacion")?.value || "todas";

    if (textoBuscado !== "" || genFiltro !== "todas") {
        if (personasAMostrar.length === 0) {
            contenedor.innerHTML = "<p style='padding: 20px; color: #666;'>No hay registros que coincidan con la búsqueda.</p>";
            return;
        }
        const filaBusqueda = document.createElement("div");
        filaBusqueda.style.display = "flex";
        filaBusqueda.style.flexWrap = "wrap";
        filaBusqueda.style.gap = "24px";
        personasAMostrar.forEach(p => filaBusqueda.appendChild(crearElementoTarjeta(p)));
        contenedor.appendChild(filaBusqueda);
        return;
    }

    const setHijosDeAlguien = new Set();
    listaPersonas.forEach(p => {
        (p.hijos || []).forEach(h => setHijosDeAlguien.add(h.trim()));
    });

    let cabezas = listaPersonas.filter(p => p.sexo === 'M' && !setHijosDeAlguien.has(`${p.nombre} ${p.apellido || ''}`.trim()));
    if (cabezas.length === 0) {
        cabezas = listaPersonas.filter(p => p.sexo === 'M');
    }

    if (cabezaSeleccionada !== "todos") {
        cabezas = listaPersonas.filter(p => `${p.nombre} ${p.apellido || ''}`.trim() === cabezaSeleccionada);
    }

    const renderizados = new Set();

    cabezas.forEach(cabeza => {
        const nombreCabeza = `${cabeza.nombre} ${cabeza.apellido || ''}`.trim();
        renderizados.add(nombreCabeza);

        const nucleoDiv = document.createElement("div");
        nucleoDiv.className = "nucleo-familiar-arbol";

        const padreBox = document.createElement("div");
        padreBox.className = "padre-principal-box";
        padreBox.appendChild(crearElementoTarjeta(cabeza));
        nucleoDiv.appendChild(padreBox);

        const nombresParejasSet = new Set(cabeza.parejas || []);
        listaPersonas.forEach(p => {
            if (p.sexo === 'F' && p.parejas && p.parejas.includes(nombreCabeza)) {
                nombresParejasSet.add(`${p.nombre} ${p.apellido || ''}`.trim());
            }
        });

        const listaParejas = Array.from(nombresParejasSet);

        if (listaParejas.length > 0) {
            const unionDiv = document.createElement("div");
            unionDiv.className = "conector-horizontal-union";
            unionDiv.innerHTML = `<div class="linea-union"></div><div class="corazon-union">❤️</div><div class="linea-union"></div>`;
            nucleoDiv.appendChild(unionDiv);

            const ramasWrapper = document.createElement("div");
            ramasWrapper.className = "ramas-parejas-wrapper";

            listaParejas.forEach(nomPareja => {
                renderizados.add(nomPareja);
                const parejaObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === nomPareja);

                const colRama = document.createElement("div");
                colRama.className = "columna-rama-pareja";

                if (parejaObj) {
                    colRama.appendChild(crearElementoTarjeta(parejaObj));
                } else {
                    const placeholder = document.createElement("div");
                    placeholder.className = "tarjeta-familiar";
                    placeholder.innerHTML = `<strong>${nomPareja}</strong><br><small>Pareja vinculada</small>`;
                    colRama.appendChild(placeholder);
                }

                const hijosDeRamaSet = new Set();
                
                if (parejaObj && parejaObj.hijos) {
                    parejaObj.hijos.forEach(hNom => {
                        if (cabeza.hijos && cabeza.hijos.includes(hNom.trim())) {
                            hijosDeRamaSet.add(hNom.trim());
                        }
                    });
                }

                if (cabeza.hijos) {
                    cabeza.hijos.forEach(hNom => {
                        const hObj = listaPersonas.find(x => `${x.nombre} ${x.apellido || ''}`.trim() === hNom.trim());
                        if (hObj && parejaObj) {
                            const apMadre = (parejaObj.apellido || '').toLowerCase().trim();
                            const apHijo = (hObj.apellido || '').toLowerCase().trim();
                            const madreLoTieneRegistrada = parejaObj.hijos && parejaObj.hijos.includes(hNom.trim());
                            const apellidoCoincide = apMadre && apHijo.includes(apMadre);

                            if (madreLoTieneRegistrada || apellidoCoincide) {
                                hijosDeRamaSet.add(hNom.trim());
                            }
                        }
                    });
                }

                const hijosArray = Array.from(hijosDeRamaSet);

                if (hijosArray.length > 0) {
                    const conectorDesc = document.createElement("div");
                    conectorDesc.className = "conector-vertical-hijos";
                    conectorDesc.innerHTML = `
                        <div class="linea-vertical-desc"></div>
                        <span class="etiqueta-descendencia">Descendencia (${hijosArray.length})</span>
                        <div class="linea-vertical-desc" style="height: 12px;"></div>
                        <div class="flecha-vertical-desc"></div>
                    `;
                    colRama.appendChild(conectorDesc);

                    const contHijos = document.createElement("div");
                    contHijos.className = "contenedor-hijos-rama";

                    hijosArray.forEach(nomHijo => {
                        renderizados.add(nomHijo);
                        const hijoObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === nomHijo);
                        if (hijoObj) {
                            contHijos.appendChild(crearElementoTarjeta(hijoObj));
                        }
                    });

                    colRama.appendChild(contHijos);
                }

                ramasWrapper.appendChild(colRama);
            });

            nucleoDiv.appendChild(ramasWrapper);
        }

        contenedor.appendChild(nucleoDiv);
    });

    if (cabezaSeleccionada === "todos") {
        const sueltos = listaPersonas.filter(p => !renderizados.has(`${p.nombre} ${p.apellido || ''}`.trim()));
        if (sueltos.length > 0) {
            const filaSueltos = document.createElement("div");
            filaSueltos.style.display = "flex";
            filaSueltos.style.flexWrap = "wrap";
            filaSueltos.style.gap = "24px";
            filaSueltos.style.marginTop = "20px";
            sueltos.forEach(s => filaSueltos.appendChild(crearElementoTarjeta(s)));
            contenedor.appendChild(filaSueltos);
        }
    }
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
