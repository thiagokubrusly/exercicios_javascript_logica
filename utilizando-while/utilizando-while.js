let numeroDobras = 0;
let escolheuDobraEspacial = "";

let nomeNave = prompt("Informe o nome da nave:");

escolheuDobraEspacial = prompt("Deseja entrar em dobra espacial? \n1 - Sim \n2 - Não");

while (escolheuDobraEspacial == "1") {
    numeroDobras += 1;
    escolheuDobraEspacial = prompt("Deseja realizar a próxima dobra espacial? \n1 - Sim \n2 - Não");
}

alert (`Nave: ${nomeNave}. \nQuantidade de dobras espaciais: ${numeroDobras}.`);