const g = require("./geometry");
const r = require("raylib");

const TITLE = "Test";   //window Property
const WIN_WIDTH = 200;
const WIN_HEIGHT = 200;
const WIN_FPS = 50;
const WIN_POSITION_X = 1000;
const WIN_POSITION_Y = 10;


function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIN_WIDTH, WIN_HEIGHT, TITLE);
    r.SetTargetFPS(WIN_FPS);
    r.SetWindowPosition(WIN_POSITION_X, WIN_POSITION_Y);
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