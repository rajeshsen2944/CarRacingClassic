const r = require("raylib");
function windowSetup() {
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
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(window.w, window.h, window.t);
  r.SetTargetFPS(window.f);
  r.SetWindowPosition(...window.p.x, window.p.y);
  return window;
}
module.exports = {
  windowSetup,
}