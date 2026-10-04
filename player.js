const w = require("./windowsProperty");
const r = require("raylib");
const g = require("./geometry")

function createPlayer() {
    return {
        x: w.window.w / 2,
        y: w.window.h - 150,

        width: 50,
        height: 70,

        roundness: .5,
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
    const x1 = p.x - 3;
    const x2 = p.x + p.width;
    const y1 = p.y + p.height / 6;
    const y2 = p.y + 4 * p.height / 6


    r.DrawRectangleRounded(p, 0.2, 6, r.GREEN);

    drawTyers({ x: x1, y: y1 })
    drawTyers({ x: x2, y: y1 })
    drawTyers({ x: x1, y: y2 })
    drawTyers({ x: x2, y: y2 })


    drawCarRoof(
        {
            x: p.x + p.width / 7,
            y: p.y + p.height / 3
        },
        p,
        r.BLUE
    )

}
function drawCarRoof(pos, car,color) {
    pos.height = car.height / 2;

    pos.width = 5 * car.width / 7;

    r.DrawRectangleRounded(
        pos,
        0.2, 6,
        color
    );
}
function drawTyers(pos) {
    pos.height = 15;
    pos.width = 3;

    r.DrawRectangleRounded(pos, .5, 8, r.BLACK);
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
    isPlayerColliding,
    drawTyers,
    drawCarRoof,
}


