const g = require("./geometry");
const r = require("raylib");
const w = require("./windowsProperty.js");
const TITLE = "Test";   //window Property
// const WIN_WIDTH = 500;
// const WIN_HEIGHT = 800;
// const WIN_FPS = 50;
// const WIN_POSITION_X = 1000;
// const WIN_POSITION_Y = 10;
const WIN = w.window;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIN.w, WIN.h, WIN.t);
    r.SetTargetFPS(WIN.f);
    r.SetWindowPosition(WIN.p.x, WIN.p.y);
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.EndDrawing();

}


module.exports = {
    setup,
    draw,
    running,
    teardown,
    update,
}