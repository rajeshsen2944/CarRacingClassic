const w = require("./windowsProperty");
const r = require("raylib");

const board = {
    bg: {
        x: 0,
        y: 0,
        width: w.window.w,
        height: 100,
    },
    score: 0
}
const scoreCard = {
    dimention: {
        x: board.bg.x + 10,
        y: board.bg.y + 20,
        width: 120,
        height: 70,
    },
    thick: 5,
    color: r.WHITE,
}
const scoreText = {
    x: board.bg.x + 20,
    y: board.bg.y + 35,
    size: 20,
    color: r.WHITE,
}
function name(params) {
    const scoreText = { x: board.bg.x + 20, y: board.bg.y + 35, size: 20, color: r.WHITE }
}
function updateScore() {
    ++board.score;
}
function drawGameOver(flag) {
    if (flag) {
        r.DrawRectangle(
            0,
            0,
            w.window.w,
            w.window.h,
            r.ColorAlpha(
                r.BLACK,
                0.6
            )
        );

        r.DrawText("GAME OVER",
            104,
            w.window.h / 2 - 100,
            65,
            r.WHITE
        );

        r.DrawText(
            `score  ${board.score}`,
            2 * w.window.w / 5,
            w.window.h / 2,
            30,
            r.RED
        );
    }
}
function drawScoreBoard(gameover) {
    r.DrawRectangleRec(board.bg, r.BLACK);

    r.DrawRectangleLinesEx(
        scoreCard.dimention,
        scoreCard.thick,
        scoreCard.color
    );

    r.DrawText(
        `score  ${board.score}`,
        scoreText.x,
        scoreText.y,
        scoreText.size,
        scoreText.color
    );
    drawGameOver(gameover);

}

module.exports = {
    drawScoreBoard,
    updateScore,
    drawGameOver,
    // restsrt
}