
const contenedorProductos = document.getElementById('ProdCont')

const ShowP = (elementos) => {
    elementos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('NewProd');
        div.innerHTML = `<div class="NewProd">
                            <img src="${producto.img}" class="card" alt="...">
                            <div class"CBdy">
                                <h4 class="card-title">${producto.nombre}</h4>
                                <p class="card-text">Precio sin IVA:$ ${producto.precio} X Kg.</p>
                                <label for="kilos">kilos</label>
                                <input type="text" name="kilos" id="kilos${producto.id}" value="" >
                                <button class="btn btn-primary" id=boton${producto.id}>Agregar al Carrito</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            alert(`Se agregaron ${producto.cantidad}kg de ${producto.nombre} al carrito`);

        })
    })
}

ShowP(productos)