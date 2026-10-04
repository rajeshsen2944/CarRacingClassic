const r = require("raylib");
const WIN = require("./windowsProperty.js");
const rd = require("./roads.js");
const clrs = require("./colors.js");
const sb = require("./scoreBoard.js");
const p = require("./player.js");

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
        const x1 = enemies[`car${i}`].x - 3;
        const x2 = enemies[`car${i}`].x + enemies[`car${i}`].width;
        const y1 = enemies[`car${i}`].y + enemies[`car${i}`].height / 6;
        const y2 = enemies[`car${i}`].y + 4 * enemies[`car${i}`].height / 6

        p.drawTyers({ x: x1, y: y1 })
        p.drawTyers({ x: x2, y: y1 })
        p.drawTyers({ x: x1, y: y2 })
        p.drawTyers({ x: x2, y: y2 })
        
        r.DrawRectangleRounded(
            enemies[`car${i}`], 0.2, 6,
            enemies[`car${i}`].color
        );

        
        p.drawCarRoof({
            x: enemies[`car${i}`].x + enemies[`car${i}`].width / 7,
            y: enemies[`car${i}`].y + enemies[`car${i}`].width / 7,
        },
            enemies[`car${i}`],
            r.YELLOW
        )

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