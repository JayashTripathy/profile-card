const {
  space,
  verticalBorder,
  horizontalBorder,
  getLinkLength,
  getLongestLength,
  getLongestLinkNameLength,
  getWidth,
  getFill,
  getShift,
} = require("./utils");
const corners = require("./corners");
const colors = require("./colors");
const {
  marginLeft,
  paddingLeft,
  paddingRight,
  indent,
  marginRight,
  titlePaddingLeft,
} = require("./constants");
const { links, info } = require("../config.json");

const getTopBorder = () => {
  const topBorder = [
    space(marginLeft),
    colors.base(corners["premium"].topLeft),
    colors.base(horizontalBorder(getWidth())),
    colors.base(corners["premium"].topRight),
    space(marginRight),
  ].join("");

  return topBorder;
};

const getBlankLine = () => {
  const blankLine = [
    colors.base(space(marginLeft)),
    colors.base(verticalBorder(1)),
    colors.base(space(getWidth())),

    colors.base(verticalBorder(1)),
    space(marginRight),
  ].join("");

  return blankLine;
};

const getLine = (content) => {
  const line = [
    space(marginLeft),
    colors.base(verticalBorder(1)),
    space(paddingLeft),
    content,
    space(paddingRight),
    colors.base(verticalBorder(1)),
    space(marginRight),
  ].join("");

  return line;
};

const getLinkLine = (name, url) => {
  const shift = getShift(name);
  const content = [space(shift + indent), name, ": ", url].join("");
  const fill = getFill(content);

  const formattedContent = [
    space(shift + indent),
    colors.base(name),
    colors.base(": "),
    colors.accent(url),
    space(fill),
  ].join("");

  const line = getLine(formattedContent);
  return line;
};

const getTitleLine = (name) => {
   
  const titleFill = getWidth() - titlePaddingLeft - name.length 

  const titleLine = [
     colors.base(space(marginLeft)),
     colors.base(verticalBorder(1)),
     colors.base(space(titlePaddingLeft)),
     colors.base(name),
     colors.base(space(titleFill)),
     colors.base(verticalBorder(1)),
     
  ].join("")

  return titleLine

}

// console.log(getTopBorder());
// console.log(getBlankLine());
// console.log(getBlankLine());
// console.log(...links.map((link) => getLinkLine(link.name, link.url)));

// console.log(getBlankLine());
// console.log(getBlankLine());
// console.log(getTopBorder());



module.exports = {
  getBlankLine,
  getTopBorder,
  getLinkLine,
  getTitleLine,
}