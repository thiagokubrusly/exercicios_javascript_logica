let naveNome = prompt ("Qual é o nome da nave?");

let letraEscolhida = prompt ("Qual caractere deseja substituir?");

let letraTrocada = prompt ("Por qual caractere deseja substituir?");

let novaNaveNome = "";

for (var position = 0; position < naveNome.length; position++) {
    if (naveNome[position] == letraEscolhida) {
        novaNaveNome += letraTrocada
    } else {
        novaNaveNome += naveNome[position]
    }
}

alert (`O novo nome da nave é: ${novaNaveNome}.`)