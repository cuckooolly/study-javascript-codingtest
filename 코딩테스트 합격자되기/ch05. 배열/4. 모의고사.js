function solution(answers) {
    // 패턴 정의
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    // 점수 확인
    const scores = [0, 0, 0];
    for (const [i, answer] of answers.entries()){
        for (const [j, pattern] of patterns.entries()){
            if (answer === pattern[ i % pattern.length]){
                scores[j] += 1;
            }
        }
    }

//     for (let i = 0; i < answers.length; i++) {
//         const answer = answers[i];

//         for (let j = 0; j < patterns.length; j++) {
//             const pattern = patterns[j];

//             if (answer === pattern[i % pattern.length]) {
//                 scores[j] += 1;
//             }
//         }
//     }

    // 가장 높은 점수 고르기
    const maxScore = Math.max(...scores);

    const highestScore = [] // 동점자가 있기 때문에, 배열을 만들어 저장
    for (let i = 0; i<scores.length; i++){
        if (scores[i] == maxScore){
            highestScore.push(i+1);
        }
    }
    return highestScore;
}