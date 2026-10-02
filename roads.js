const w = require("./windowsProperty.js");
const r = require("raylib");

const strips = {};

function strip(y1) {
    return {
        start: {
            x: w.window.w / 2,
            y: y1,
        },
        end: {
            x: w.window.w / 2,
            y: y1 + 50,
        },
        thick: 15,
    }
}

function createRoadMarkings() {
    let i = 1;
    let pos = 0
    while (i <= 8) {
        strips[`s${i}`] = strip(pos);
        i++;
        pos += 100;
    }
}

function stripOutOfBound(s) {
    if (s.start.y > w.window.h) {
        s.start.y = -50;
        s.end.y = s.start.y + 50;
    }
}

function stripUpdate(s,go) {
    let i = 1;
    while (i <= 8 && go ) {
        stripOutOfBound(s[`s${i}`]);

        s[`s${i}`].start.y += 3;
        s[`s${i}`].end.y += 3;
        i++;
    }
}

function drawRoadMarkings(rm) {
    let i = 1;
    while (i <= 8) {
        r.DrawLineEx(
            rm[`s${i}`].start,
            rm[`s${i}`].end,
            rm[`s${i}`].thick,
            r.RAYWHITE
        )
        i++;
    }
}

function drawRoadway() {
    const width = 2 * w.window.w / 3;
    const pos = w.window.w / 6;

    r.DrawRectangle(
        pos,
        0,
        width,
        w.window.h,
        w.color.road
    );
}




//----------------------------------------
function updateRoad(go) {
    stripUpdate(strips,go)
}
function drawRoad() {
    drawRoadway();
    drawRoadMarkings(strips);
}
module.exports = {
    createRoadMarkings,
    drawRoad,
    updateRoad,

}