import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()

function lista(){
    let quantidade = Number(prompt(chalk.greenBright("Quantos numeros deseja escrever?")))
    let i = 0
    let r = 0 
    let rec = []; 

    for(i=0; i<quantidade; i++){ 
        rec[i] =  Number(prompt(chalk.greenBright(`Escreva o ${i+1}° número`))) 
    }
    let maior = rec[0]
    let menor = rec[0]
    for(r=1; r<i; r++){
        if (rec[r]>maior){
            maior = rec[r]
        }
        else if(rec[r] < menor){
            menor = rec[r]
            
        }
    }

    console.log("O maior valor é " + maior)
    console.log("O menor valor é " + menor)
}
lista()