/* //prubea de objetos y arrays de js



const Alicuota1 = 1.105
const Alicuota2 = 1.21



class Articulos{
    constructor(nombre,valor,IVA){
        this.nombre=nombre,
        this.valor=valor,
        this.IVA=IVA 
    }

    Kilaje(){
        this.kilos=prompt('Ingrese la cantidad de kilos que necesita')
        this.kilos=this.valor*this.kilos
    }

    SumarIva(){
        this.precio = this.kilos*this.IVA 
    }
}


const Pollo = new Articulos('Pollo',250,Alicuota1);
const Patas = new Articulos('Cuarto Trasero',300,Alicuota1);
const Pechugas = new Articulos('Pechuga Deshuesada',450,Alicuota1);
const Alas = new Articulos('Alas',100,Alicuota1);
const Milas = new Articulos('Milanesas',350,Alicuota2);
const Arrollados = new Articulos('Arrollados de Pollo',400,Alicuota2);



//usuario crea articulos o el dueño del sitio tenga la opcion
const ProdNuevo = new Articulos(prompt('Ingresa el nombre del articulo nuevo'), prompt('Ingresa el valor en $'), prompt('Ingresa: \n1.105: Aliccuota al 10.5% para Derivcados de Carne \n1.21: Alicuota al 21% para elaborados u almacen'));



//arrays



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
}

 */
