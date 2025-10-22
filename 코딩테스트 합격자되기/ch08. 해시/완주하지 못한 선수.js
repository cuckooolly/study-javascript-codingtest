function solution (participant, completion) {
    let hashTable = {};

    // 참가자의 이름을 해시 테이블에 추가하거나,
    // 참가 횟수를 한 번씩 더함
    for(const p of participant){
        if(hashTable[p]) {
            hashTable[p] += 1;
        } else {
            hashTable[p] = 1;
        }
    }

    // 완주 목록에 있는 선수는, 해시 테이블에서 제거한다.
    for(const c of completion){
        hashTable[c] -= 1;
    }

    // 해시 테이블에 남아있는 선수가 완주하지 못한 선수
    for (const key in hashTable){
        if(hashTable[key] > 0){
            return key;
        }
    }
}

console.log(solution(["leo","kiki"], ["leo"]));