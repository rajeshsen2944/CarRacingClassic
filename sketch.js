const r = require("raylib");
const w = require("./windowsProperty.js");
const e = require("./enemy.js");
const p = require("./player.js")
const rd = require("./roads.js")
const sb = require("./scoreBoard.js")
// const g = require("./geometry.js");

function setup() {
    w.windowSetup();

    rd.createRoadMarkings();
    const l = rd.createLane();
    const pl = p.createPlayer();
    const n = e.createEnemies(l);

    return {
        player: pl,
        lane: l,
        noOfCars: n,
        gameOver: false
    };

}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}


function update(d) {
    if (d.gameOver) {
        return;
    }
    rd.updateRoad();  //update background

    p.checkInput(d.player);

    const enemies = e.updateEnemies(d);   //enemies

    d.gameOver = p.isPlayerColliding(d, enemies)

}


function draw(d) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    rd.drawRoad();//draw Background

    p.drawPlayer(d.player);//draw player

    e.drawEnemies(d.noOfCars);//draw enemies

    sb.drawScoreBoard(d.gameOver);//draw Score Board

    r.EndDrawing();

}


module.exports = {
    setup,
    draw,
    running,
    teardown,
    update,
}