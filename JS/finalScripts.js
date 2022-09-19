const BtnInicioS = document.querySelector('#ing')
BtnBuscar = document.getElementById('busc')
BtnCarrito = document.getElementById('abrirCar')
BtnRecordame = document.getElementById('RememberMe')
BtnIngresar = document.querySelector("#IngresarBtn")
BtnGuardarCarrito = document.getElementById('GuardarCarrito')
BtnBorrarLocal = document.getElementById('BorrarLocal')
BtnContinuar = document.getElementById('continuar')

nav = document.getElementById('nav')
modalContenedor = document.querySelector('.modalCont')
modalCarrito = document.querySelector('.modProductos')
InicioContenedor = document.querySelector('.Modal-Cont-Inicio')
modalInicio = document.querySelector('.Modal-Inicio')
inicioCont = document.getElementById("InicioCont")
contenedorProductos = document.getElementById('ProdCont')
contCarrito = document.getElementById('carCont');
muestraTotal = document.getElementById('total');

cerrarCarrito = document.getElementById('cerrar')
cerrarInicio = document.getElementById('cerrarInicio')

Formulario = document.querySelector("#formulario")
UsuarioIngresado = document.querySelector("#UsuarioName")
ContraseñaIngresada = document.querySelector("#Contraseña")

userPass = 'Avicola'
ingreso = false
i = 2

carCompras = [];
total = 0


//FUNCIONES


function cerrarModal(modal) {

    if (modal == InicioContenedor) {
        opcion = cerrarInicio
        opcion2 = modalInicio
    } else {
        opcion = cerrarCarrito
        opcion2 = modalCarrito
    }

    opcion.addEventListener('click', () => {
        modal.classList.remove('modal-active')
    })

    modal.addEventListener('click', () => {
        modal.classList.remove('modal-active')
    })

    opcion2.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

function guardarDatos(storage) {

    const user = {
        'usuario': UsuarioIngresado.value,
        'contraseña': ContraseñaIngresada.value,
    }

    storage === 'localStorage' && localStorage.setItem('usuario', JSON.stringify(user))
    storage === 'sessionStorage' && sessionStorage.setItem('usuario', JSON.stringify(user))

}

function borrarDatos(storage) {
    storage.clear();
}

//ACCIONES BOTONES
BtnInicioS.addEventListener('click', () => {
    InicioContenedor.classList.toggle('modal-active')
    cerrarModal(InicioContenedor)
})

BtnBuscar.addEventListener('click', () => {
    Swal.fire({
        title: 'UPS!',
        text: 'Lo sentimos todavia no esta listo este boton!',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
})

BtnCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
    cerrarModal(modalContenedor)
})

BtnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    BtnRecordame.checked ? guardarDatos('localStorage') : guardarDatos('sessionStorage');

    //VALIDACION DEL FORM

    if (UsuarioIngresado.value == "" || ContraseñaIngresada.value == "") {
        Swal.fire({
            title: 'UPS!',
            text: 'Algun campo esta incompleto, por favor ingrese su nombre de usuario y la contraseña',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    } else {
        if (ContraseñaIngresada.value === userPass) {
            Formulario.remove();
            BtnInicioS.innerHTML = `:) ${UsuarioIngresado.value}`
            inicioCont.innerHTML = `<div class="CartelBienvenida">
                <h4> Bienvenido de nuevo ${UsuarioIngresado.value}</h4>
                <button id="recuperarCarro" class="btn btn-primary">Recuperar Carrito</button>
                </div>`;
            let nuevoLi = document.createElement('li')
            nuevoLi.innerHTML = `<a href="index.html" id="salirBtn" class="btn btn-danger">Cerrar Sesión </a>`
            nav.appendChild(nuevoLi)

            let BtnSalir = document.getElementById('salirBtn');
            BtnRecuperar = document.getElementById('recuperarCarro')

            BtnSalir.addEventListener('click', () => {
                borrarDatos(sessionStorage)
            })

            BtnRecuperar.addEventListener('click', () => {
                let recuperado = JSON.parse(localStorage.getItem('carrito'))
                totalRec = JSON.parse(localStorage.getItem('total'))

                recuperado.forEach(element => {
                    carCompras.push(element)

                    let suma = element.cantidad * (element.alic * element.precio);

                    let div = document.createElement('div')
                    div.classList.add('EnCarrito')
                    div.innerHTML = `<div id="tomarP" class="d-flex">
<p>${element.nombre} _ </p>
<p id="cantidad${element.id}"> ${element.cantidad} Kg.</p>
<p id="Importe${element.id}">Importe: $${suma}</p>
<button id="borrar${carCompras.indexOf(element)}" class=" btn btn-primary boton-eliminar" >X<i class="fa-solid fa-trash-can"></i></button>
</div>`;

                    contCarrito.appendChild(div)

                    const eliminarProd = document.getElementById(`borrar${carCompras.indexOf(element)}`);
                    tomarProd = document.getElementById('tomarP')

                    eliminarProd.addEventListener('click', () => {
                        carCompras.splice(carCompras.indexOf(element), 1);
                        total -= suma
                        muestraTotal.innerHTML = `$ ${total}`
                        div.remove(tomarProd);
                    })

                });
                total += totalRec
                muestraTotal.innerHTML = `$ ${total}`;
                BtnRecuperar.remove()
            })

            ingreso = true;
        } else {
            if (i >= 0) {
                alert("Contraseña Incorrecta. Te quedan" + i + " intentos")
                Formulario.reset();
                i -= 1
            } else {
                inicioCont.innerHTML = `<div class="CartelBienvenida">
                <h4> Demasiados errores por favor intentelo nuevamente mas tarde</h4>
                </div>`;
            }
        }
    }

});

BtnBorrarLocal.addEventListener('click', () => {
    borrarDatos(localStorage);
})



//MOSTRAR LOS PRODUCTOS SIN NECESIDAD DE ESTAR LOGEADO

const ShowP = async () => {
    const produtos = await fetch('./JS/Productos.json');
    const dataJson = await produtos.json();

    dataJson.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="NewProd">
                            <img src="${producto.img}" class="card" alt="...">
                            <div class"CBdy">
                                <h4 class="card-title">${producto.nombre}</h4>
                                <p class="card-text">Precio sin IVA:$ ${producto.precio} X Kg.</p>
                                <input type="text" name="kilos" id="kilos${producto.id}" >
                                <button class="btn btn-primary" id=boton${producto.id}>Agregar al Carrito</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            Toastify({
                text: `Se agregó ${producto.nombre} al carrito`,
                duration: 800,
                style: {
                    background: " #00b09",
                },
            }).showToast();

        })
    })
}
ShowP();

