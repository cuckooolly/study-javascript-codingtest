function solution(array, commands) {
    let answer = [];

    for (const command of commands) {
        // 문제 풀이에 필요한 조건을 분해
        const i = command[0];
        const j = command[1];
        const k = command[2];

        // slice를 모르고 for문으로 풀었습니다 ㅠ
        const newArray = [];
        for (let idx = i-1; idx < j; idx++){
            newArray.push(array[idx]);
        }

        // Sliced된 배열을 정렬
        const sorted_newArray = newArray.sort();

        // Command[2] = k에 따라 정렬된 값을 구합니다.
        answer.push(sorted_newArray[k-1]);
    }
    // 결과 반환
    return answer;
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3],[4,4,1],[1,7,3]]))