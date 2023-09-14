import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync()

function pedir() {
    let n1 = Number(prompt(chalk.yellow("Escreva o primeiro número: ")));
  let n2 = Number(prompt(chalk.yellow("Escreva o segundo número: ")));
  let n3 = Number(prompt(chalk.yellow("Escreva o terceiro número: ")))
    if (n1 > n2 && n1>n3) {
      return n1
    } else if (n2>n1 && n2>n3) {
      return n2
    }
    else if (n3>n1 && n3>n2){
      return n3
    }
  }
  
  const maiorValor = pedir();
  console.log(`O maior valor dos digitados é ${maiorValor}`);