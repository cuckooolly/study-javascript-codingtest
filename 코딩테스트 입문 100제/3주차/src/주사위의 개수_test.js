// 테스트 데이터
const testBox = [10, 8, 6];
const testN = 3;

// 성능 측정 함수
function measurePerformance(func, box, n, iterations = 1000000) {
    console.time(`${func.name} 성능 측정`);
    for (let i = 0; i < iterations; i++) {
        func(box, n);
    }
    console.timeEnd(`${func.name} 성능 측정`);
}

// 방법 1: for...of 반복문 사용
function solution1(box, n) { // solution1 성능 측정: 18.01ms
    var answer = 1;

    for (b of box) {
        answer *= Math.trunc(b/n);
    }

    return answer;
}

// 방법 2: 구조 분해 할당 사용
function solution2(box, n) { // solution2 성능 측정: 25.632ms
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

measurePerformance(solution1, testBox, testN);
measurePerformance(solution2, testBox, testN);