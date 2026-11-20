let listaPersonas = [];
let listaRamas = [];

const PALETA_COLORES = [
    // 1. Familia del Rojo (1-10)
    { id: 'c1', num: 1, nombre: 'Rojo', borde: '#dc2626', fondo: '#fee2e2', texto: '#991b1b', tipo: 'sólido' },
    { id: 'c2', num: 2, nombre: 'Rojo Oscuro / Granate', borde: '#7f1d1d', fondo: '#fee2e2', texto: '#7f1d1d', tipo: 'sólido' },
    { id: 'c3', num: 3, nombre: 'Borgoña / Vino', borde: '#881337', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c4', num: 4, nombre: 'Carmesí', borde: '#be123c', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c5', num: 5, nombre: 'Escarlata', borde: '#ef4444', fondo: '#fee2e2', texto: '#991b1b', tipo: 'sólido' },
    { id: 'c6', num: 6, nombre: 'Frambuesa', borde: '#9f1239', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c7', num: 7, nombre: 'Rosa Coral', borde: '#e11d48', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c8', num: 8, nombre: 'Salmón', borde: '#f97316', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c9', num: 9, nombre: 'Rosa Fucsia', borde: '#c026d3', fondo: '#fae8ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c10', num: 10, nombre: 'Magenta', borde: '#db2777', fondo: '#fce7f3', texto: '#9d174d', tipo: 'sólido' },

    // 2. Familia del Azul (11-20)
    { id: 'c11', num: 11, nombre: 'Azul', borde: '#2563eb', fondo: '#dbeafe', texto: '#1e40af', tipo: 'sólido' },
    { id: 'c12', num: 12, nombre: 'Azul Marino', borde: '#1e3a8a', fondo: '#dbeafe', texto: '#1e3a8a', tipo: 'sólido' },
    { id: 'c13', num: 13, nombre: 'Azul Rey / Cobalto', borde: '#1d4ed8', fondo: '#dbeafe', texto: '#1e40af', tipo: 'sólido' },
    { id: 'c14', num: 14, nombre: 'Azul Acero', borde: '#3b82f6', fondo: '#eff6ff', texto: '#1d4ed8', tipo: 'sólido' },
    { id: 'c15', num: 15, nombre: 'Azul Cielo / Celeste', borde: '#0ea5e9', fondo: '#e0f2fe', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c16', num: 16, nombre: 'Cian Profundo', borde: '#0284c7', fondo: '#e0f2fe', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c17', num: 17, nombre: 'Turquesa', borde: '#0d9488', fondo: '#ccfbf1', texto: '#115e59', tipo: 'sólido' },
    { id: 'c18', num: 18, nombre: 'Aguamarina / Teal', borde: '#14b8a6', fondo: '#ccfbf1', texto: '#115e59', tipo: 'sólido' },
    { id: 'c19', num: 19, nombre: 'Índigo', borde: '#4f46e5', fondo: '#e0e7ff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c20', num: 20, nombre: 'Azul Pizarra', borde: '#334155', fondo: '#f1f5f9', texto: '#1e293b', tipo: 'sólido' },

    // 3. Familia del Naranja (21-30)
    { id: 'c21', num: 21, nombre: 'Naranja', borde: '#ea580c', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c22', num: 22, nombre: 'Naranja Oscuro / Quemado', borde: '#c2410c', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c23', num: 23, nombre: 'Teja / Terracota', borde: '#b45309', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c24', num: 24, nombre: 'Mandarina', borde: '#f97316', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c25', num: 25, nombre: 'Durazno / Melocotón', borde: '#fb923c', fondo: '#fff7ed', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c26', num: 26, nombre: 'Ámbar', borde: '#d97706', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c27', num: 27, nombre: 'Ocre', borde: '#a16207', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c28', num: 28, nombre: 'Canela', borde: '#92400e', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c29', num: 29, nombre: 'Cobrizo', borde: '#b45309', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c30', num: 30, nombre: 'Albaricoque', borde: '#f59e0b', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },

    // 4. Familia del Amarillo (31-40)
    { id: 'c31', num: 31, nombre: 'Amarillo', borde: '#eab308', fondo: '#fef9c3', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c32', num: 32, nombre: 'Amarillo Oro / Dorado', borde: '#ca8a04', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c33', num: 33, nombre: 'Amarillo Mostaza', borde: '#a16207', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c34', num: 34, nombre: 'Amarillo Limón', borde: '#84cc16', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c35', num: 35, nombre: 'Ámbar Claro', borde: '#f59e0b', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c36', num: 36, nombre: 'Crema / Vainilla', borde: '#eab308', fondo: '#fefce8', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c37', num: 37, nombre: 'Marfil', borde: '#d4af37', fondo: '#fffbeb', texto: '#78350f', tipo: 'sólido' },
    { id: 'c38', num: 38, nombre: 'Paja / Trigo', borde: '#ca8a04', fondo: '#fefce8', texto: '#713f12', tipo: 'sólido' },
    { id: 'c39', num: 39, nombre: 'Chartreuse / Lima-Amarillo', borde: '#65a30d', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c40', num: 40, nombre: 'Azafrán', borde: '#d97706', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },

    // 5. Familia del Verde (41-50)
    { id: 'c41', num: 41, nombre: 'Verde', borde: '#16a34a', fondo: '#dcfce7', texto: '#166534', tipo: 'sólido' },
    { id: 'c42', num: 42, nombre: 'Verde Oscuro / Bosque', borde: '#14532d', fondo: '#dcfce7', texto: '#14532d', tipo: 'sólido' },
    { id: 'c43', num: 43, nombre: 'Esmeralda', borde: '#059669', fondo: '#d1fae5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c44', num: 44, nombre: 'Lima', borde: '#65a30d', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c45', num: 45, nombre: 'Oliva', borde: '#4d7c0f', fondo: '#ecfccb', texto: '#365314', tipo: 'sólido' },
    { id: 'c46', num: 46, nombre: 'Verde Menta', borde: '#10b981', fondo: '#ecfdf5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c47', num: 47, nombre: 'Verde Bosque Claro / Pino', borde: '#15803d', fondo: '#dcfce7', texto: '#166534', tipo: 'sólido' },
    { id: 'c48', num: 48, nombre: 'Verde Jade', borde: '#047857', fondo: '#d1fae5', texto: '#064e3b', tipo: 'sólido' },
    { id: 'c49', num: 49, nombre: 'Verde Pistacho', borde: '#84cc16', fondo: '#f7fee7', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c50', num: 50, nombre: 'Verde Salvia', borde: '#4b7f52', fondo: '#f0fdf4', texto: '#14532d', tipo: 'sólido' },

    // 6. Familia del Morado / Violeta (51-60)
    { id: 'c51', num: 51, nombre: 'Morado', borde: '#9333ea', fondo: '#f3e8ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c52', num: 52, nombre: 'Violeta', borde: '#7c3aed', fondo: '#ede9fe', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c53', num: 53, nombre: 'Amatista', borde: '#8b5cf6', fondo: '#f5f3ff', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c54', num: 54, nombre: 'Berenjena', borde: '#581c87', fondo: '#f3e8ff', texto: '#3b0764', tipo: 'sólido' },
    { id: 'c55', num: 55, nombre: 'Uva', borde: '#6b21a8', fondo: '#f3e8ff', texto: '#4c1d95', tipo: 'sólido' },
    { id: 'c56', num: 56, nombre: 'Lila', borde: '#a855f7', fondo: '#faf5ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c57', num: 57, nombre: 'Lavanda', borde: '#c084fc', fondo: '#faf5ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c58', num: 58, nombre: 'Ciruela', borde: '#701a75', fondo: '#fae8ff', texto: '#4a044e', tipo: 'sólido' },
    { id: 'c59', num: 59, nombre: 'Orquídea', borde: '#d946ef', fondo: '#fdf4ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c60', num: 60, nombre: 'Malva', borde: '#a21caf', fondo: '#fae8ff', texto: '#701a75', tipo: 'sólido' },

    // 7. Familia del Marrón / Tierra (61-70)
    { id: 'c61', num: 61, nombre: 'Marrón Tierra', borde: '#78350f', fondo: '#fef3c7', texto: '#451a03', tipo: 'sólido' },
    { id: 'c62', num: 62, nombre: 'Chocolate', borde: '#57534e', fondo: '#e7e5e4', texto: '#292524', tipo: 'sólido' },
    { id: 'c63', num: 63, nombre: 'Avellana', borde: '#92400e', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c64', num: 64, nombre: 'Moka', borde: '#6b4423', fondo: '#f5f5f4', texto: '#292524', tipo: 'sólido' },
    { id: 'c65', num: 65, nombre: 'Bronce', borde: '#a16207', fondo: '#fef3c7', texto: '#713f12', tipo: 'sólido' },
    { id: 'c66', num: 66, nombre: 'Café / Espresso', borde: '#451a03', fondo: '#f5f5f4', texto: '#292524', tipo: 'sólido' },
    { id: 'c67', num: 67, nombre: 'Caoba', borde: '#7c2d12', fondo: '#ffedd5', texto: '#431407', tipo: 'sólido' },
    { id: 'c68', num: 68, nombre: 'Castaño', borde: '#78350f', fondo: '#fffbeb', texto: '#451a03', tipo: 'sólido' },
    { id: 'c69', num: 69, nombre: 'Caramelo', borde: '#b45309', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c70', num: 70, nombre: 'Tierra / Arcilla', borde: '#9a3412', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },

    // 8. Familia de Grises / Neutros (71-80)
    { id: 'c71', num: 71, nombre: 'Gris', borde: '#64748b', fondo: '#f1f5f9', texto: '#334155', tipo: 'sólido' },
    { id: 'c72', num: 72, nombre: 'Gris Carbón', borde: '#1e293b', fondo: '#e2e8f0', texto: '#0f172a', tipo: 'sólido' },
    { id: 'c73', num: 73, nombre: 'Gris Plata', borde: '#94a3b8', fondo: '#f8fafc', texto: '#334155', tipo: 'sólido' },
    { id: 'c74', num: 74, nombre: 'Gris Plomo', borde: '#475569', fondo: '#e2e8f0', texto: '#1e293b', tipo: 'sólido' },
    { id: 'c75', num: 75, nombre: 'Gris Niebla', borde: '#cbd5e1', fondo: '#f8fafc', texto: '#475569', tipo: 'sólido' },
    { id: 'c76', num: 76, nombre: 'Gris Perla', borde: '#9ca3af', fondo: '#f9fafb', texto: '#374151', tipo: 'sólido' },
    { id: 'c77', num: 77, nombre: 'Gris Humo', borde: '#52525b', fondo: '#f4f4f5', texto: '#27272a', tipo: 'sólido' },
    { id: 'c78', num: 78, nombre: 'Gris Ceniza', borde: '#71717a', fondo: '#f4f4f5', texto: '#27272a', tipo: 'sólido' },
    { id: 'c79', num: 79, nombre: 'Gris Piedra', borde: '#57534e', fondo: '#f5f5f4', texto: '#292524', tipo: 'sólido' },
    { id: 'c80', num: 80, nombre: 'Gris Marengo', borde: '#27272a', fondo: '#e4e4e7', texto: '#18181b', tipo: 'sólido' },

    // Espacios disponibles (81-90) en blanco/transparente para asignar color individualmente
    { id: 'c81', num: 81, nombre: 'Disponible 81', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c82', num: 82, nombre: 'Disponible 82', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c83', num: 83, nombre: 'Disponible 83', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c84', num: 84, nombre: 'Disponible 84', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c85', num: 85, nombre: 'Disponible 85', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c86', num: 86, nombre: 'Disponible 86', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c87', num: 87, nombre: 'Disponible 87', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c88', num: 88, nombre: 'Disponible 88', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c89', num: 89, nombre: 'Disponible 89', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true },
    { id: 'c90', num: 90, nombre: 'Disponible 90', borde: '#cbd5e1', fondo: 'transparent', texto: '#64748b', tipo: 'sólido', vacio: true }
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

    // 1. Si la persona tiene nacionalidad propia explícita
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

    // 2. Buscar padres biológicos de forma directa
    const nombreCompleto = `${persona.nombre} ${persona.apellido || ''}`.trim();
    let padre = null;
    let madre = null;

    if (typeof listaPersonas !== 'undefined') {
        padre = listaPersonas.find(p => p.sexo === 'M' && p.hijos && p.hijos.includes(nombreCompleto));
        madre = listaPersonas.find(p => p.sexo === 'F' && p.hijos && p.hijos.includes(nombreCompleto));

        // Acumular nacionalidad del padre si la tiene
        if (padre && (padre.nacionalidad || '').trim() !== '') {
            padre.nacionalidad.split('/').forEach(p => {
                const limpio = p.trim();
                if (limpio && !paisesSet.has(limpio)) {
                    paisesSet.add(limpio);
                    textosPaises.push(limpio);
                }
            });
        }

        // Acumular nacionalidad de la madre si la tiene
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

    // 3. Generar las banderas visuales acumuladas verticalmente con separador
    let htmlBanderas = '<div class="banderas-contenedor-der">';
    let renderizoPadre = false;
    let renderizoMadre = false;

    // Banderas aportadas por el Padre
    const paisesPadre = new Set();
    if (padre && padre.nacionalidad) {
        padre.nacionalidad.split('/').forEach(p => {
            const limpio = p.trim();
            if (limpio) paisesPadre.add(limpio);
        });
    }

    // Banderas aportadas por la Madre
    const paisesMadre = new Set();
    if (madre && madre.nacionalidad) {
        madre.nacionalidad.split('/').forEach(p => {
            const limpio = p.trim();
            if (limpio) paisesMadre.add(limpio);
        });
    }

    // Renderizar primero las del padre
    paisesPadre.forEach(pais => {
        const iso = obtenerCodigoISO(pais);
        if (iso) {
            htmlBanderas += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="Padre: ${pais}" class="bandera-doble-item">`;
            renderizoPadre = true;
        }
    });

    // Línea divisoria si ambos padres tienen banderas
    if (renderizoPadre && paisesMadre.size > 0) {
        htmlBanderas += '<div class="separador-banderas" style="width: 24px; height: 2px; background: #cbd5e1; margin: 3px auto; border-radius: 1px;"></div>';
    }

    // Renderizar después las de la madre
    paisesMadre.forEach(pais => {
        const iso = obtenerCodigoISO(pais);
        if (iso) {
            htmlBanderas += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="Madre: ${pais}" class="bandera-doble-item">`;
            renderizoMadre = true;
        }
    });

    // Si no hubo padres pero sí nacionalidad propia
    if (!renderizoPadre && !renderizoMadre) {
        paisesSet.forEach(pais => {
            const iso = obtenerCodigoISO(pais);
            if (iso) {
                htmlBanderas += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="${pais}" class="bandera-doble-item">`;
            }
        });
    }

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
        if (persona.parejas && persona.parejas.length > 0) {
            const nombrePrimeraEsposa = persona.parejas[0];
            const ramaEsposa = listaRamas.find(r => r.mujer === nombrePrimeraEsposa || r.hombre === nombrePrimeraEsposa);
            if (ramaEsposa) {
                const colorEsposaObj = obtenerObjetoColorPorIdOPersonalizado(ramaEsposa.colorId);
                if (colorEsposaObj) {
                    return {
                        tipo: 'unico',
                        color: colorEsposaObj,
                        etiqueta: `Color ${colorEsposaObj.num} - ${colorEsposaObj.nombre}`,
                        colorNombre: colorEsposaObj.texto
                    };
                }
            }

            const parejaObj = listaPersonas.find(p => `${p.nombre} ${p.apellido || ''}`.trim() === nombrePrimeraEsposa);
            if (parejaObj) {
                const estiloPareja = obtenerEstiloPersona(parejaObj);
                if (estiloPareja.tipo === 'unico') {
                    return {
                        tipo: 'unico',
                        color: estiloPareja.color,
                        etiqueta: estiloPareja.etiqueta,
                        colorNombre: estiloPareja.color.texto
                    };
                }
                if (estiloPareja.tipo === '50-50') {
                    return {
                        tipo: 'unico',
                        color: estiloPareja.top,
                        etiqueta: `Color ${estiloPareja.top.num} - ${estiloPareja.top.nombre}`,
                        colorNombre: estiloPareja.top.texto
                    };
                }
            }
        }
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
        // Si alguno es un patrón, usamos su color de borde sólido para que el degradado 50/50 luzca impecable
        const topFinal = colorHeredadoObj.tipo === 'patron' ? { ...colorHeredadoObj, fondo: colorHeredadoObj.borde } : colorHeredadoObj;
        const bottomFinal = colorPropioObj.tipo === 'patron' ? { ...colorPropioObj, fondo: colorPropioObj.borde } : colorPropioObj;

        return {
            tipo: '50-50',
            top: topFinal,
            bottom: bottomFinal,
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
            swatch.innerHTML = `<span>🔒</span><span>C${col.num}</span><small>Usado</small>`;
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
    const nuevaColorHex = prompt("Ingresa un color en formato HEX (ej. #3b82f6) o selecciona de la paleta:");
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
    const texto = document.getElementById("buscador")?.value.toLowerCase() || "";
    const genFiltro = document.getElementById("filtro-generacion")?.value || "todas";

    const filtrados = listaPersonas.filter(p => {
        const coincideTexto = `${p.nombre} ${p.apellido || ''} ${p.nacionalidad || ''}`.toLowerCase().includes(texto);
        const coincideGen = genFiltro === 'todas' || p.generacion === genFiltro;
        return coincideTexto && coincideGen;
    });

    renderizarArbol(filtrados);
}

function poblarSelectoresParejasHijosAdmin(parejasSeleccionadas = [], hijosSeleccionados = []) {
    const contParejas = document.getElementById("contenedor-check-parejas");
    const contHijos = document.getElementById("contenedor-check-hijos");
    if (!contParejas || !contHijos) return;

    contParejas.innerHTML = "";
    contHijos.innerHTML = "";

    listaPersonas.forEach(p => {
        const nom = `${p.nombre} ${p.apellido || ''}`.trim();
        const esPareja = parejasSeleccionadas.includes(nom);
        const esHijo = hijosSeleccionados.includes(nom);

        contParejas.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-pareja" value="${nom}" ${esPareja ? 'checked' : ''}> ${nom} (${p.generacion})
            </label>
        `;
        contHijos.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-hijo" value="${nom}" ${esHijo ? 'checked' : ''}> ${nom} (${p.generacion})
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
