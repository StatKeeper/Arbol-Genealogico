// Habilitar arrastre del lienzo con el mouse (Pan/Drag)
document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
    configurarArrastreLienzo();
});

function configurarArrastreLienzo() {
    const lienzo = document.getElementById("canvas-arbol");
    let estaArrastrando = false;
    let inicioX, inicioY, scrollLeft, scrollTop;

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
