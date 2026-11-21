
const randomBetween = function (i) {
  return Math.floor(Math.random() * i) + 1;
}

const checkSideCollide = function (aPos, bPos, bSize) {
  return aPos < bPos + bSize;
}

const isColliding = function (a, b) {
  const horizonCheck = checkSideCollide(a.x, b.x, b.width) &&
    checkSideCollide(b.x, a.x, a.width);
  const verticalCheak = checkSideCollide(a.y, b.y, b.height) &&
    checkSideCollide(b.y, a.y, a.height);
  return horizonCheck && verticalCheak;
}

module.exports = {
  // lanePosition,
  randomNumber: randomBetween,
  isColliding,
}