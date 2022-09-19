/*
userPass = "Avicola";
pase = false;
ingreso = false;
i = 2


function guardarDatos(storage) {
    let usuario = document.getElementById("UsuarioName").value;
    password = document.querySelector("#Contraseña").value;


    const user = {
        'usuario': usuario,
        'contra': password,
    }

    storage === 'localStorage' && localStorage.setItem('usuario', JSON.stringify(user))
    storage === 'sessionStorage' && sessionStorage.setItem('usuario', JSON.stringify(user))

}

function borrarDatos(storage) {
    storage.clear();
}

function validarIngreso() {}

btnBorrarLocal.addEventListener('click', () => {
    borrarDatos.localStorage;
})

ClickIngreso.addEventListener("click", (e) => {
    e.preventDefault();

    botonRecordame.checked ? guardarDatos('localStorage') : guardarDatos('sessionStorage');
});

btnBuscar.addEventListener('click',()=>{
    Swal.fire({
        title: 'UPS!',
        text: 'Lo sentimos todavia no esta listo este boton!',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
    
})

/* window.onload = () => {
    let usuarioTraido = JSON.parse(localStorage.getItem('user.nombre'))
    let contraTraido = JSON.parse(localStorage.getItem('user.contra'))
    if (usuarioTraido != '') {
        usuario.value = usuarioTraido
        password.value = contraTraido
    }

        //no se como haria para directamente dar por validada la funcion
} 
 */
/*
ClickIngreso.addEventListener("click", () => {

    if (usuario == "" || password == "") {
        alert("Algun campo esta incompleto, por favor ingrese su nombre de usuario y la contraseña")
    } else {
        if (password === userPass) {
            FormIngreso.remove();
            const aca = document.getElementById("InicioCont");
            aca.innerHTML = `<div class="CartelBienvenida">
                <h4> Bienvenido de nuevo ${usuario.value}</h4>
                </div>`;
            //                <div> <button type="button" id="salirBtn" class="btn btn-danger">Cerrar Sesión </button>

            pase = true;
        } else {
            if (i >= 0) {
                alert("Contraseña Incorrecta. Te quedan" + i + " intentos")
                FormIngreso.reset();
                i -= 1
            } else {
                const aca = document.getElementById("InicioCont");
                aca.innerHTML = `<div class="CartelBienvenida">
                <h4> Demasiados errores por favor intentelo nuevamente mas tarde</h4>
                </div>`;
            }

        };

    }
});

 */


/* btnSalir.addEventListener('click', () => {
    borrarDatos(sessionStorage);
        if(sessionStorage == false){
            //aca deberia hacer que se vuelva al estado inicial sin iniciar sesssion
        } 
}); */