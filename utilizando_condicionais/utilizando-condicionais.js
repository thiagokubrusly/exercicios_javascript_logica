let nomePiloto = prompt("Qual é o seu nome, piloto?");

let velocidadeInicial = 0;

let velocidadeEscolhida = prompt("Deseja qual velocidade para a nave?");

let velocidadeConfirmada = confirm(`Estamos indo para a velocidade ${velocidadeEscolhida} km/s.`)

if (velocidadeConfirmada){
    velocidadeInicial = velocidadeEscolhida
}

if (velocidadeInicial <= 0){
    alert ("A nave está parada. Considere partir e aumentar a velocidade.");
} else if (velocidadeInicial < 40) {
    alert ("Você está devagar, podemos aumentar mais.");
} else if (velocidadeInicial < 80) {
    alert ("Parece uma boa velocidade para manter.");
} else if (velocidadeInicial <100) {
    alert ("Velocidade alta. Considere diminuir");
} else {
    alert ("Velocidade perigosa. Controle automático forçado.")
}

alert (`${nomePiloto}, estamos a ${velocidadeInicial}km/s.`)

