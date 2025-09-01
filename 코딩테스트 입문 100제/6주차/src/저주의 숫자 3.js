function solution(n) {
    var answer = 0;

    // 3의 배수가 아닌 수의 목록 찾기
    x3_num = [];
    for (let i=0; i<200; i++){
        if (i % 3 != 0){
            x3_num.push(i);
        }
    }

    // 3의 배수가 아닌 수 중에서, 3이 포함되지 않은 수의 목록 찾기
    real_x3_num = [];
    for (num of x3_num) {
        num = num.toString();
        if (!num.includes("3")){
            real_x3_num.push(num);
        }
    }

    // n번째 수 리턴
    return parseInt(real_x3_num[n-1]);
}

// 다른 사람의 풀이
function solution(n) {
  return [...Array(n * 3)] // n * 3 크기의 배열 생성
    .map((_, i) => i + 1) // 1부터 n*3까지의 숫자로 채우기
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1]; // 3의 배수가 아니고, 숫자에 '3'이 포함되지 않은 숫자만 필터링 후 n번째 숫자 반환
}
