function solution(spell, dic) {
    // 주어진 Spell 값을 Sort하여, 알파벳을 한번씩 사용한 단어를 만들어 냄
    spell_sorted = spell.sort().join('');
    for (d of dic){
        // dic 안의 단어를 sort하여, dic 안의 단어들이 주어진 Spell 값을 사용하는지 확인
        d_sorted = d.split("").sort().join("");
        if(spell_sorted == d_sorted){
            return 1;
        }
    }
    return 2;
}

// 다른 사람의 풀이
function solution(p, d) {
    // some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
    // sort()를 사용하는, 내 방식과 유사하지만, some() 메서드를 사용하여 더 간결하게 표현
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}