// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if( nombreAmigo.trim() === '' ){
        alert('Por favor ingresa el nombre de tu amigo (No esta permitido dejar el campo en blanco)');
        
    }
    else{
        if((parseInt(nombreAmigo))){
            alert('Por favor ingresa el nombre de tu amigo (No esta permitido ingresar numeros)');            
            
        }else
            {
            // asignar valor al array
            validarAmigo(nombreAmigo);            
            }
            limpiarCampo();
        }
        imprimirLista();
    
    return;
}

function validarAmigo(elemento){
    if (amigos.includes(elemento)){
        alert(`Tu amigo ${elemento} ya se encuentra registrado, por favor intenta con otro nombre.`);        
    }
    else{
          amigos.push(elemento);         
        }
    return;
}

function imprimirLista(){
    let listado = document.getElementById('listaAmigos');
    listado.innerHTML = '';
    for(let item of amigos){
        listado.innerHTML += '<li>'+ item + '<li>';
    }
    return;
}

function sortearAmigo(){
    if(amigos.length <= 1 ){
        alert('No hay amigos registrados para sortear, por favor registre sus amigos.');
    }
    else{
        let indice = Math.floor(Math.random() * amigos.length);
        let nombreAleatorio = amigos[indice];
        let result = document.getElementById('resultado');
        result.innerHTML = '<li> Tu amigo secreto es:'  + nombreAleatorio + '</li>'
        return;
    }
}

function limpiarCampo(){
    document.getElementById('amigo').value = '';
    return;
}