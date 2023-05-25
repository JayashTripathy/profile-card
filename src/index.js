const { links } = require("../config.json");
const { getBlankLine, getTopBorder, getLinkLine } = require("./builder");

const card = [
  getTopBorder(),
  getBlankLine(),
  getBlankLine(),
  ...links.map((link) => getLinkLine(link.name, link.url)),

  getBlankLine(),
  getBlankLine(),
  getTopBorder(),
].join("\n");


console.log(card)