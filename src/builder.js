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
const { premium } = require("./corners");
const colors = require("./colors");
const { marginLeft } = require("./constants");



const getTopBorder = () => {
  const topBorder = [
    space(marginLeft),
    colors.base(premium.topLeft),
    colors.base(horizontalBorder(getLongestLength())),
    colors.base(premium.topRight),
  ].join("");

  return topBorder;
};

console.log(getTopBorder());
