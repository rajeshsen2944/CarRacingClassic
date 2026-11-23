const r = require("raylib");
const createWindow = function (width, height, fps, position) {
  return {
    title: "Car Classic",
    width,
    height,
    fps,
    position,
  }
}

const windowSetup = function () {
  const w = createWindow(600, 750, 50, [1100, 10]);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(w.width, w.height, w.title);
  r.SetTargetFPS(w.fps);
  r.SetWindowPosition(...w.position);

  return w;
}
module.exports = {
  windowSetup,
}