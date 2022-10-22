const precio = 200;
const cantidad = document.getElementById('cantidad');
const descuento = document.getElementById('descuento');
const resumen = document.getElementById('resumen');
const pagar = document.getElementById('disabledTextInput');

resumen.addEventListener('click',() =>{
    console.log(precio);
    console.log(cantidad.value);
    console.log(descuento.value);
    console.log(pagar.placeholder);
 
    const calcular =((precio*cantidad.value)-(precio*cantidad.value)*descuento.value);
    pagar.placeholder = calcular;
});