//CARRITO


const carritoIndex = async (productoId) => {

    const prod = await fetch('./JS/Productos.json');
    dataJson = await prod.json();

    const render = () => {
        let producto = dataJson.find(producto => producto.id === productoId);

        producto.cantidad = parseFloat((document.getElementById(`kilos${producto.id}`)).value);

        carCompras.push(producto)
        //QUEDA A PROPOSITO POR SEPARADO CADA PRODUCTO POR MAS QUE ESTE REPETIDO POR SI EL PEDIDO IMPLICA DIVIDIRLO

        let suma = producto.cantidad * (producto.alic * producto.precio);
        total += suma

        console.log(total);

        let div = document.createElement('div')
        div.classList.add('EnCarrito')
        div.innerHTML = `<div id="tomarP" class="d-flex">
        <p>${producto.nombre} _ </p>
        <p id="cantidad${producto.id}"> ${producto.cantidad} Kg.</p>
        <p id="Importe${producto.id}">Importe: $${suma}</p>
        <button id="borrar${carCompras.indexOf(producto)}" class=" btn btn-primary boton-eliminar" >X<i class="fa-solid fa-trash-can"></i></button>
        </div>`;

        contCarrito.appendChild(div)

        const eliminarProd = document.getElementById(`borrar${carCompras.indexOf(producto)}`);
        tomarProd = document.getElementById('tomarP')

        eliminarProd.addEventListener('click', () => {
            carCompras.splice(carCompras.indexOf(producto), 1);
            total -= suma
            muestraTotal.innerHTML = `$ ${total}`
            div.remove(tomarProd);
        })

        muestraTotal.innerHTML = `$ ${total}`;

    };
    render()
}

BtnGuardarCarrito.addEventListener('click', () => {
    localStorage.setItem('carrito', JSON.stringify(carCompras))
    localStorage.setItem('total', JSON.stringify(total))

})

BtnContinuar.addEventListener('click', () => {
    if (ingreso == true) {
        modalCarrito.innerHTML = `<div id="MedioPagos">
        <h3>Medios de pagos</h3>
        <h4>Total de la compra : $${total}</h4>
        <select name="medio" id="medios">
            <option value="">Tarjeta de Credito</option>
            <option value="">Tarjeta de Debito</option>
            <option value="">Efectivo en el Local</option>
        </select>
    </div>
    <button id="cont" class="btn btn-primary">Continuar</button>
    <button id="atras" class="btn btn-primary">Atras</button>
    `
    BtnCont= document.getElementById('cont')
    BtnCont.addEventListener('click',()=>{
        modalCarrito.innerHTML=` <p>Gracias por su compra</p>`
    })
    } else {
        Swal.fire({
            title: 'UPS!',
            text: 'Lo sentimos,debes estar logueado antes de continuar con el pago !',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }

})