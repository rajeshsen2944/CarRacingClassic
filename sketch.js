const g = require("./geometry");
const r = require("raylib");
const w = require("./windowsProperty.js");
const c = require("./enemyCars.js");
const p = require("./player.js")
const rd = require("./roads.js")
const WIN = w.window;
// let c1;
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIN.w, WIN.h, WIN.t);
    r.SetTargetFPS(WIN.f);
    r.SetWindowPosition(WIN.p.x, WIN.p.y);
    rd.createRoadMarkings();

}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}
// const enemyCar = {
//     x: 30,
//     y: 40,
//     width: 30,
//     height: 40,
// }
// function createEnemyCar() {
//     x = enemyCar.x;
//     y = enemyCar.y;
//     width = enemyCar.width;
//     height = enemyCar.height;
//     return { x, y, width, height };
// }
// function boundaryOfCar(car) {
//     if (car.y - car.height > r.GetScreenHeight()) {
//         // car.y = -car.height;
//         car = createEnemyCar();
//     }
// }
// function updateCarPosition(car) {
//     car.y += 2;
//     c1 = boundaryOfCar(car);
// }


function update() {
    rd.updateRoad(true);  //update background
    // p.checkInput();
    // updateCarPosition(c1);

}


// function drawCar(car, color) {
//     r.DrawRectangleRec(car, color);

// }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    rd.drawRoad();//draw Background

    // r.DrawRectangleRec(car,r.RED)
    // drawCar(c1, r.RED);
    // c.drawCar(r.RED);
    // createCar()
    // p.drawPlayer();
    // rd.drawRoad();


    r.EndDrawing();

}


module.exports = {
    setup,
    draw,
    running,
    teardown,
    update,
}