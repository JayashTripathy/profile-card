const colors = require("./colors")
const {links, style} = require("../config.json")
const {paddingLeft, paddingRight} = require("./constants")


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

const getLongestLength = () => {
     const lengths = links.map(link => getLinkLength(link))
     const length = Math.max(...lengths)
     return length
}

const getLongestLinkNameLength = () => {
    const lengths = links.map(link => link.name.length)
    const longestLinkNameLength = Math.max(...lengths)
    return longestLinkNameLength
}


const getWidth = () => {
    const longestLink = getLongestLength()
    const width = paddingLeft + paddingRight +longestLink
    return width
}

const getFill = content => {
 const width = getWidth()
 const fill = width - paddingLeft - paddingRight - content.length
 return fill 
}

const getShift = name => {
    const longestLinkName = getLongestLinkNameLength()
    const shift = longestLinkName - name.length
    return shift
}



module.exports = {
    space,
    verticalBorder,
    horizontalBorder,
    getLinkLength,
    getLongestLength,
    getLongestLinkNameLength,
    getWidth,
    getFill,
    getShift,
}