const carCompras = []
const totalCuenta = [];

const carritoIndex = (productoId) => {

    const contCarrito = document.getElementById('carCont');
    const render = () => {

        let producto = productos.find(producto => producto.id == productoId);
        carCompras.push(producto);
        producto.cantidad = parseFloat((document.getElementById(`kilos${producto.id}`)).value);

        let suma = producto.cantidad * (producto.alic * producto.precio);
        totalCuenta.push(suma)

        let div = document.createElement('div')

        div.classList.add('EnCarrito')

        div.innerHTML = `<div id="tomarP" class="d-flex">
        <p>${producto.nombre}</p>
        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad} Kg.</p>
        <p id="Importe${producto.id}">Importe: $${suma}</p>
        <button id="borrar${producto.id}" class=" btn btn-primary boton-eliminar" >X<i class="fa-solid fa-trash-can"></i></button>

        </div>`;

        contCarrito.appendChild(div)


        const eliminarProd = document.getElementById(`borrar${producto.id}`);
        const tomarProd = document.getElementById('tomarP')

        eliminarProd.addEventListener('click', () => {
            carCompras.splice(producto, 1);
            div.remove(tomarProd);
        })
        
        const total = totalCuenta.reduce((acu, el) => acu + el)

        console.log(total);

    };


    render()

}
/* 

if (total != 0) {
    let traerTotal = document.getElementById('total')
    let MontoDiv = document.createElement('p')
    traerTotal.appendChild(MontoDiv)
    MontoDiv.innerHTML = `$${total}`

} */