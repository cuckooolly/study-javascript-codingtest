function solution(decimal) {
    const stack = [];

    // %2 연산을 수행하고, decimal 값은 2로 나누어줌
    while (decimal) {
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }

    // stack에 들어 있는 값을 꺼내어, binary에 저장
    let binary = '';
    while (stack.length) {
        binary += stack.pop();
    }

    return binary;
}


console.log(solution(10)); // 1010

