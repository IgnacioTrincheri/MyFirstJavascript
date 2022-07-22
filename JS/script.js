 //presupuesto solo para usuarios ingresados 

alert('Bienvenidos a la seccion de presupuestos');

let password = "Avicola";
let ingreso = false;


for (let h = 0; h <= 2; h++) {
    let nam = prompt("Ingresa tu nombre de usuario");
    if (nam != "") {
        while (nam != "") {
            for (let i = 2; i >= 0; i--) {
                let userPass = prompt("Ingresa tu contraseña:");
                if ((password === userPass)) {
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


//simulador de prefcios 


let pollo = "250";
let patas = "300";
let pech = "450";
let alas = "100";
let milas = "350";
let calculo = "";
let kilos = "1"
let select = 0
let iva = 1.21
let algo = false
let pago = false
let total = 0

if (ingreso) {

    alert("Por favor seleccione los productos que desea llevar.");
    let productos = prompt("1-Pollo. \n2-Patamuslo. \n3-Pechuga. \n4-Alas. \n5-Milanesas. \n6-_ESC para terminat");
    while (productos != "ESC" && productos != "esc" && productos != "Esc") {

        switch (productos) {
            case "1":
                kilos = parseInt(prompt("Precio $250. Ingrese la cantidad en kilos deseados"));
                select = select + (pollo * kilos);
                break;
            case "2":
                kilos = parseInt(prompt("Precio $300 Ingrese la cantidad en kilos deseados"));
                select = select + (patas * kilos);
                break;
            case "3":
                kilos = parseInt(prompt("Precio $450 Ingrese la cantidad en kilos deseados"));
                select = select + (pech * kilos);
                break;
            case "4":
                kilos = parseInt(prompt("Precio $100 Ingrese la cantidad en kilos deseados"));
                select = select + (alas * kilos);
                break;
            case "5":
                kilos = parseInt(prompt("Precio $350 Ingrese la cantidad en kilos deseados"));
                select = select + (milas * kilos);
                break;
            default:
                alert("Producto incorrecto, por favor intente de nuevo");
                algo = true
                break;
        };

        productos = prompt("1-Pollo. \n2-Patamuslo. \n3-Pechuga. \n4-Alas. \n5-Milanesas. \n6-_ESC para terminat");
    };

    total = select * iva

    alert("Tu presupuesto total con iva incluido es: " + (total));

    if (productos = algo) {
        pago;
    } else {
        pago = true;
    }

} else {
    alert("Demaisados intentos por favor intentelo de nuevo mas tarde");
} 

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
                    total = total * 1.15;
                    break;
                case "3":
                    alert("En 3 cuota se aplicara el 20% de recargo")
                    total = total * 1.20;
                    break;
                case "6":
                    alert("En 6 cuota se aplicara el 30% de recargo")
                    total = total * 1.30;
                    break;
            };
            recargo = "";
        };

    }
    alert("El total de su copra es: " + total)
    alert("Muchas gracias vuelva pronto !")

}