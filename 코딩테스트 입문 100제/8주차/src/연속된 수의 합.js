// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return 하도록 solution함수를 완성해보세요.

// 내가 푼 코드
function solution(num, total) {
    var answer = [];
    let temp = 0;

    // 기본적으로 범위 내의 수를 순회
    for (let i=-100; i<1000; i++){
        temp = 0;

        // num에 해당하는 수만큼 순회하여
        for (let j=0; j<num; j++){
            temp += (i+j);

            // 더한 값이 정답과 맞는지 확인
            if (temp == total){

                // 맞으면, 정답 배열을 저장하여 반환
                for (let k=0; k<num; k++){
                    answer.push(i+k);
                }
                return answer;
            }
        }
    }
}

// 다른 사람이 푼 풀이
function solution(num, total) {
    // 연속된 num개의 정수 합이 total이 되도록 하는 수열을 찾는 문제

    // 수열의 시작값(min) 계산
    // - 평균값(total/num)에서 중앙을 기준으로 절반 길이(Math.floor(num/2))만큼 뺀 값
    // - Math.ceil을 사용하는 이유는 num이 짝수일 때 소수점 처리를 올려줘야 정확히 시작값이 맞음
    var min = Math.ceil(total/num - Math.floor(num/2));

    // 수열의 끝값(max) 계산
    // - 평균값(total/num)에서 절반 길이를 더한 값
    // - Math.floor를 사용해 정수로 처리
    var max = Math.floor(total/num + Math.floor(num/2));

    // min부터 max까지의 정수를 배열로 생성
    // - 길이는 (max - min + 1)
    // - 0으로 채운 뒤, map으로 인덱스에 min을 더해 실제 값을 만듦
    return new Array(max - min + 1)
        .fill(0)
        .map((el, i) => { return i + min; });
}