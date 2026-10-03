const r = require("raylib");
const w = require("./windowsProperty.js");
const g = require("./geometry");


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
        thick: 13,
    }
}

function createRoad() {
    const width = 2 * w.window.w / 3;
    const pos = w.window.w / 6;
    return { pos, width };
}

function createLane() {
    const road = createRoad();
    const lane = {};

    let i = 1;
    while (i <= 4) {
        lane[`l${i}`] = lanePosition(road, i);
        i++;
    }
    return lane;
}

function lanePosition(road, i) {
    return road.pos + road.width / 8 + (i - 1) * 100
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

function updateRoad() {

    updateStrips(strips);

}

function updateStrips(s) {
    let i = 1;
    while (i <= 8) {
        stripOutOfBound(s[`s${i}`]);

        s[`s${i}`].start.y += 3;
        s[`s${i}`].end.y += 3;
        i++;
    }
}

function stripOutOfBound(s) {
    if (s.start.y > w.window.h) {
        s.start.y = -50;
        s.end.y = s.start.y + 50;
    }
}

function drawRoadway() {

    const road = createRoad();
    r.DrawRectangle(
        road.pos,
        0,
        road.width,
        w.window.h,
        w.color.road
    );
}

function drawRoad() {
    drawRoadway();
    drawRoadMarkings(strips);
}

function pickLane(lane) {
    return lane[`l${g.randomNumber(4)}`]
}

module.exports = {
    createRoadMarkings,
    drawRoad,
    updateRoad,
    createRoad,
    createLane,
    pickLane,

}