const r = require("raylib");
const WIN = require("./windowsProperty.js");
const rd = require("./roads.js");
const clrs = require("./colors.js");
const sb = require("./scoreBoard.js");

const enemies = {};

function enemy(lane, pos) {
    const width = 50;
    const height = 70;

    return {
        x: lane - (width / 2),
        y: pos,
        width: width,
        height: height,
        color: clrs.pickColor(),
    }
}

function createEnemies(lane, noOfCars = 5) {
    let i = 1;
    let pos = 0;

    while (i <= noOfCars) {
        enemies[`car${i}`] = enemy(rd.pickLane(lane), pos);

        pos -= WIN.window.h / noOfCars;
        i++;
    }

    return noOfCars;
}

function updateEnemies(d) {
    let i = 1;

    while (i <= d.noOfCars) {
        enemies[`car${i}`] =
            updateEnemyPosition(
                enemies[`car${i}`],
                d.lane
            );

        i++;
    }
    return enemies;
}

function updateEnemyPosition(car, lane, speed = 3) {
    if (carAtBoundary(car)) {
        sb.updateScore();

        return enemy(rd.pickLane(lane), -car.height);
    }

    car.y += speed;
    return car;
}

function drawEnemies(noOfCars = 5) {
    let i = 1;

    while (i <= noOfCars) {
        r.DrawRectangleRec(
            enemies[`car${i}`],
            enemies[`car${i}`].color
        );

        i++;
    }
}

function carAtBoundary(car) {
    return car.y > WIN.window.h
}

module.exports = {

    createEnemies,
    updateEnemies,
    drawEnemies,

}