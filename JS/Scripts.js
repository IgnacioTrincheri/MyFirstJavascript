let FormIngreso = document.querySelector("#formulario");
const ClickIngreso = document.querySelector("#IngresarBtn");
const btnSalir = document.getElementById('salirBtn')
const btnBorrarLocal = document.getElementById('BorrarLocal')
let userPass = "Avicola";
let pase = false;
let ingreso = false;
let botonRecordame = document.getElementById('RememberMe')
let botonGuardar = document.getElementById('guardarCarrito')
const inputNombre = document.getElementById('UsuarioName')
let usuario = document.getElementById("UsuarioName");
let password = document.querySelector("#Contraseña");


function guardarDatos(storage) {
    let usuario = document.getElementById("UsuarioName").value;
    let password = document.querySelector("#Contraseña").value;


    const user = {
        'usuario': usuario,
        'contra': password,
    }

    if (storage === 'localStorage') {
        localStorage.setItem('usuario', JSON.stringify(user))
    }

    if (storage === 'sessionStorage') {
        sessionStorage.setItem('usuario', JSON.stringify(user))
    }
}

function borrarDatos(storage) {
    storage.clear();
}




btnBorrarLocal.addEventListener('click', () => {
    borrarDatos.localStorage;

})

inputNombre.addEventListener('on change', () => {
    let usuarioTraido = localStorage.getItem('usuarioN')
    console.log(usuarioTraido)

    if (usuario == usuarioTraido) {
        let traerContra = localStorage.getItem('contra')
        console.log(traerContra);
    }
})



ClickIngreso.addEventListener("click", (e) => {
    e.preventDefault();
    if (botonRecordame.checked) {
        guardarDatos('localStorage');

    } else {
        guardarDatos('sessionStorage');
    }

});


window.onload = () => {
    let usuarioTraido = JSON.parse(localStorage.getItem('user'))
    if (usuarioTraido) {
        usuario.value = usuarioTraido.usuario
        password.value = usuarioTraido.contra
    }
    //no se como haria para directamente dar por validada la funcion
}

ClickIngreso.addEventListener("click", () => {


    usuario = usuario.value
    password = password.value


    if (usuario == " " || password == " ") {
        alert("Algun campo esta incompleto, por favor ingrese su nombre de usuario y la contraseña")
    } else {
        for (let i = 2; i >= 0; i--) {
            if (password == userPass) {
                FormIngreso.remove();
                const aca = document.getElementById("InicioCont");
                aca.innerHTML = `<div class="CartelBienvenida">
                <h4> Bienvenido de nuevo ${usuario}</h4>
                <div> <button type="button" id="salirBtn" class="btn btn-danger">Cerrar Sesión </button>
                </div>`;
                pase = true;
                break;
            } else {
                alert("Contraseña Incorrecta. Te quedan " + i + " intentos")
            };
        };
    };

});

/* btnSalir.addEventListener('click', () => {
    borrarDatos(sessionStorage);
        if(sessionStorage == false){
            //aca deberia hacer que se vuelva al estado inicial sin iniciar sesssion
        } 
}); */