// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let usuario = document.getElementById("amigo").value;
    usuario = usuario.trim();
    if (usuario.length===0 || usuario === " " ){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(usuario);
        actualizarLista();
    }
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    let cantidadAmigos = amigos.length;
    let elegido = "";
    if (cantidadAmigos > 0){
        let valor = Math.floor(Math.random()*cantidadAmigos);
        elegido = amigos[valor];
        document.getElementById("resultado").innerHTML = elegido;
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let longitudAmigos = amigos.length;
    for(let i = 0; i < longitudAmigos; i++){
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    } 
}