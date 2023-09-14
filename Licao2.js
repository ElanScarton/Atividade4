import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync()

function receber(){
    let numero = Number(prompt(chalk.blue("Escreva um número para mostrarmos sua tabuada:")))
    let limite = Number(prompt(chalk.red("Escreva o limite dessa tabuada: ")))
    let i = 0
    for(i = 0; i<limite; i++){
        let res = (i+1)*numero
        console.log(`${i+1}X${numero} = ${res}`)
    }
}

receber()