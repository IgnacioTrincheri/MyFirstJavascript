//presupuesto solo para usuarios ingresados 

alert('Bienvenidos a la seccion de presupuestos');

const password = "Avicola"
let ingreso = false;

for (let h = 0; h <= 2; h++) {
    let nam = prompt("Ingresa tu nombre de usuario");
    if (nam != "") {
        while (nam != "") {
            for (let i = 2; i >= 0; i--) {
                let userPass = prompt("Ingresa tu contraseña:");
                if (password === userPass) {
                    alert("Bienvenido de nuevo " + nam);
                    ingreso = true;
                    break;
                } else {
                    alert("Contraseña incorrecta. Te quedan " + i + " intentos")
                };
            };
            break;
        };
        break;
    } else {
        alert("Nombre de usuario no valido, Por favor ingrese su nombre de usuario ");
    };
    h--;
};

//simulador de precios 

let algo = false
let pago = false
let total = 0
const Alicuotas = [1.105, 1.21]
class Articulos {
    constructor(nombre, valor, IVA) {
        this.nombre = nombre,
            this.valor = valor,
            this.IVA = IVA,
            this.precio = 0,
            this.vendido = false
    }

    SumarMasIva() {
        this.kilos = this.valor * (this.kilos = prompt("Ingrese la cantidad de kilos deseados"));
        this.precio = this.kilos * this.IVA;
        alert('Su precio del producto + IVA es: $' + this.precio);
        total = total + this.precio
    }

    vender() {
        this.vendido = true;
    }
}

const Pollo = new Articulos('Pollo', 250, Alicuotas[0]);
const Patas = new Articulos('Cuarto Trasero', 300, Alicuotas[0]);
const Pechugas = new Articulos('Pechuga Deshuesada', 450, Alicuotas[0]);
const Alas = new Articulos('Alas', 100, Alicuotas[0]);
const Milas = new Articulos('Milanesas', 350, Alicuotas[1]);
const Arrollados = new Articulos('Arrollados de Pollo', 400, Alicuotas[1]);
const Congs = ['hamburguesa de pollo', 'hamburguesa de merluza', 'patitas']
const Congelados = new Articulos('Congelados', 320, Alicuotas[1])


if (ingreso) {

    alert("Por favor seleccione los productos que desea llevar.");
    let productos = prompt("1-Pollo. \n2-Patamuslo. \n3-Pechuga. \n4-Alas. \n5-Milanesas. \n6-Arrollados. \n7-Congelados  \n8-_ESC para terminar");


    while (productos != "ESC") {

        switch (productos) {
            case "1":
                Pollo.SumarMasIva();
                break;
            case "2":
                Patas.SumarMasIva();
                break;
            case "3":
                Pechugas.SumarMasIva();
                break;
            case "4":
                Alas.SumarMasIva();
                break;
            case "5":
                Milas.SumarMasIva();
                break;
            case "6":
                Arrollados.SumarMasIva();
                break;
            case "7":
                let pregunta = prompt("Que tipo de congelado desea?");
                pregunta.toLowerCase;
                const Respuesta = Congs.find((elemento) => elemento === pregunta);
                if (Respuesta) {
                    Congelados.SumarMasIva();
                } else {
                    alert("No tenemos congelados de ese producto")
                }
                break;
            default:
                alert("Producto incorrecto, por favor intente de nuevo");
                break;
        };

        productos = prompt("1-Pollo. \n2-Patamuslo. \n3-Pechuga. \n4-Alas. \n5-Milanesas. \n6-Arrollados. \n7-Congelados  \n8-_ESC para terminar");
        productos = productos.toUpperCase();
    };

    alert('Su monto total es de: $' + total)
    pago=true
} else {
    alert("Demaisados intentos por favor intentelo de nuevo mas tarde");
}


const Recargos = [1.15, 1.20, 1.30]


if (pago) {

    alert("seleccione el medio su metodo de pago: ");
    let metodo = prompt("1-Tarjeta de Debito. \n2-Tarjeta de credito. \n3-Efectivo en la entrega");
    if (metodo == "2") {

        alert("Tarjeta de credito lleva recargo: \nEn 1 pago, 15% \nEn 3 pagos, 20% \nEn 6 pagos, 30%");
        let recargo = prompt("En cuantas cuotas desea pagar ?");

        while (recargo != "") {
            switch (recargo) {
                case "1":
                    alert("En 1 cuota se aplicara el 15% de recargo")
                    total = total * Recargos[0];
                    break;
                case "3":
                    alert("En 3 cuota se aplicara el 20% de recargo")
                    total = total * Recargos[1];
                    break;
                case "6":
                    alert("En 6 cuota se aplicara el 30% de recargo")
                    total = total * Recargos[2];
                    break;
            };
            recargo = "";
        };

    }
    alert("El total a pagar es: " + total)
    alert("Muchas gracias vuelva pronto !")

}