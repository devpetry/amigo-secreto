let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nome = amigo.value.trim();

    if (nome === '') {
        alert('Digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(amigo.value);
    atualizarLista();
    amigo.value = '';
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    amigos.forEach(nome => {
        const span = document.createElement('span');
        span.textContent = nome;
        span.style.cursor = 'pointer';
        span.style.marginRight = '8px';
        span.title = 'Clique para remover';
        span.onclick = () => remover(nome);
        lista.appendChild(span);
    });
}

function remover(nome){
    amigos = amigos.filter(amigo => amigo !== nome);
    atualizarLista();
}

function sortear(){
    if(amigos.length < 2){
        alert('Adicione pelo menos dois amigos.');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}