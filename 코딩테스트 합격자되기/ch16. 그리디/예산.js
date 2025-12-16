// 문제: 지원금 배열에 지원할 금액이 들어 있고,
// 지원할 수 있는 예산이 정해져 있을 때,
// 최대로 지원할 수 있는 횟수는?
function solution(d, budget) {
    // 정렬을 하여, 가장 낮은 예산이 먼저 오도록 합니다.
    const sorted_d = d.sort((a,b) => {return a-b});

    // 변수를 선언합니다.
    let remain_budget = budget; //
    let count = 0

    // 배열의 값(지원금)을 불러옵니다.
    for (const num_d of sorted_d){
        // 남은 예산이 요구하는 지원금보다 크거나 같으면
        if (remain_budget >= num_d){
            // 예산을 지원하고
            remain_budget -= num_d;
            // 지원 횟수를 하나 더 늘립니다.
            count += 1;
        }
    }
    // 반환: 예산이 지원할 수 있는 가장 큰 지원 횟수
    return count;
}

// d: 지원금 배열 / budget: 지원할 수 있는 예산
console.log(solution([1, 3, 2, 5, 4], 9)); // 3