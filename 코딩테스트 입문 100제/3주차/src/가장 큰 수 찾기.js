function solution(array) {
    var answer = [];
    let maxValue = -Infinity;
    let maxIndex = 0;

    for (let i=0; i<array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }

    answer.push(maxValue);
    answer.push(maxIndex);

    return answer;
}