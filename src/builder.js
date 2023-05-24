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
const { marginLeft } = require("./constants");

const getTopBorder = () => {
  const topBorder = [
    space(marginLeft),
    colors.base(corners["premium"].topLeft),
    colors.base(horizontalBorder(getLongestLength())),
    colors.base(corners["premium"].topRight),
  ].join("");

  return topBorder;
};

const getBlankLine = () => {
  const blankLine = [
    colors.base(space(marginLeft)),
    colors.base(verticalBorder(1)),
  ].join("");

  return blankLine;
};

console.log(getTopBorder());
console.log(getBlankLine());
