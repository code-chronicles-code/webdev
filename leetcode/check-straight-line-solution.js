/**
 * LeetCode problem # 1232, 'Check If It Is a Straight Line'
 * https://leetcode.com/problems/check-if-it-is-a-straight-line
 */

function isStraight([[ax, ay], [bx, by], [cx, cy]]) {
  return (by - ay) * (cx - bx) === (cy - by) * (bx - ax);
}

function checkStraightLine(coordinates) {
  if (coordinates.length === 2) {
    return true;
  }
  for (let i = 2; i < coordinates.length; ++i) {
    if (!isStraight([coordinates[0], coordinates[1], coordinates[i]])) {
      return false;
    }
  }
  return true;
}
