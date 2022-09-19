/* //Modal Carrito

const modalContenedor = document.querySelector('.modalCont')
abrirCarrito = document.getElementById('abrirCar')
cerrarCarrito = document.getElementById('cerrar')
modalCarrito = document.querySelector('.modProductos')


abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
})

//Modal Inicio

const InicioContenedor = document.querySelector('.Modal-Cont-Inicio')
abrirInicio = document.getElementById('ing')
cerrarInicio = document.getElementById('cerrarInicio')
modalInicio = document.querySelector('.Modal-Inicio')


abrirInicio.addEventListener('click', () => {
    InicioContenedor.classList.toggle('modal-active')
})

cerrarInicio.addEventListener('click', () => {
    InicioContenedor.classList.remove('modal-active')
})

InicioContenedor.addEventListener('click', () => {
    cerrarInicio.click();
})

modalInicio.addEventListener('click', (e) => {
    e.stopPropagation();
})

 */