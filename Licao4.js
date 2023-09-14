import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()

let nome = prompt("Qual é o seu nome?");
let hobbies = [];
let hobby = null;

while (hobby !== "") {
  hobby = prompt("Insira um hobby (ou deixe em branco e tecle enter para finalizar):");
  if (hobby !== "") {
    hobbies.push(hobby);
  }
}

if (hobbies.length > 0) {
  let resultado = nome + " | " + hobbies.join(", ");
  console.log(resultado);
} else {
  console.log("Nenhum hobby inserido.");
}




