const productos = [
    { nombre: "fideos", precio: 100 },
    { nombre: "leche",  precio: 150 },
    { nombre: "crema",  precio: 160 },
    { nombre: "harina", precio: 50 },
];

let carrito = []

let seleccion = prompt("Hola, desea realizar una compra? si/no")

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, desea realizar una compra?")
}
if (seleccion === "si") {
    let nuestrosProductos = productos.map(
        (producto) => producto.nombre + " $" + producto.precio
    );
    alert(nuestrosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos!!")
}

while (seleccion != "no"){
    let producto = prompt("agregue un producto a tu carrito")
    let precio = 0

    if (producto == "fideos" || producto == "leche" || producto == "crema" || producto == "harina") {
        switch (producto) {
            case "fideos":
                precio = 100;
                break;
            case "leche":
                precio = 150;
                break;
            case "crema":
                precio = 160;
                break;
            case "harina":
                precio = 50;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades desea llevar?"))
        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")

    while (seleccion === "no") {
        alert("Gracias por su compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)