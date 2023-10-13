// 2) SEGUNDO CASO:
// - Pregunte al usuario su nombre a través de un prompt.
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a la red Javier"
// - A través de un bucle, enviar 5 prompts con mensajes diferentes. Imaginen que cada prompt envía un "tweet" y que, el usuario a través del input, tiene que calificarlo. Puede calificarlo con: "me gusta" y "no me gusta".
// Si el valor ingresado es "me gusta", mediante una variable acumuladora, se validará la cantidad. Si el valor es "no me gusta", también se precisará de otra variable que acumule ese resultado.
// - Luego del bucle, se debe enviar un alert que visualice la cantidad de "me gusta" y "no me gusta". Ej: "Del siguiente contenido, te gustaron 3 y no te gustaron 2". Los números deben representar a los valores de las variables acumuladas.
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN PROMPT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.


let nombreUsuario = prompt("Hola ¿Cuál es su nombre?");
alert(`Bienvenido ${nombreUsuario} a nuestra web`);

let j=0;
let respuestaPositiva=0;
let respuestaNegativa=0;

function buscadorDeMensaje(j){
        switch(j){
            case 1:
                return "La lasagna es la pasta italiana más deliciosa?";
            case 2:
                return "El colibrí el es el ave más bella?"
            case 3:
                return "La manzana es la fruta más sabrosa?"
            case 4:
                return "Italia es una país europeo?"
            case 5:
                return "Vas a desaprobar la primera pre entrega?"
        }
}

function disparadorDeMensajes(){
    for(let i=1; i<6; i++){
        if(confirm(buscadorDeMensaje(i))){
            respuestaPositiva += 1;
        }else{
            respuestaNegativa += 1;
        };
    }
    return respuestaNegativa, respuestaPositiva;
}

disparadorDeMensajes();
alert(`Gracias ${nombreUsuario} por participar.\n El número de respuestas positivas ha sido de ${respuestaPositiva} \n Y el número de respuestas negativas ${respuestaNegativa}`);


