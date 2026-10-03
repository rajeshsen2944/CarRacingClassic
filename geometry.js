

function randomNumber(i) {
    return Math.floor(Math.random() * i) + 1;
}
function isColliding(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

module.exports = {
    // lanePosition,
    randomNumber,
    isColliding,
}