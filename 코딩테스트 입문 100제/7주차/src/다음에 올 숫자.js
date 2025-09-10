// 내가 푼 문제
function solution(common) {
    const a = common[0];
    const b = common[1];
    const c = common[2];
    const last = common[common.length-1];
    let diff = 0;
    // 등차수열인 경우 계산
    // 등차수열 판별식: 2b = a + c
    if (2*b == a + c){
        diff = b - a;
        return last + diff;
    }

    // 등비수열인 경우 계산
    // 등비수열 판별식: b^2 = a * c
    if (Math.pow(b,2) == a * c){
        diff = b / a;
        return last * diff;
    }

    return 0;
}

// 다른 사람이 푼 문제 (???)

// 주어진 수열(common)의 다음 항을 계산해 반환하는 함수
function solution(common) {
    // 첫 3개의 차이가 같으면 등차수열로 판별
    if ((common[1] - common[0]) == (common[2] - common[1])) {
        // 마지막 항을 꺼내(pop) 공차( common[1]-common[0] )를 더해 다음 항 반환
        return common.pop() + (common[1] - common[0]);
        // 등차수열이 아니면
    } else {
        // 마지막 항을 꺼내(pop) 공비( common[1]/common[0] )를 곱해 다음 항 반환
        return common.pop() * (common[1] / common[0]);
    }
}
