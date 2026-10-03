const g = require("./geometry");
const colors = {
    crimson: { r: 190, g: 20, b: 60, a: 255 },
    ruby: { r: 155, g: 17, b: 30, a: 255 },
    cherry: { r: 220, g: 40, b: 60, a: 255 },

    midnight: { r: 25, g: 35, b: 65, a: 255 },
    navy: { r: 20, g: 45, b: 90, a: 255 },
    ocean: { r: 20, g: 110, b: 170, a: 255 },
    electric: { r: 30, g: 120, b: 220, a: 255 },

    emerald: { r: 20, g: 130, b: 90, a: 255 },
    forest: { r: 25, g: 80, b: 55, a: 255 },
    lime: { r: 120, g: 190, b: 40, a: 255 },

    gold: { r: 220, g: 170, b: 40, a: 255 },
    amber: { r: 240, g: 140, b: 30, a: 255 },
    sunset: { r: 230, g: 80, b: 35, a: 255 },

    violet: { r: 120, g: 50, b: 180, a: 255 },
    plum: { r: 90, g: 35, b: 100, a: 255 },

    graphite: { r: 45, g: 48, b: 52, a: 255 },
    silver: { r: 150, g: 155, b: 160, a: 255 },
    ivory: { r: 235, g: 230, b: 210, a: 255 },
};

function pickColor() {
    const colorList = Object.values(colors);
    return colorList[g.randomNumber(colorList.length) - 1];
}


module.exports = {
    pickColor,
}