// 59. spiral matrix.js
var generateMatrix = function (n) {
  let startX = (startY = 0);
  let loop = Math.floor(n / 2); //how many rounds can n spiral
  let mid = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX,
      col = startY;
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }
    for (; col > startX; col--) {
      res[row][col] = count++;
    }
    for (; row > startY; row--) {
      res[row][col] = count++;
    }
    startX++;
    startY++;
    offset += 2;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};
