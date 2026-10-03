const r = require("raylib");
const window = {
    t: "Car Classic ",
    w: 600,
    h: 750,
    f: 50,
    p: {
        x: 1100,
        y: 10,
    },
}
function windowSetup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.w, window.h, window.t);
    r.SetTargetFPS(window.f);
    r.SetWindowPosition(window.p.x, window.p.y);
    return window;
}
const color = {
    road: { r: 94, g: 94, b: 94, a: 255 }
}
module.exports = {
    window,
    windowSetup,
    color,
}