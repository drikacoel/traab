import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagentaBright('Insira propriedades de CSS. Caso insira propriedade duplicada, a sessão será encerrada'))

async function questions() {
  let output = true;
  let propertiesList = ["text-align"];

  async function justCheck() {
    if (propertiesList.includes(answers.cssProperty)){
        console.log(chalk.bgRed.black('propriedade já existe'))
        console.log(chalk.bgCyan('Encerrado'))
        output=false
        
        
    }
    }

  while (output === true) {
    var answers = await inquirer.prompt([
      {
        name: "cssProperty",
        message: "Digite uma propriedade CSS",
        type: "input",
      },
      
    ]);

    justCheck()

    if (answers.cssProperty == "sair" || answers.cssProperty == "SAIR") {
      output = false;
      
      propertiesList.sort((x, y) => {
        return x.localeCompare(y);
      });
      propertiesList.forEach((property) => console.log(property));

      console.log(chalk.bgCyan('Encerrado'))
    }


     else {
      propertiesList.push(answers.cssProperty);
    }
  }
}
    questions()