// const c = require("./enemyCars");
const r = require("raylib");


const playerCar = {
    x: r.GetScreenWidth() / 2,
    y: 700,
    width: 30,
    height: 40,
}

function drawPlayer() {
    r.DrawRectangleRec(playerCar, r.BLUE)

}
function checkInput() {
    if (r.IsKeyUp(r.KEY_A)) {
        playerCar.x += 4;
    }
    if (r.IsKeyUp(r.KEY_D)) {
        playerCar.x -= 4;
    }
}
module.exports = {
    drawPlayer,
    checkInput,
}