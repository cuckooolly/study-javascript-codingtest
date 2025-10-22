// 내가 푼 풀이
function solution(arr, target){
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j<arr.length; j++){
            if(target == arr[i]+arr[j] && i !== j) {
                return true;
            }
        }
    }
    return false;
}

console.log(solution([2,3,5,9], 10));

// 모범 답안
function countSort(arr, k){
    // 해시 테이블 생성 및 초기화
    const hashtable = new Array(k+1).fill(0);
    for (const num of arr) {
        // 원소 값이 k 이하인 때에만 처리
        if (num <= k) {
            // 현재 원소의 값을 인덱스로 해, 해당 인덱스의 해시 테이블 값을 1로 설정
            hashtable[num] = 1;
        }
    }
}

function solution(arr, target){
    const hashtable = countSort(arr, target);
    for (const num of arr) {
        // target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
        const complement = target - num;
        if (
            complement !== num &&
            complement >= 0 &&
            complement <= target &&
            hashtable[complement] === 1
        ) {
            return true;
        }
    }
    return false;
}

console.log(solution([2,3,5,9], 10));