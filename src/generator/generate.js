const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const { infoQuestions, linkQuestions, styleQuestions } = require("./questions");

const generate = async () => {
  const config = {
    info: {},
    links: [],
  };

  console.log("\n Generate you node profile card! 🚀 \n");

  const infoAnswer = await inquirer.prompt(infoQuestions);
  config.info = infoAnswer;

  console.log("\n Enter Links!  \n");

  let newLinks = true;

  while (newLinks === true) {
    const linksAnswer = await inquirer.prompt(linkQuestions);

    config.links.push(linksAnswer);

    console.log("\n");
    const { addNewLinks } = await inquirer.prompt([
      {
        type: "confirm",
        name: "addNewLinks",
        message: "Want to add more links? \n",
      },
    ]);

    if (addNewLinks === false) {
      newLinks = false;
    }
  }
  console.log("\n Select your styling 🎨  \n");
  const styleAnswer = await inquirer.prompt(styleQuestions);

  config.style = styleAnswer;

  fs.writeFileSync("testconfig.json", JSON.stringify(config, null, 2));
};
generate();
