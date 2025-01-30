// El principal objetivo de este desafío es fortalecer tus habilidades en
//  lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];
/**let listaNombres = ["Ana", "Ximena", "Martin", 
    "Leonardo", "Andres", 
    "Maria", "Rubi", "Mario"]; //De prueba */

//Funcion para agregar los nombres
function agregarAmigo(){
    let NomIngresado = document.getElementById('amigo').value;

    if (NomIngresado.trim() === "") { //Valida si es un número.
        alert("El campo nombre no puede estar en blanco");
        document.getElementById("amigo").value = ""; //Limpia el input.
        return;
    } else if (!isNaN(NomIngresado)) { //Valida si esta en blanco.
        alert("Por favor, inserte un nombre.");
        document.getElementById("amigo").value = "";
        return;
    }else if(listaNombres.includes(NomIngresado)){ //Valida nombre diferente.
        alert("Este nombre ya fue agregado.\nIngresa un nombre diferente, para evitar equivocaciones");
        return;
    }else if(/\d/.test(NomIngresado)){ //Valida si el nombre tiene un número.
        alert("El nombre no puede tener un número");
        return;
    }else {
        listaNombres.push(NomIngresado);
    }

    console.log(listaNombres); //Para demostrar que si funciona.
    document.getElementById("amigo").value = "";
    MostrarLista();
}

//Funcion para mostrar los contenidos de la lista
function MostrarLista(){
    let ListAmigos = document.getElementById("listaAmigos");
    ListAmigos.innerHTML = '';
    for (let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaNombres[i];
        ListAmigos.appendChild(li);
    }
}

//Funcion para escoger aleatoriamente
function sortearAmigo(){
    if(listaNombres.length === 0){
        alert("Debe de agregar nombres");
        return;
    }else{
        let Indices = Math.floor(Math.random() * listaNombres.length);
        let random = listaNombres[Indices];
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `<li>El amigo secreto que seleccionado es:${random}</li>`;
    }
}