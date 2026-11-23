let listaPersonas = [];
let listaRamas = [];

const PALETA_COLORES = [
    // 1. Familia del Rojo (1-10) — escala dentro de la gama roja/rosada suave sin invadir fucsias o morados
    { id: 'c1', num: 1, nombre: 'Rojo', borde: '#dc2626', fondo: '#fee2e2', texto: '#991b1b', tipo: 'sólido' },
    { id: 'c2', num: 2, nombre: 'Rojo Intenso', borde: '#b91c1c', fondo: '#fecaca', texto: '#7f1d1d', tipo: 'sólido' },
    { id: 'c3', num: 3, nombre: 'Rojo Oscuro', borde: '#991b1b', fondo: '#fee2e2', texto: '#7f1d1d', tipo: 'sólido' },
    { id: 'c4', num: 4, nombre: 'Carmesí', borde: '#be123c', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c5', num: 5, nombre: 'Escarlata', borde: '#ef4444', fondo: '#fee2e2', texto: '#991b1b', tipo: 'sólido' },
    { id: 'c6', num: 6, nombre: 'Rubí Claro', borde: '#e11d48', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c7', num: 7, nombre: 'Rosa Rojizo', borde: '#f43f5e', fondo: '#fff1f2', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c8', num: 8, nombre: 'Coral Suave', borde: '#fb7185', fondo: '#fff1f2', texto: '#881337', tipo: 'sólido' },
    { id: 'c9', num: 9, nombre: 'Rosa Pálido', borde: '#fda4af', fondo: '#fff1f2', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c10', num: 10, nombre: 'Rubor Suave', borde: '#fecdd3', fondo: '#fff5f5', texto: '#881337', tipo: 'sólido' },

    // 2. Familia del Azul (11-20) — escala dentro de la gama azul sin saltar a turquesa o índigo
    { id: 'c11', num: 11, nombre: 'Azul', borde: '#2563eb', fondo: '#dbeafe', texto: '#1e40af', tipo: 'sólido' },
    { id: 'c12', num: 12, nombre: 'Azul Intenso', borde: '#1d4ed8', fondo: '#dbeafe', texto: '#1e3a8a', tipo: 'sólido' },
    { id: 'c13', num: 13, nombre: 'Azul Marino', borde: '#1e40af', fondo: '#eff6ff', texto: '#1e3a8a', tipo: 'sólido' },
    { id: 'c14', num: 14, nombre: 'Azul Real', borde: '#3b82f6', fondo: '#eff6ff', texto: '#1d4ed8', tipo: 'sólido' },
    { id: 'c15', num: 15, nombre: 'Azul Medio', borde: '#60a5fa', fondo: '#eff6ff', texto: '#1e40af', tipo: 'sólido' },
    { id: 'c16', num: 16, nombre: 'Azul Acero', borde: '#0284c7', fondo: '#e0f2fe', texto: '#075985', tipo: 'sólido' },
    { id: 'c17', num: 17, nombre: 'Azul Cielo', borde: '#0ea5e9', fondo: '#e0f2fe', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c18', num: 18, nombre: 'Celeste', borde: '#38bdf8', fondo: '#f0f9ff', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c19', num: 19, nombre: 'Celeste Claro', borde: '#7dd3fc', fondo: '#f0f9ff', texto: '#075985', tipo: 'sólido' },
    { id: 'c20', num: 20, nombre: 'Brisa Azul', borde: '#bae6fd', fondo: '#f0f9ff', texto: '#0c4a6e', tipo: 'sólido' },

    // 3. Familia del Naranja (21-30) — escala dentro de la gama naranja
    { id: 'c21', num: 21, nombre: 'Naranja', borde: '#ea580c', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c22', num: 22, nombre: 'Naranja Intenso', borde: '#c2410c', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c23', num: 23, nombre: 'Naranja Oscuro', borde: '#9a3412', fondo: '#fff7ed', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c24', num: 24, nombre: 'Mandarina', borde: '#f97316', fondo: '#ffedd5', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c25', num: 25, nombre: 'Naranja Claro', borde: '#fb923c', fondo: '#fff7ed', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c26', num: 26, nombre: 'Durazno', borde: '#fdba74', fondo: '#fff7ed', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c27', num: 27, nombre: 'Damasco', borde: '#f59e0b', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c28', num: 28, nombre: 'Ámbar Cálido', borde: '#fbbf24', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c29', num: 29, nombre: 'Durazno Suave', borde: '#fed7aa', fondo: '#fff7ed', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c30', num: 30, nombre: 'Crema Naranja', borde: '#fde68a', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },

    // 4. Familia del Amarillo (31-40) — escala dentro de la gama amarilla sin saltar a verde
    { id: 'c31', num: 31, nombre: 'Amarillo', borde: '#eab308', fondo: '#fef9c3', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c32', num: 32, nombre: 'Amarillo Dorado', borde: '#ca8a04', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c33', num: 33, nombre: 'Dorado Oscuro', borde: '#a16207', fondo: '#fefce8', texto: '#713f12', tipo: 'sólido' },
    { id: 'c34', num: 34, nombre: 'Amarillo Solar', borde: '#facc15', fondo: '#fef9c3', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c35', num: 35, nombre: 'Amarillo Brillante', borde: '#fde047', fondo: '#fefce8', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c36', num: 36, nombre: 'Canario', borde: '#eab308', fondo: '#fefce8', texto: '#713f12', tipo: 'sólido' },
    { id: 'c37', num: 37, nombre: 'Amarillo Suave', borde: '#fef08a', fondo: '#fefce8', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c38', num: 38, nombre: 'Vainilla', borde: '#fde68a', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },
    { id: 'c39', num: 39, nombre: 'Crema Dorado', borde: '#fef3c7', fondo: '#fffbeb', texto: '#78350f', tipo: 'sólido' },
    { id: 'c40', num: 40, nombre: 'Marfil Cálido', borde: '#fde68a', fondo: '#fffef5', texto: '#854d0e', tipo: 'sólido' },

    // 5. Familia del Verde (41-50) — escala dentro de la gama verde
    { id: 'c41', num: 41, nombre: 'Verde', borde: '#16a34a', fondo: '#dcfce7', texto: '#166534', tipo: 'sólido' },
    { id: 'c42', num: 42, nombre: 'Verde Oscuro', borde: '#15803d', fondo: '#dcfce7', texto: '#14532d', tipo: 'sólido' },
    { id: 'c43', num: 43, nombre: 'Bosque', borde: '#166534', fondo: '#f0fdf4', texto: '#14532d', tipo: 'sólido' },
    { id: 'c44', num: 44, nombre: 'Esmeralda', borde: '#059669', fondo: '#d1fae5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c45', num: 45, nombre: 'Verde Medio', borde: '#22c55e', fondo: '#dcfce7', texto: '#166534', tipo: 'sólido' },
    { id: 'c46', num: 46, nombre: 'Jade Claro', borde: '#10b981', fondo: '#ecfdf5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c47', num: 47, nombre: 'Verde Suave', borde: '#4ade80', fondo: '#f0fdf4', texto: '#166534', tipo: 'sólido' },
    { id: 'c48', num: 48, nombre: 'Menta Verde', borde: '#34d399', fondo: '#ecfdf5', texto: '#047857', tipo: 'sólido' },
    { id: 'c49', num: 49, nombre: 'Verde Claro', borde: '#86efac', fondo: '#f0fdf4', texto: '#15803d', tipo: 'sólido' },
    { id: 'c50', num: 50, nombre: 'Brisa Verde', borde: '#bbf7d0', fondo: '#f0fdf4', texto: '#166534', tipo: 'sólido' },

    // 6. Familia del Morado (51-60) — escala dentro de la gama morada/violeta
    { id: 'c51', num: 51, nombre: 'Morado', borde: '#9333ea', fondo: '#f3e8ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c52', num: 52, nombre: 'Morado Intenso', borde: '#7e22ce', fondo: '#f3e8ff', texto: '#581c87', tipo: 'sólido' },
    { id: 'c53', num: 53, nombre: 'Morado Oscuro', borde: '#6b21a8', fondo: '#faf5ff', texto: '#581c87', tipo: 'sólido' },
    { id: 'c54', num: 54, nombre: 'Violeta', borde: '#8b5cf6', fondo: '#ede9fe', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c55', num: 55, nombre: 'Amatista', borde: '#a855f7', fondo: '#f3e8ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c56', num: 56, nombre: 'Violeta Medio', borde: '#a78bfa', fondo: '#ede9fe', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c57', num: 57, nombre: 'Lila', borde: '#c084fc', fondo: '#faf5ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c58', num: 58, nombre: 'Lavanda', borde: '#c4b5fd', fondo: '#f5f3ff', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c59', num: 59, nombre: 'Lila Claro', borde: '#d8b4fe', fondo: '#faf5ff', texto: '#7e22ce', tipo: 'sólido' },
    { id: 'c60', num: 60, nombre: 'Lavanda Suave', borde: '#ddd6fe', fondo: '#f5f3ff', texto: '#6d28d9', tipo: 'sólido' },

    // 7. Familia del Marrón (61-70) — escala dentro de la gama marrón/tierra
    { id: 'c61', num: 61, nombre: 'Marrón', borde: '#92400e', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c62', num: 62, nombre: 'Marrón Oscuro', borde: '#78350f', fondo: '#fef3c7', texto: '#451a03', tipo: 'sólido' },
    { id: 'c63', num: 63, nombre: 'Chocolate', borde: '#854d0e', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c64', num: 64, nombre: 'Caoba', borde: '#a16207', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c65', num: 65, nombre: 'Canela', borde: '#b45309', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c66', num: 66, nombre: 'Avellana', borde: '#ca8a04', fondo: '#fefce8', texto: '#713f12', tipo: 'sólido' },
    { id: 'c67', num: 67, nombre: 'Caramelo', borde: '#d97706', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c68', num: 68, nombre: 'Tierra Clara', borde: '#d6a66a', fondo: '#fffbeb', texto: '#78350f', tipo: 'sólido' },
    { id: 'c69', num: 69, nombre: 'Arena Cálida', borde: '#e5be8a', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },
    { id: 'c70', num: 70, nombre: 'Tostado Suave', borde: '#f3d5a5', fondo: '#fffdf7', texto: '#78350f', tipo: 'sólido' },

    // 8. Familia del Gris (71-80) — escala de grises de oscuro a claro
    { id: 'c71', num: 71, nombre: 'Gris', borde: '#4b5563', fondo: '#f3f4f6', texto: '#1f2937', tipo: 'sólido' },
    { id: 'c72', num: 72, nombre: 'Gris Carbón', borde: '#1f2937', fondo: '#e5e7eb', texto: '#111827', tipo: 'sólido' },
    { id: 'c73', num: 73, nombre: 'Gris Oscuro', borde: '#374151', fondo: '#e5e7eb', texto: '#1f2937', tipo: 'sólido' },
    { id: 'c74', num: 74, nombre: 'Gris Pizarra', borde: '#475569', fondo: '#f1f5f9', texto: '#1e293b', tipo: 'sólido' },
    { id: 'c75', num: 75, nombre: 'Gris Medio', borde: '#64748b', fondo: '#f1f5f9', texto: '#334155', tipo: 'sólido' },
    { id: 'c76', num: 76, nombre: 'Gris Plata', borde: '#6b7280', fondo: '#f9fafb', texto: '#374151', tipo: 'sólido' },
    { id: 'c77', num: 77, nombre: 'Gris Suave', borde: '#94a3b8', fondo: '#f8fafc', texto: '#475569', tipo: 'sólido' },
    { id: 'c78', num: 78, nombre: 'Gris Ceniza', borde: '#9ca3af', fondo: '#f9fafb', texto: '#4b5563', tipo: 'sólido' },
    { id: 'c79', num: 79, nombre: 'Gris Perla', borde: '#cbd5e1', fondo: '#f8fafc', texto: '#475569', tipo: 'sólido' },
    { id: 'c80', num: 80, nombre: 'Gris Niebla', borde: '#d1d5db', fondo: '#f9fafb', texto: '#374151', tipo: 'sólido' },

    // 9. Fila Granate / Vino (81-90)
    { id: 'c81', num: 81, nombre: 'Granate', borde: '#881337', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c82', num: 82, nombre: 'Granate Profundo', borde: '#9f1239', fondo: '#ffe4e6', texto: '#4c0519', tipo: 'sólido' },
    { id: 'c83', num: 83, nombre: 'Vino Tinto', borde: '#be123c', fondo: '#fff1f2', texto: '#881337', tipo: 'sólido' },
    { id: 'c84', num: 84, nombre: 'Vino Medio', borde: '#db2777', fondo: '#fce7f3', texto: '#831843', tipo: 'sólido' },
    { id: 'c85', num: 85, nombre: 'Frambuesa', borde: '#e11d48', fondo: '#ffe4e6', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c86', num: 86, nombre: 'Frambuesa Suave', borde: '#f43f5e', fondo: '#fff1f2', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c87', num: 87, nombre: 'Rosa Vino', borde: '#ec4899', fondo: '#fdf2f8', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c88', num: 88, nombre: 'Rosa Berry', borde: '#f472b6', fondo: '#fdf2f8', texto: '#831843', tipo: 'sólido' },
    { id: 'c89', num: 89, nombre: 'Pétalo Berry', borde: '#f9a8d4', fondo: '#fdf2f8', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c90', num: 90, nombre: 'Rosa Suave', borde: '#fbcfe8', fondo: '#fff5f9', texto: '#831843', tipo: 'sólido' },

    // 10. Fila Turquesa / Cian (91-100)
    { id: 'c91', num: 91, nombre: 'Turquesa', borde: '#0d9488', fondo: '#ccfbf1', texto: '#115e59', tipo: 'sólido' },
    { id: 'c92', num: 92, nombre: 'Turquesa Oscuro', borde: '#0f766e', fondo: '#ccfbf1', texto: '#134e4a', tipo: 'sólido' },
    { id: 'c93', num: 93, nombre: 'Teal Profundo', borde: '#115e59', fondo: '#f0fdfa', texto: '#134e4a', tipo: 'sólido' },
    { id: 'c94', num: 94, nombre: 'Cian', borde: '#0891b2', fondo: '#cffafe', texto: '#155e75', tipo: 'sólido' },
    { id: 'c95', num: 95, nombre: 'Turquesa Medio', borde: '#14b8a6', fondo: '#ccfbf1', texto: '#115e59', tipo: 'sólido' },
    { id: 'c96', num: 96, nombre: 'Cian Claro', borde: '#06b6d4', fondo: '#ecfeff', texto: '#155e75', tipo: 'sólido' },
    { id: 'c97', num: 97, nombre: 'Aguamarina', borde: '#2dd4bf', fondo: '#f0fdfa', texto: '#0f766e', tipo: 'sólido' },
    { id: 'c98', num: 98, nombre: 'Celeste Cian', borde: '#22d3ee', fondo: '#ecfeff', texto: '#164e63', tipo: 'sólido' },
    { id: 'c99', num: 99, nombre: 'Aguamarina Claro', borde: '#5eead4', fondo: '#f0fdfa', texto: '#115e59', tipo: 'sólido' },
    { id: 'c100', num: 100, nombre: 'Brisa Cian', borde: '#99f6e4', fondo: '#f0fdfa', texto: '#134e4a', tipo: 'sólido' },

    // 11. Fila Lima / Oliva (101-110)
    { id: 'c101', num: 101, nombre: 'Lima', borde: '#65a30d', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c102', num: 102, nombre: 'Lima Oscuro', borde: '#4d7c0f', fondo: '#ecfccb', texto: '#365314', tipo: 'sólido' },
    { id: 'c103', num: 103, nombre: 'Oliva Oscuro', borde: '#3f6212', fondo: '#f7fee7', texto: '#365314', tipo: 'sólido' },
    { id: 'c104', num: 104, nombre: 'Oliva', borde: '#84cc16', fondo: '#ecfccb', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c105', num: 105, nombre: 'Lima Brillante', borde: '#a3e635', fondo: '#f7fee7', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c106', num: 106, nombre: 'Oliva Suave', borde: '#bef264', fondo: '#f7fee7', texto: '#4d7c0f', tipo: 'sólido' },
    { id: 'c107', num: 107, nombre: 'Pistacho', borde: '#a3e635', fondo: '#f7fee7', texto: '#365314', tipo: 'sólido' },
    { id: 'c108', num: 108, nombre: 'Lima Suave', borde: '#d9f99d', fondo: '#f7fee7', texto: '#3f6212', tipo: 'sólido' },
    { id: 'c109', num: 109, nombre: 'Crema Lima', borde: '#ecfccb', fondo: '#fcfef8', texto: '#4d7c0f', tipo: 'sólido' },
    { id: 'c110', num: 110, nombre: 'Brisa Lima', borde: '#d9f99d', fondo: '#fafff2', texto: '#365314', tipo: 'sólido' },

    // 12. Fila Fucsia / Magenta (111-120)
    { id: 'c111', num: 111, nombre: 'Fucsia', borde: '#c026d3', fondo: '#fae8ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c112', num: 112, nombre: 'Fucsia Oscuro', borde: '#a21caf', fondo: '#fae8ff', texto: '#701a75', tipo: 'sólido' },
    { id: 'c113', num: 113, nombre: 'Magenta', borde: '#db2777', fondo: '#fce7f3', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c114', num: 114, nombre: 'Orquídea', borde: '#d946ef', fondo: '#fae8ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c115', num: 115, nombre: 'Fucsia Medio', borde: '#e879f9', fondo: '#fdf4ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c116', num: 116, nombre: 'Rosa Fucsia', borde: '#ec4899', fondo: '#fdf2f8', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c117', num: 117, nombre: 'Orquídea Claro', borde: '#f0abfc', fondo: '#fdf4ff', texto: '#a21caf', tipo: 'sólido' },
    { id: 'c118', num: 118, nombre: 'Rosa Chicle', borde: '#f472b6', fondo: '#fdf2f8', texto: '#9d174d', tipo: 'sólido' },
    { id: 'c119', num: 119, nombre: 'Lila Fucsia', borde: '#f5d0fe', fondo: '#fdf4ff', texto: '#86198f', tipo: 'sólido' },
    { id: 'c120', num: 120, nombre: 'Rosa Suave', borde: '#fbcfe8', fondo: '#fff5f9', texto: '#9d174d', tipo: 'sólido' },

    // 13. Fila Índigo / Cobalto (121-130)
    { id: 'c121', num: 121, nombre: 'Índigo', borde: '#4f46e5', fondo: '#e0e7ff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c122', num: 122, nombre: 'Índigo Oscuro', borde: '#4338ca', fondo: '#e0e7ff', texto: '#312e81', tipo: 'sólido' },
    { id: 'c123', num: 123, nombre: 'Cobalto Profundo', borde: '#3730a3', fondo: '#eef2ff', texto: '#312e81', tipo: 'sólido' },
    { id: 'c124', num: 124, nombre: 'Índigo Medio', borde: '#6366f1', fondo: '#eef2ff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c125', num: 125, nombre: 'Azul Índigo', borde: '#818cf8', fondo: '#eef2ff', texto: '#4338ca', tipo: 'sólido' },
    { id: 'c126', num: 126, nombre: 'Pervinca', borde: '#a5b4fc', fondo: '#f5f7ff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c127', num: 127, nombre: 'Índigo Claro', borde: '#c7d2fe', fondo: '#f5f7ff', texto: '#4338ca', tipo: 'sólido' },
    { id: 'c128', num: 128, nombre: 'Lavanda Azul', borde: '#a5b4fc', fondo: '#eef2ff', texto: '#312e81', tipo: 'sólido' },
    { id: 'c129', num: 129, nombre: 'Brisa Índigo', borde: '#c7d2fe', fondo: '#f8faff', texto: '#3730a3', tipo: 'sólido' },
    { id: 'c130', num: 130, nombre: 'Cielo Índigo', borde: '#e0e7ff', fondo: '#f8faff', texto: '#312e81', tipo: 'sólido' },

    // 14. Fila Ámbar / Mostaza (131-140)
    { id: 'c131', num: 131, nombre: 'Ámbar', borde: '#d97706', fondo: '#fef3c7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c132', num: 132, nombre: 'Ámbar Oscuro', borde: '#b45309', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c133', num: 133, nombre: 'Mostaza', borde: '#ca8a04', fondo: '#fef9c3', texto: '#713f12', tipo: 'sólido' },
    { id: 'c134', num: 134, nombre: 'Ámbar Medio', borde: '#f59e0b', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },
    { id: 'c135', num: 135, nombre: 'Mostaza Claro', borde: '#eab308', fondo: '#fefce8', texto: '#854d0e', tipo: 'sólido' },
    { id: 'c136', num: 136, nombre: 'Ámbar Dorado', borde: '#fbbf24', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },
    { id: 'c137', num: 137, nombre: 'Ámbar Claro', borde: '#fcd34d', fondo: '#fffbeb', texto: '#78350f', tipo: 'sólido' },
    { id: 'c138', num: 138, nombre: 'Miel Suave', borde: '#fde68a', fondo: '#fffdf5', texto: '#92400e', tipo: 'sólido' },
    { id: 'c139', num: 139, nombre: 'Ámbar Pálido', borde: '#fef3c7', fondo: '#fffdf5', texto: '#78350f', tipo: 'sólido' },
    { id: 'c140', num: 140, nombre: 'Brisa Ámbar', borde: '#fde68a', fondo: '#fffef9', texto: '#854d0e', tipo: 'sólido' },

    // 15. Fila Esmeralda / Menta (141-150)
    { id: 'c141', num: 141, nombre: 'Esmeralda', borde: '#059669', fondo: '#d1fae5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c142', num: 142, nombre: 'Esmeralda Oscuro', borde: '#047857', fondo: '#d1fae5', texto: '#064e3b', tipo: 'sólido' },
    { id: 'c143', num: 143, nombre: 'Pino Esmeralda', borde: '#065f46', fondo: '#ecfdf5', texto: '#064e3b', tipo: 'sólido' },
    { id: 'c144', num: 144, nombre: 'Esmeralda Medio', borde: '#10b981', fondo: '#ecfdf5', texto: '#065f46', tipo: 'sólido' },
    { id: 'c145', num: 145, nombre: 'Menta Intensa', borde: '#34d399', fondo: '#ecfdf5', texto: '#047857', tipo: 'sólido' },
    { id: 'c146', num: 146, nombre: 'Menta', borde: '#6ee7b7', fondo: '#f0fdf4', texto: '#065f46', tipo: 'sólido' },
    { id: 'c147', num: 147, nombre: 'Menta Claro', borde: '#a7f3d0', fondo: '#f0fdf4', texto: '#047857', tipo: 'sólido' },
    { id: 'c148', num: 148, nombre: 'Menta Suave', borde: '#d1fae5', fondo: '#f7fefb', texto: '#065f46', tipo: 'sólido' },
    { id: 'c149', num: 149, nombre: 'Espuma Menta', borde: '#a7f3d0', fondo: '#f7fefb', texto: '#064e3b', tipo: 'sólido' },
    { id: 'c150', num: 150, nombre: 'Brisa Menta', borde: '#d1fae5', fondo: '#fafffc', texto: '#047857', tipo: 'sólido' },

    // 16. Fila Violeta / Ciruela (151-160)
    { id: 'c151', num: 151, nombre: 'Violeta', borde: '#7c3aed', fondo: '#ede9fe', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c152', num: 152, nombre: 'Violeta Oscuro', borde: '#6d28d9', fondo: '#ede9fe', texto: '#4c1d95', tipo: 'sólido' },
    { id: 'c153', num: 153, nombre: 'Ciruela Oscuro', borde: '#5b21b6', fondo: '#f5f3ff', texto: '#4c1d95', tipo: 'sólido' },
    { id: 'c154', num: 154, nombre: 'Violeta Medio', borde: '#8b5cf6', fondo: '#f5f3ff', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c155', num: 155, nombre: 'Ciruela', borde: '#9333ea', fondo: '#f3e8ff', texto: '#6b21a8', tipo: 'sólido' },
    { id: 'c156', num: 156, nombre: 'Violeta Claro', borde: '#a78bfa', fondo: '#f5f3ff', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c157', num: 157, nombre: 'Ciruela Suave', borde: '#c4b5fd', fondo: '#f5f3ff', texto: '#6d28d9', tipo: 'sólido' },
    { id: 'c158', num: 158, nombre: 'Lavanda Violeta', borde: '#ddd6fe', fondo: '#faf9ff', texto: '#5b21b6', tipo: 'sólido' },
    { id: 'c159', num: 159, nombre: 'Violeta Pálido', borde: '#ede9fe', fondo: '#faf9ff', texto: '#4c1d95', tipo: 'sólido' },
    { id: 'c160', num: 160, nombre: 'Brisa Violeta', borde: '#ddd6fe', fondo: '#fcfbff', texto: '#6d28d9', tipo: 'sólido' },

    // 17. Fila Coral / Terracota (161-170)
    { id: 'c161', num: 161, nombre: 'Coral', borde: '#f43f5e', fondo: '#ffe4e6', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c162', num: 162, nombre: 'Terracota', borde: '#c2410c', fondo: '#ffedd5', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c163', num: 163, nombre: 'Coral Oscuro', borde: '#e11d48', fondo: '#ffe4e6', texto: '#881337', tipo: 'sólido' },
    { id: 'c164', num: 164, nombre: 'Terracota Medio', borde: '#ea580c', fondo: '#fff7ed', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c165', num: 165, nombre: 'Coral Medio', borde: '#fb7185', fondo: '#fff1f2', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c166', num: 166, nombre: 'Salmón Coral', borde: '#fb923c', fondo: '#fff7ed', texto: '#9a3412', tipo: 'sólido' },
    { id: 'c167', num: 167, nombre: 'Coral Claro', borde: '#fda4af', fondo: '#fff1f2', texto: '#881337', tipo: 'sólido' },
    { id: 'c168', num: 168, nombre: 'Durazno Coral', borde: '#fdba74', fondo: '#fff7ed', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c169', num: 169, nombre: 'Coral Suave', borde: '#fecdd3', fondo: '#fff5f7', texto: '#9f1239', tipo: 'sólido' },
    { id: 'c170', num: 170, nombre: 'Brisa Coral', borde: '#fed7aa', fondo: '#fffaf5', texto: '#9a3412', tipo: 'sólido' },

    // 18. Fila Cielo / Zafiro (171-180)
    { id: 'c171', num: 171, nombre: 'Zafiro', borde: '#0284c7', fondo: '#e0f2fe', texto: '#075985', tipo: 'sólido' },
    { id: 'c172', num: 172, nombre: 'Zafiro Oscuro', borde: '#0369a1', fondo: '#e0f2fe', texto: '#0c4a6e', tipo: 'sólido' },
    { id: 'c173', num: 173, nombre: 'Cielo Profundo', borde: '#0ea5e9', fondo: '#f0f9ff', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c174', num: 174, nombre: 'Zafiro Medio', borde: '#38bdf8', fondo: '#f0f9ff', texto: '#075985', tipo: 'sólido' },
    { id: 'c175', num: 175, nombre: 'Azul Cielo', borde: '#7dd3fc', fondo: '#f0f9ff', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c176', num: 176, nombre: 'Cielo Suave', borde: '#bae6fd', fondo: '#f0f9ff', texto: '#0c4a6e', tipo: 'sólido' },
    { id: 'c177', num: 177, nombre: 'Celeste Cielo', borde: '#7dd3fc', fondo: '#f8fcff', texto: '#075985', tipo: 'sólido' },
    { id: 'c178', num: 178, nombre: 'Brisa Cielo', borde: '#bae6fd', fondo: '#f8fcff', texto: '#0369a1', tipo: 'sólido' },
    { id: 'c179', num: 179, nombre: 'Cielo Pálido', borde: '#e0f2fe', fondo: '#fafdff', texto: '#0c4a6e', tipo: 'sólido' },
    { id: 'c180', num: 180, nombre: 'Aire Cielo', borde: '#bae6fd', fondo: '#fcfefe', texto: '#075985', tipo: 'sólido' },

    // 19. Fila Bronce / Canela (181-190)
    { id: 'c181', num: 181, nombre: 'Bronce', borde: '#b45309', fondo: '#ffedd5', texto: '#78350f', tipo: 'sólido' },
    { id: 'c182', num: 182, nombre: 'Bronce Oscuro', borde: '#92400e', fondo: '#fef3c7', texto: '#451a03', tipo: 'sólido' },
    { id: 'c183', num: 183, nombre: 'Canela Oscuro', borde: '#78350f', fondo: '#fef3c7', texto: '#451a03', tipo: 'sólido' },
    { id: 'c184', num: 184, nombre: 'Bronce Medio', borde: '#d97706', fondo: '#fef3c7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c185', num: 185, nombre: 'Canela Medio', borde: '#b45309', fondo: '#fff7ed', texto: '#7c2d12', tipo: 'sólido' },
    { id: 'c186', num: 186, nombre: 'Bronce Claro', borde: '#f59e0b', fondo: '#fffbeb', texto: '#92400e', tipo: 'sólido' },
    { id: 'c187', num: 187, nombre: 'Canela Claro', borde: '#fbbf24', fondo: '#fffbeb', texto: '#78350f', tipo: 'sólido' },
    { id: 'c188', num: 188, nombre: 'Bronce Suave', borde: '#fcd34d', fondo: '#fffdf7', texto: '#92400e', tipo: 'sólido' },
    { id: 'c189', num: 189, nombre: 'Canela Suave', borde: '#fde68a', fondo: '#fffdf7', texto: '#78350f', tipo: 'sólido' },
    { id: 'c190', num: 190, nombre: 'Arena Bronce', borde: '#fef3c7', fondo: '#fffef9', texto: '#78350f', tipo: 'sólido' },

    // 20. Fila Pizarra / Acero (191-200)
    { id: 'c191', num: 191, nombre: 'Pizarra', borde: '#334155', fondo: '#f1f5f9', texto: '#0f172a', tipo: 'sólido' },
    { id: 'c192', num: 192, nombre: 'Pizarra Oscuro', borde: '#1e293b', fondo: '#e2e8f0', texto: '#0f172a', tipo: 'sólido' },
    { id: 'c193', num: 193, nombre: 'Acero Oscuro', borde: '#0f172a', fondo: '#e2e8f0', texto: '#1e293b', tipo: 'sólido' },
    { id: 'c194', num: 194, nombre: 'Pizarra Medio', borde: '#475569', fondo: '#f1f5f9', texto: '#1e293b', tipo: 'sólido' },
    { id: 'c195', num: 195, nombre: 'Acero Medio', borde: '#64748b', fondo: '#f8fafc', texto: '#334155', tipo: 'sólido' },
    { id: 'c196', num: 196, nombre: 'Pizarra Claro', borde: '#94a3b8', fondo: '#f8fafc', texto: '#334155', tipo: 'sólido' },
    { id: 'c197', num: 197, nombre: 'Acero Claro', borde: '#cbd5e1', fondo: '#f8fafc', texto: '#475569', tipo: 'sólido' },
    { id: 'c198', num: 198, nombre: 'Pizarra Suave', borde: '#cbd5e1', fondo: '#fcfcfd', texto: '#334155', tipo: 'sólido' },
    { id: 'c199', num: 199, nombre: 'Acero Suave', borde: '#e2e8f0', fondo: '#fcfcfd', texto: '#475569', tipo: 'sólido' },
    { id: 'c200', num: 200, nombre: 'Brisa Acero', borde: '#cbd5e1', fondo: '#fefeff', texto: '#1e293b', tipo: 'sólido' }
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
    const tabs = ['arbol', 'columnas', 'ramas', 'admin', 'matrimonios'];
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
    if (pestana === 'matrimonios') {
            if (typeof renderizarPestanaMatrimonios === 'function') renderizarPestanaMatrimonios();
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
function obtenerInfoBanderasYTexto(persona, visitados = new Set()) {
  if (!persona) {
    return { htmlBanderas: '', textoTag: '', paisesPadreLista: [], paisesMadreLista: [] };
  }

  const nombreCompleto = `${persona.nombre || ''} ${persona.apellido || ''}`.trim();
  const claveVisita = persona.id || nombreCompleto;
  if (visitados.has(claveVisita)) {
    return { htmlBanderas: '', textoTag: '', paisesPadreLista: [], paisesMadreLista: [] };
  }

  const nuevosVisitados = new Set(visitados);
  nuevosVisitados.add(claveVisita);

  const paisesSet = new Set();
  const textosPaises = [];
  const agregarTexto = (pais) => {
    const limpio = (pais || '').trim();
    if (limpio && !paisesSet.has(limpio)) {
      paisesSet.add(limpio);
      textosPaises.push(limpio);
    }
  };

  // 1. Nacionalidad propia explícita
  const paisPropio = (persona.nacionalidad || '').trim();
  if (paisPropio !== '') {
    paisPropio.split('/').forEach(agregarTexto);
  }

  // 2. Buscar padres biológicos directos
  let padre = null;
  let madre = null;
  if (typeof listaPersonas !== 'undefined' && nombreCompleto) {
    padre = listaPersonas.find(p => p.sexo === 'M' && Array.isArray(p.hijos) && p.hijos.includes(nombreCompleto)) || null;
    madre = listaPersonas.find(p => p.sexo === 'F' && Array.isArray(p.hijos) && p.hijos.includes(nombreCompleto)) || null;
  }

  // Acumular países de toda la línea paterna y materna (propios + heredados)
  const paisesPadre = new Set();
  const paisesMadre = new Set();

  if (padre) {
    if (padre.nacionalidad) {
      padre.nacionalidad.split('/').forEach(p => {
        const limpio = p.trim();
        if (limpio) {
          paisesPadre.add(limpio);
          agregarTexto(limpio);
        }
      });
    }
    const infoPadre = obtenerInfoBanderasYTexto(padre, nuevosVisitados);
    (infoPadre.paisesPadreLista || []).forEach(p => { paisesPadre.add(p); agregarTexto(p); });
    (infoPadre.paisesMadreLista || []).forEach(p => { paisesPadre.add(p); agregarTexto(p); });
  }

  if (madre) {
    if (madre.nacionalidad) {
      madre.nacionalidad.split('/').forEach(p => {
        const limpio = p.trim();
        if (limpio) {
          paisesMadre.add(limpio);
          agregarTexto(limpio);
        }
      });
    }
    const infoMadre = obtenerInfoBanderasYTexto(madre, nuevosVisitados);
    (infoMadre.paisesPadreLista || []).forEach(p => { paisesMadre.add(p); agregarTexto(p); });
    (infoMadre.paisesMadreLista || []).forEach(p => { paisesMadre.add(p); agregarTexto(p); });
  }

  if (paisesSet.size === 0) {
    return { htmlBanderas: '', textoTag: '', paisesPadreLista: [], paisesMadreLista: [] };
  }

  // 3. Construir HTML de banderas del padre y de la madre
  let htmlPadre = '';
  let renderizoPadre = false;
  paisesPadre.forEach(pais => {
    const iso = obtenerCodigoISO(pais);
    if (iso) {
      htmlPadre += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="Padre: ${pais}" class="bandera-doble-item">`;
      renderizoPadre = true;
    }
  });

  let htmlMadre = '';
  let renderizoMadre = false;
  paisesMadre.forEach(pais => {
    const iso = obtenerCodigoISO(pais);
    if (iso) {
      htmlMadre += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="Madre: ${pais}" class="bandera-doble-item">`;
      renderizoMadre = true;
    }
  });

  let htmlBanderas = '<div class="banderas-contenedor-der">';
  if (renderizoPadre || renderizoMadre) {
    htmlBanderas += htmlPadre;
    if (renderizoPadre && renderizoMadre) {
      htmlBanderas += '<div class="separador-banderas" style="width: 24px; height: 2px; background: #cbd5e1; margin: 3px auto; border-radius: 1px;"></div>';
    }
    htmlBanderas += htmlMadre;
  } else {
    paisesSet.forEach(pais => {
      const iso = obtenerCodigoISO(pais);
      if (iso) {
        htmlBanderas += `<img src="https://flagcdn.com/w40/${iso}.png" alt="${pais}" title="${pais}" class="bandera-doble-item">`;
      }
    });
  }
  htmlBanderas += '</div>';

  const textoTag = textosPaises.join(' / ');
  return {
    htmlBanderas,
    textoTag,
    paisesPadreLista: Array.from(paisesPadre),
    paisesMadreLista: Array.from(paisesMadre)
  };
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

function obtenerEstiloPersona(persona, contexto = null) {
    const nombreCompleto = `${persona.nombre} ${persona.apellido || ''}`.trim();

    const tienePadreRegistrado = listaPersonas.some(p => p.hijos && p.hijos.includes(nombreCompleto));
    if (persona.sexo === 'M' && !tienePadreRegistrado) {
        if (persona.parejas && persona.parejas.length > 0) {
        const nombrePrimeraEsposa = persona.parejas[0];
        const ramaEsposa =
            listaRamas.find(r => r.hombre === nombreCompleto && r.mujer === nombrePrimeraEsposa) ||
            listaRamas.find(r => r.hombre === nombreCompleto) ||
            listaRamas.find(r => r.mujer === nombrePrimeraEsposa || r.hombre === nombrePrimeraEsposa);
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
                const estiloPareja = obtenerEstiloPersona(parejaObj, contexto);
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
            const estiloMadre = obtenerEstiloPersona(madreBiologica, contexto);
            if (estiloMadre.tipo === 'unico' || estiloMadre.tipo === '50-50') {
                colorHeredadoObj = estiloMadre.color || estiloMadre.top;
            }
        }
    }

    const ramasDirectas = listaRamas.filter(r => r.mujer === nombreCompleto || r.hombre === nombreCompleto);
    let colorPropioObj = null;
    const ramaContexto = (contexto && contexto.rol === 'pareja' && contexto.cabeza)
            ? listaRamas.find(r => (r.hombre === contexto.cabeza && r.mujer === nombreCompleto) || (r.mujer === contexto.cabeza && r.hombre === nombreCompleto))
            : null;
        if (ramaContexto) {
            colorPropioObj = obtenerObjetoColorPorIdOPersonalizado(ramaContexto.colorId);
        } else if (ramasDirectas.length > 0) {
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

function crearElementoTarjeta(persona, contexto = null) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-familiar";

    const estiloInfo = obtenerEstiloPersona(persona, contexto);
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
              ${persona.parejas?.length ? persona.parejas.map((p) => { const nombreActual = `${persona.nombre || ''} ${persona.apellido || ''}`.trim(); const personaEnLista = (typeof listaPersonas !== 'undefined' && Array.isArray(listaPersonas)) ? listaPersonas.find(item => String(item.id) === String(p) || `${item.nombre || ''} ${item.apellido || ''}`.trim() === String(p).trim()) : null; const nombrePareja = personaEnLista ? `${personaEnLista.nombre || ''} ${personaEnLista.apellido || ''}`.trim() : String(p).trim(); const icono = typeof obtenerIconoPareja === 'function' ? obtenerIconoPareja(nombreActual, nombrePareja) : '❤'; return `<li>${icono} ${nombrePareja}</li>`; }).join('') : '<li>Sin pareja registrada</li>'}
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
        padreBox.appendChild(crearElementoTarjeta(cabeza, { rol: 'cabeza', cabeza: nombreCabeza }));
        nucleoDiv.appendChild(padreBox);

        const nombresParejasSet = new Set(cabeza.parejas || []);
        listaPersonas.forEach(p => {
            if (p.sexo === 'F' && p.parejas && p.parejas.includes(nombreCabeza)) {
                nombresParejasSet.add(`${p.nombre} ${p.apellido || ''}`.trim());
            }
        });

        const listaParejas = Array.from(nombresParejasSet).sort((a, b) => {
    const aTieneRamaPrevia = listaRamas.some(r => (r.mujer === a || r.hombre === a) && r.hombre !== nombreCabeza && r.mujer !== nombreCabeza);
    const bTieneRamaPrevia = listaRamas.some(r => (r.mujer === b || r.hombre === b) && r.hombre !== nombreCabeza && r.mujer !== nombreCabeza);
    return (aTieneRamaPrevia ? 1 : 0) - (bTieneRamaPrevia ? 1 : 0);
});

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
                    colRama.appendChild(crearElementoTarjeta(parejaObj, { rol: 'pareja', cabeza: nombreCabeza, pareja: nomPareja }));
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
              contHijos.appendChild(crearElementoTarjeta(hijoObj, { rol: 'hijo', cabeza: nombreCabeza, pareja: nomPareja }));              
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

    const hombresOrdenados = listaPersonas
        .filter(p => p.sexo === 'M')
        .map(h => ({
            nom: `${h.nombre} ${h.apellido || ''}`.trim(),
            gen: h.generacion
        }))
        .sort((a, b) => a.nom.localeCompare(b.nom, "es"));

    hombresOrdenados.forEach(h => {
        selHombre.innerHTML += `<option value="${h.nom}">${h.nom} (${h.gen})</option>`;
    });

    const mujeresOrdenadas = listaPersonas
        .filter(p => p.sexo === 'F')
        .map(m => ({
            nom: `${m.nombre} ${m.apellido || ''}`.trim(),
            gen: m.generacion
        }))
        .sort((a, b) => a.nom.localeCompare(b.nom, "es"));

    mujeresOrdenadas.forEach(m => {
        selMujer.innerHTML += `<option value="${m.nom}">${m.nom} (${m.gen})</option>`;
    });
}
function asignarColorACuadroVacio(idColor) {
    const col = PALETA_COLORES.find(c => c.id === idColor);
    if (!col) return;

    const hexIngresado = prompt(
        `Asignar color a C${col.num} (ej. #16a34a):`,
        "#2563eb"
    );
    if (!hexIngresado) return;

    const hexLimpio = hexIngresado.trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(hexLimpio)) {
        alert("Ingresa un código hexadecimal válido de 6 dígitos, por ejemplo: #2563eb");
        return;
    }

    const nombreColor = prompt("Nombre para este color (opcional):", `Color ${col.num}`) || `Color ${col.num}`;

    col.nombre = nombreColor.trim();
    col.borde = hexLimpio;
    col.fondo = `${hexLimpio}25`;
    col.texto = "#111827";
    col.tipo = "sólido";
    col.vacio = false;

    const inpColor = document.getElementById("rama-color-seleccionado");
    if (inpColor) inpColor.value = col.id;

    guardarEnMemoriaLocal();
    renderizarPaletaColores();
}

function editarColorPaleta(idColor) {
    const col = PALETA_COLORES.find(c => c.id === idColor);
    if (!col) return;

    const hexActual = /^#[0-9a-fA-F]{6}$/.test(col.borde) ? col.borde : "#dc2626";
    const hexIngresado = prompt(
        `Editar color de C${col.num} (${col.nombre}) — ingresa hex de 6 dígitos:`,
        hexActual
    );
    if (!hexIngresado) return;

    const hexLimpio = hexIngresado.trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(hexLimpio)) {
        alert("Ingresa un código hexadecimal válido de 6 dígitos, por ejemplo: #dc2626");
        return;
    }

    const nombreIngresado = prompt("Editar nombre del color:", col.nombre);
    if (nombreIngresado && nombreIngresado.trim()) {
        col.nombre = nombreIngresado.trim();
    }

    col.borde = hexLimpio;
    col.fondo = `${hexLimpio}25`;
    col.texto = "#111827";
    col.tipo = "sólido";
    col.vacio = false;

    if (typeof guardarEnMemoriaLocal === "function") {
        guardarEnMemoriaLocal();
    }
    if (typeof renderizarLeyendaRamas === "function") {
        renderizarLeyendaRamas();
    }
    if (typeof renderizarArbol === "function") {
        renderizarArbol();
    }
    renderizarPaletaColores();
}

function renderizarPaletaColores() {
    const grid = document.getElementById("paleta-colores-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const esMovil = window.innerWidth <= 768;
    grid.style.setProperty("display", "grid", "important");
    grid.style.setProperty(
        "grid-template-columns",
        esMovil ? "repeat(5, minmax(0, 1fr))" : "repeat(10, minmax(0, 1fr))",
        "important"
    );
    grid.style.setProperty("gap", "5px", "important");

    const coloresUsados = listaRamas.map(r => r.colorId);
    const seleccionadoActual = document.getElementById("rama-color-seleccionado")?.value || "";

    PALETA_COLORES.forEach(col => {
        const estaUsado = coloresUsados.includes(col.id);
        const estaSeleccionado = seleccionadoActual === col.id;
        const swatch = document.createElement("div");
        swatch.className = `color-swatch ${estaUsado ? 'bloqueado' : ''} ${estaSeleccionado ? 'seleccionado' : ''}`;

        swatch.style.minHeight = "42px";
        swatch.style.padding = "3px 4px";
        swatch.style.borderWidth = estaSeleccionado ? "3px" : "2px";
        swatch.style.borderStyle = col.vacio ? "dashed" : "solid";
        swatch.style.borderRadius = "6px";
        swatch.style.position = "relative";
        swatch.style.display = "flex";
        swatch.style.flexDirection = "column";
        swatch.style.alignItems = "center";
        swatch.style.justifyContent = "center";
        swatch.style.fontSize = "0.7rem";
        swatch.style.lineHeight = "1.1";
        swatch.style.overflow = "hidden";
        swatch.style.cursor = "pointer";

        if (col.vacio) {
            swatch.style.setProperty("background", "transparent", "important");
            swatch.style.setProperty("border-color", estaSeleccionado ? "#2563eb" : "#cbd5e1", "important");
            swatch.style.setProperty("color", "#64748b", "important");
            swatch.title = `C${col.num} disponible — clic para asignar color`;
            swatch.innerHTML = `<span style="font-weight:700;">C${col.num}</span><small style="font-size:0.6rem;">+ Color</small>`;
            swatch.onclick = () => asignarColorACuadroVacio(col.id);
        } else {
            swatch.style.setProperty("background", col.fondo, "important");
            swatch.style.setProperty("border-color", estaSeleccionado ? "#111827" : col.borde, "important");
            swatch.style.setProperty("color", col.texto, "important");
            swatch.style.setProperty("opacity", "1", "important");
            swatch.title = `C${col.num} - ${col.nombre}${estaUsado ? ' (En uso — clic para seleccionar, doble clic o ✏️ para editar)' : ' (Clic para seleccionar, ✏️ para editar)'}`;

            const candadoBadge = estaUsado
                ? `<span style="position:absolute; top:2px; left:3px; font-size:0.58rem;" title="Color en uso">🔒</span>`
                : "";

            const editBadge = `<span data-editar-color="${col.id}" style="position:absolute; top:1px; right:3px; font-size:0.62rem; cursor:pointer;" title="Editar color">✏️</span>`;

            swatch.innerHTML = `${candadoBadge}${editBadge}<span style="font-weight:700;">C${col.num}</span><small style="font-size:0.58rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:100%;">${col.nombre}</small>`;

            swatch.onclick = (e) => {
                const inpColor = document.getElementById("rama-color-seleccionado");
                if (inpColor) inpColor.value = col.id;

                if (e.target && e.target.closest && e.target.closest(`[data-editar-color="${col.id}"]`)) {
                    e.stopPropagation();
                    renderizarPaletaColores();
                    editarColorPaleta(col.id);
                    return;
                }

                renderizarPaletaColores();
            };

            swatch.ondblclick = (e) => {
                e.stopPropagation();
                editarColorPaleta(col.id);
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
    const cabezas = listaPersonas
        .filter(p => p.sexo === 'M')
        .sort((a, b) => {
            const nomA = `${a.nombre} ${a.apellido || ''}`.trim();
            const nomB = `${b.nombre} ${b.apellido || ''}`.trim();
            return nomA.localeCompare(nomB, "es");
        });

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

    const personasOrdenadas = [...listaPersonas]
        .map(p => ({
            nom: `${p.nombre} ${p.apellido || ''}`.trim(),
            gen: p.generacion
        }))
        .sort((a, b) => a.nom.localeCompare(b.nom, "es"));

    personasOrdenadas.forEach(p => {
        const esPareja = parejasSeleccionadas.includes(p.nom);
        const esHijo = hijosSeleccionados.includes(p.nom);

        contParejas.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-pareja" value="${p.nom}" ${esPareja ? 'checked' : ''}> ${p.nom} (${p.gen})
            </label>
        `;

        contHijos.innerHTML += `
            <label class="checkbox-item-label">
                <input type="checkbox" name="check-hijo" value="${p.nom}" ${esHijo ? 'checked' : ''}> ${p.nom} (${p.gen})
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
function importarJSON(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed || !Array.isArray(parsed.personas) || !Array.isArray(parsed.ramas)) {
                alert("El archivo JSON no tiene el formato esperado ({ personas, ramas }).");
                return;
            }

            listaPersonas = parsed.personas;
            listaRamas = parsed.ramas;

            if (typeof guardarEnMemoriaLocal === "function") {
                guardarEnMemoriaLocal();
            } else {
                localStorage.setItem("familia_datos_privados", JSON.stringify({ personas: listaPersonas, ramas: listaRamas }));
            }

            if (typeof refrescarTodo === "function") {
                refrescarTodo();
            }

            alert(`Archivo "${file.name}" cargado correctamente.`);
        } catch (err) {
            console.error("Error al importar JSON:", err);
            alert("No se pudo leer el archivo JSON. Verifique que sea válido.");
        } finally {
            event.target.value = "";
        }
    };
    reader.readAsText(file, "utf-8");
}

function limpiarTodosLosDatos() {
    const confirmar = confirm("¿Seguro que desea borrar todos los datos actuales de la pantalla y la memoria local para empezar uno nuevo? (Asegúrese de haber exportado su JSON antes si desea conservarlo).");
    if (!confirmar) return;

    listaPersonas = [];
    listaRamas = [];

    if (typeof guardarEnMemoriaLocal === "function") {
        guardarEnMemoriaLocal();
    } else {
        localStorage.setItem("familia_datos_privados", JSON.stringify({ personas: [], ramas: [] }));
    }

    if (typeof refrescarTodo === "function") {
        refrescarTodo();
    }
}
