// 문제 설명
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 내가 푼 풀이
function solution(dots) {
    // 조건 1: (y2-y1)(x4-x3) === (y4-y3)(x2-x1)
    // 조건 2: 3개의 가능한 쌍을 구해야 함
    //(1,2) vs (3,4), (1,3) vs (2,4), (1,4) vs (2,3)
    if (Math.abs(dots[0][1]-dots[1][1]) * Math.abs(dots[2][0]-dots[3][0]) === Math.abs(dots[2][1]-dots[3][1]) * Math.abs(dots[0][0]-dots[1][0])){
        return 1;
    }

    if (Math.abs(dots[2][1]-dots[0][1])*Math.abs(dots[3][0]-dots[1][0]) === Math.abs(dots[3][1]-dots[1][1])*Math.abs(dots[2][0]-dots[0][0])){
        return 1;
    }

    if (Math.abs(dots[0][1]-dots[3][1])*Math.abs(dots[1][0]-dots[2][0]) === Math.abs(dots[1][1]-dots[2][1])*Math.abs(dots[0][0]-dots[3][0])){
        return 1;
    }

    return 0;
}

// GPT가 푼 풀이
function isParallel(p1, p2, p3, p4) {
  const [x1, y1] = p1, [x2, y2] = p2;
  const [x3, y3] = p3, [x4, y4] = p4;
  return (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1);
}

function solution(dots) {
  const [a, b, c, d] = dots;
  return (
    isParallel(a, b, c, d) || // (1,2) vs (3,4)
    isParallel(a, c, b, d) || // (1,3) vs (2,4)
    isParallel(a, d, b, c)    // (1,4) vs (2,3)
  ) ? 1 : 0;
}

// 다른 사람이 푼 풀이
function solution(dots) {
    // 각 경우의 수에서 기울기가 동일한지 여부를 찾음
    if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
        return 1;
    return 0;
}

function calculateSlope(arr1, arr2) {
    // 기울기를 구하는 함수
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}