/**** variables ****/
const nombre = document.getElementsByName('nombre');
const apellido = document.getElementsByName('apellido');
const email = document.getElementsByName('email');
const precio = 200;
const cantidad = document.getElementById('cantidad');
const descuento = document.getElementById('descuento');
const resumen = document.getElementById('resumen');
const pagar = document.getElementById('disabledTextInput');
const borrar = document.getElementById('borrar');

resumen.addEventListener('click',() =>{
        console.log(precio);
        console.log(cantidad.value);
        console.log(descuento.value);
        console.log(pagar.placeholder);

        /**** calculo de la compra y actualizamos input del monto a pagar ****/
        
        const compra = ((precio * cantidad.value) - (precio * cantidad.value) * descuento.value);
        
        if (cantidad.value > 0 && descuento.value > 0) {
            pagar.placeholder = `Total a Pagar: $ ` + compra;
        } else {
            alert('Verifique su selección, los campos Cantidad y Categoría deben estar completos!!');
        }
    });


/**** recarga la pagina y deja todo en blanco ****/

borrar.addEventListener('click', () =>{
    location.reload();
});