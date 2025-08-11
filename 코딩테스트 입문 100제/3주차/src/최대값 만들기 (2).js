console.time("My Code");

function solution(numbers) {
    var answer = -Infinity;

    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            const temp = numbers[i] * numbers[j];
            if (temp > answer) {
                answer = temp;
            }
        }
    }

    return answer;
}

console.timeEnd("My Code"); // default: 0.008ms