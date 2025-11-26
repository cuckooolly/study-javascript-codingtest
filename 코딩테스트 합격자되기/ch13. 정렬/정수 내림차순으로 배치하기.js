function solution(n) {
    const numbers = n.toString();

    const sorted = numbers.split('').sort((a,b) => b-a).join('');

    return parseInt(sorted);
}

console.log(solution(118372));