function solution(arr) {
    arr.sort((a,b) => a - b);
    return arr;
}

const result = solution([1, -5, 2, 4, 3]); // [-5, 1, 2, 3, 4]
console.log(result);