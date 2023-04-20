let naveNome = prompt("Qual é o nome da nave?");

let novoNome = "";

for (let i = naveNome.length - 1; i >=0; i--) {
    if (naveNome[i] =="e") {
        break
    }
    novoNome += naveNome[i]
}

alert(`Nome inicial da nave: ${naveNome} \nNovo nome: ${novoNome}`);