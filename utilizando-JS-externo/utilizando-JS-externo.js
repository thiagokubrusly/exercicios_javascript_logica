let olderName = prompt("Informe o nome da pessoa mais velha:");
let olderAge = Number(prompt("Informe a idade da pessoa mais velha:")); //DESSA FORMA FAZ O typeof SER UM NUMBER
// let olderAge = prompt("Informe a idade da pessoa mais velha:");  SE O PROMPT NÃO TIVESSE A FUNCTION Number, TERIA typeof DE STRING.

let youngerName = prompt("Informe o nome da pessoa mais nova:");
let youngerAge = Number(prompt("Informe o nome da pessoa mais nova:"));
// let youngerAge = prompt("Informe a idade da pessoa mais nova:");

let differenceAge = (olderAge - youngerAge);

alert (`A pessoa mais velha se chama ${olderName} e tem ${olderAge} anos.
    \nA pessoa mais nova se chama ${youngerName} e tem ${youngerAge} anos.
    \nA diferença de idade entre ${olderName} e ${youngerName} são de ${differenceAge} anos.`);
