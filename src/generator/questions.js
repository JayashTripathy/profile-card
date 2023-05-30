const infoQuestions = [
  {
    type: "input",
    name: "name",
    message: "Your Good Name ",
  },
  {
    type: "input",
    name: "title",
  },
];
const linkQuestions = [
  {
    type: "input",
    name: "name",
    message: "link title",
  },
  {
    type: "input",
    name: "url",
    message: "link url",
  },
];

const styleQuestions = [
  {
    type: "list",
    name: "corner",
    message: "Corner style: ",
    choices: [
      { name: "┗――――――――――――――――――――――――――――――――――┛", value: "base" },
      { name: "◥――――――――――――――――――――――――――――――――――◤", value: "triangle" },
      { name: "✜――――――――――――――――――――――――――――――――――✜", value: "plus" },
      { name: "⟐――――――――――――――――――――――――――――――――――⟐", value: "premium" },
    ],
  },
  {
    type: "list",
    name: "border",
    message: "Border style: ",
    choices: [
      { name: "――――――――――――――――――――――――――――――――――", value: "base" },
      { name: "┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉", value: "dotted" },
    ],
  },
  {
    type: "list",
    name: "baseColor",
    message: "Primary color: ",
    choices: [
      "White","Magenta", "Cyan", "Gray" 
    ],
  },
  {
    type: "list",
    name: "accentColor",
    message: "Secondary color: ",
    choices: [
      "Blue","Magenta", "Cyan", "Gray" 
    ],
  },
];

module.exports = {
  infoQuestions,
  linkQuestions,
  styleQuestions,
  
};
