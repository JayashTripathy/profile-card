const { links, info } = require("../config.json");
const {
  getBlankLine,
  getTopBorder,
  getLinkLine,
  getTitleLine,
} = require("./builder");

const card = [
  getTopBorder(),
  getBlankLine(),
  getTitleLine(info.name),
  getTitleLine(info.title),
  getBlankLine(), 

  ...links.map((link) => getLinkLine(link.name, link.url)),

  getBlankLine(),
  getBlankLine(),
  getTopBorder(),
].join("\n");

console.log(card);
