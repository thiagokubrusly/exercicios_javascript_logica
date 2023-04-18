let anosLuz = prompt ("Qual distância em anos-luz deseja converter?");

let listaUnidades = alert ("As opções de conversão são: \n\n1 - Parsec(pc) \n2 - Unidade Astronômica(AU) \n3 - Quilômetro(km)");

let unidadeEscolhida = prompt ("Informe o número da unidade de conversão escolhida (1, 2 ou 3): ");

let nomeDaUnidade;

let unidadeConvertida;

switch (unidadeEscolhida) {

    case "1": 
        nomeDaUnidade = "Parsec(pc)";
        unidadeConvertida = anosLuz * 0.306601;
        break;
    
    case "2": 
        nomeDaUnidade = "Unidade Astronômica(AU)";
        unidadeConvertida = anosLuz * 63241.1;
        break;

    case "3": 
        nomeDaUnidade = "Quilômetro(km)";
        unidadeConvertida = anosLuz * 9.5 * Math.pow(10, 12);
        break;

    default:
         alert (`Distância em Anos-luz: ${anosLuz}.\nUnidade não identificada: conversão fora do escopo.`);
         break;
}

alert (`Distância em anos luz: ${anosLuz}. \n${nomeDaUnidade}: ${unidadeConvertida}.`)
