// const r = require("raylib");

// const enemyCar = {


//     x: 30,
//     y: 40,
//     width: 30,
//     height: 40,

// }

// // lane: {
// //     l1:r.GetScreenWidth()/4     //x
// // }
// function car(l) {

//     return {
//         x: 30,
//         y: 40,
//         width: 30,
//         height: 40,
//     }
// }
// function createCar() {
//     return c = drawCar(r.RED);
//     boundaryOfCar()
// }
// function drawCar(color) {
//     const c = car();
//     r.DrawRectangleRec(c, color);
//     return c;

// }
// function boundaryOfCar(car = enemyCar.c1) {
//     if (car.y + car.height > r.GetScreenHeight()) {
//         car.y = -car.width;
//     }
// }
// function updateCarPosition(car = enemyCar.c1) {
//     car.y += 2;
//     boundaryOfCar(car);
// }

// module.exports = {
//     drawCar,
//     enemyCar,
//     updateCarPosition,
// }