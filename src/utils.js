const colors = require("./colors")
const {links, style} = require("../config.json")


const space = count =>{
    return " ".repeat(count)
}

const verticalBorder = count  =>{
    return colors.base("|").repeat(count)
}

const horizontalBorder = count => {
    return colors.base("-").repeat(count)
}

const getLinkLength = link => {
    const length = `${link.name}: ${link.url}`.length
    return length
}