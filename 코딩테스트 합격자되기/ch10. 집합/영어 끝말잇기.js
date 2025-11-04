// 내가 푼 풀이
function solution(n, words) {
    const used = new Set(); // 이미 사용된 단어들을 저장할 집합
    let prevWord = words[0][0]; // 이전 단어의 마지막 글자, 첫 단어의 첫 글자로 초기화

    for (let i=0; i<words.length; i++) {
        // 중복 단어이거나 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다르면 탈락
        if (used.has(words[i]) || words[i][0] != prevWord) {
            // 몇 번째 사람인지, 몇 번째 차례인지 계산하여 반환
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        used.add(words[i]); // 사용한 단어로 추가
        prevWord = words[i].slice(-1); // 이전 단어의 마지막 글자 업데이트
    }
    return [0, 0]; // 모두 통과했을 경우 반환값
}

// 다른 사람이 푼 풀이
function solution(n, words) {
    let answer = 0; // 탈락한 사람의 인덱스 저장 변수

    // reduce를 사용하여 이전 단어의 마지막 글자를 추적하면서 탈락 조건 검사
    words.reduce((prev, now, idx) => {
        // 탈락 조건: 이미 사용된 단어이거나 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다름
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        // 현재 단어의 마지막 글자를 반환하여 다음 반복에서 이전 단어로 사용
        return now[now.length-1];
    }, "")
    // 탈락한 사람이 있으면 몇 번째 사람인지, 몇 번째 차례인지 계산하여 반환
    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}