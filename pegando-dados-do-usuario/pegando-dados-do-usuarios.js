alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let nome = prompt("Informe o seu nome:");
let idade = prompt("Informe a sua idade:");

let idadeConfirmada = confirm(`A sua idade é ${idade}? Se estiver correta: OK. Se estiver errada: Cancelar.`); 

if (idadeConfirmada == true) {
    alert(`O seu nome é ${nome} e a sua idade é ${idade}.`);
    
} else { 
    let novaIdade = prompt("Informe a sua idade correta:");
    alert (`O seu nome é ${nome} e a sua idade é ${novaIdade}.`);
}
