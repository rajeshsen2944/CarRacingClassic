const r = require("raylib");
const w = require("./windowsProperty.js");
const g = require("./geometry");

function createMarking(y) {
  const screenWidth = r.GetScreenWidth();
  return {
    start: {
      x: screenWidth / 2,
      y: y,
    },
    end: {
      x: screenWidth / 2,
      y: y + 50,
    },
    thick: 13,
    color: r.RAYWHITE,
  }
}

function initRoadMarkings() {
  const markings = [];
  let pos = 0;
  for (let i = 0; i <= 7; i++, pos += 100) {
    markings.push(createMarking(pos));
  }
  return markings;
}

function isStripOutOfWindow(startY) {
  return (startY > r.GetScreenHeight());
}

function spawnStrip(strips) {
  strips.unshift(createMarking(-50))
}

function updateStrips(strips,velocity=3) {
  for (const { start, end } of strips) {
    start.y += velocity;
    end.y += velocity;
  }

//remove and spawn a strip if it is out of window
  if (isStripOutOfWindow(strips.at(-1).start.y)) {
    spawnStrip(strips);
    strips.pop();
  }
}

// function createRoad() {
//   const width = 2 * w.window.w / 3;
//   const pos = w.window.w / 6;
//   return { pos, width };
// }

// function createLane() {
//   const road = createRoad();
//   const lane = {};

//   let i = 1;
//   while (i <= 4) {
//     lane[`l${i}`] = lanePosition(road, i);
//     i++;
//   }
//   return lane;
// }

// function lanePosition(road, i) {
//   return road.pos + road.width / 8 + (i - 1) * 100
// }

// function initRoadMarkings(markings) {
//     let i = 1;
//     let pos = 0
//     while (i <= 8) {
//         markings[`s${i}`] = createMarking(pos);
//         i++;
//         pos += 100;
//     }
// }

function drawRoadMarkings(strips) {
  for (const { start, end, thick, color } of strips) {
    r.DrawLineEx(start, end, thick, color);
  }
}

function updateRoad(strips) {

  updateStrips(strips);

}



// function drawRoadway() {

//   const road = createRoad();
//   r.DrawRectangle(
//     road.pos,
//     0,
//     road.width,
//     w.window.h,
//     w.color.road
//   );
// }

function drawRoad(strips) {
  // drawRoadway();
  drawRoadMarkings(strips);
}

// function pickLane(lane) {
//   return lane[`l${g.randomNumber(4)}`]
// }

module.exports = {
  createRoadMarkings: initRoadMarkings,
  drawRoad,
  updateRoad,
  // createRoad,
  // createLane,
  // pickLane,

}