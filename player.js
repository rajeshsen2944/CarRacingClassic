const w = require("./windowsProperty");
const r = require("raylib");
const g = require("./geometry")

function createPlayer() {
    return {
        x: w.window.w / 2,
        y: w.window.h - 150,
        
        width: 50,
        height: 70,
    }
}

function checkInput(player) {
    if (r.IsKeyDown(r.KEY_D)) { movePlayer(player, 1); }
    if (r.IsKeyDown(r.KEY_A)) { movePlayer(player, -1); }
}

function movePlayer(p, d, SPEED = 4) {
    const nextX = p.x + d * SPEED;

    if (
        (nextX >= w.window.w / 6) &&
        (nextX + p.width <= 5 * w.window.w / 6)
    ) {
        p.x = nextX;
    }
}

function drawPlayer(p) {
    r.DrawRectangleRec(p, r.BLUE)
}

function isPlayerColliding(d, cars) {
    let i = 1;
    while (i <= d.noOfCars) {
        if (g.isColliding(d.player, cars[`car${i}`])) {
            return true;
        }
        i++;
    }
    return false;
}

module.exports = {
    drawPlayer,
    checkInput,
    createPlayer,
    isPlayerColliding
}


