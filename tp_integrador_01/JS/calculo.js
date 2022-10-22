
const compra = (precio, cantidad, descuento, calcular) =>{
    calcular ((precio*cantidad)-(precio*cantidad)*descuento);
}
compra(200,10, 0.80, console.log);
compra(200,10, 0.50, console.log);
compra(200,10, 0.15, console.log);