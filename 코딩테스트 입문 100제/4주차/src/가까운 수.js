function solution(array, n) {
    var answer = 0;
    let min_diff = Infinity;

    for (arr of array) {
        const temp_diff = Math.abs(n - arr);
        if (temp_diff < min_diff || (temp_diff === min_diff && arr < answer)) {
            min_diff = temp_diff;
            answer = arr;
        }
    }
    return answer;
}