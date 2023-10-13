// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4
// EL PRIMER DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON EN CLASES, NO SERÁN EVALUADOS
// RECUERDEN QUE EL PRIMER DESAFÍO INVOLUCRA QUE INTEGREN TODO LO VISTO
// ACLARACIÓN: ESTE DESAFÍO NO NECESARIAMENTE PODRÁ ESTAR RELACIONADO CON EL DESAFÍO FINAL

// CADA PUNTO EN REALIDAD ES UN EJERCICO ÚNICO QUE CONTIENE TODO LO NECESARIO PARA APROBAR
// LOS TEXTOS DE LOS MENSAJES SON A CRITERIO PERSONAL, PERO DEBEN SEGUIR LA LÓGICA PLANTEADA

// 1) PRIMER CASO:
// - Pregunte al usuario su nombre a través de un prompt.
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a nuestro ecommerce Javier."
// - Pregúntele al usuario, con un nuevo prompt, qué categoría de producto le interesaría comprar, ej: "¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones". La frase y la forma de introducir los datos queda a criterio de ustedes. Lo necesario es que a partir del valor ingresado, se valide qué mostrar luego.
// - Valide el valor ingresado. En el caso de que sea, por ejemplo, 1, muestre por confirm el artículo remera, con un mensaje de este estilo: "Usted eligió remera. Su precio es de $x. Desea comprar este artículo?"
// - En el caso de cancelar, terminar el algoritmo con un nuevo alert: "Muchas gracias por su visita"
// - Si el usuario decide aceptar la compra, se deberá mediante un bucle, reproducir tres mensajes distintos: El primero será: "Ingrese su dirección para poder realizar el envío del pedido", el segundo: "Su artículo será enviado a: - dirección-" y el tercero: "Muchas gracias por su compra".
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN ALERT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.


let nombre = prompt("Hola! Un gusto saludarte: ¿Cuál es tu nombre?");
alert(`Bienvenido ${nombre} a nuestro servicio de E-commerce`);
let categoriaProducto = prompt("¿En qué producto se encuentra interesado?\n 1- Remera\n 2-Oversize\n 3-Pantalón\n 4-Zapatillas"
);

console.log(categoriaProducto);

let nombreProducto="";
let precioProducto="";


    switch(categoriaProducto){
        case "1":
            nombreProducto= "Remera";
            precioProducto= 1235,3;
            break;
        case "2":
            nombreProducto= "Oversize"
            precioProducto=1023,88;
            break;
        case "3":
            nombreProducto= "Pantalón"
            precioProducto=1234845;
            break;
        case "4":
            nombreProducto= "Zapatillas";
            precioProducto=14425;
            break;
    }

let j=0;

let direccionEnvio;

function buscadorDeMensaje(j){
    switch(j){
        case 1:
            return direccionEnvio=  prompt("Ingrese la dirección a la que se enviará el producto:");
        case 2:
            return alert("Su producto se enviará a: "+direccionEnvio);
        case 3:
            return alert("Muchas gracias por su compra!");
    }
}

if(confirm(`Usted ha elegido comprar ${nombreProducto}.\n El precio del mismo es: $${precioProducto} \n¿Desea confirmar la compra?`)){
    for (let i = 0; i < 4; i++) {
        buscadorDeMensaje(i);
    }
}else {
    alert("¡Gracias por su visita! ¡Vuelva pronto!")
};

