
//1 - crie uma função que exiba uma mensagem no console


function exibeMensagem() {
    console.log("Olá Mundo!");
}

exibeMensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibeNome(nome) {
    return console.log(nome);
}

exibeNome('Karolis');

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibeDados(nome, idade, estilo) {
    return console.log(`Olá ${nome}, você tem ${idade} anos e gosta do estilo ${estilo}`);
}

exibeDados('Karolis', '20', 'Bossa Nova');

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibeFilme(filme, musica) {
    return console.log(`O filme é ${filme} e a Música${musica}`);
}

exibeFilme('O Senhor dos Anéis', 'Thats life');

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero) {
    return numero * 3;
}

console.log(triplo(7));
