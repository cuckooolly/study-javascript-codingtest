// 테스트 데이터
const testData = "2050525020502050";

// 성능 측정 함수
function measurePerformance(func, data, iterations = 100000) {
    console.time(`${func.name} 성능 측정`);
    for (let i = 0; i < iterations; i++) {
        func(data);
    }
    console.timeEnd(`${func.name} 성능 측정`);
}

// 방법 1: for...of 반복문 사용
function solution1(rsp) { // solution1 성능 측정: 38.215ms
    var answer = '';

    for (r of rsp) {
        if (r == "2") {
            answer += "0";
        } else if (r == "0") {
            answer += "5";
        } else if (r == "5") {
            answer += "2";
        }
    }

    return answer;
}

// 방법 2: map() 함수 사용
function solution2(rsp) { // solution2 성능 측정: 33.223ms
    return rsp.split('').map(r => {
        if (r === "2") return "0";
        if (r === "0") return "5";
        if (r === "5") return "2";
    }).join('');
}



measurePerformance(solution1, testData);
measurePerformance(solution2, testData);