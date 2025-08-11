console.time()

function solution(my_string) {
    // 숫자만 추출하여 배열로 변환
    const numbers = my_string.replace(/\D/g,"").split("");
    // 문자열을 숫자로 전환후 정렬
    return numbers.map(Number).sort();
}

console.timeEnd();