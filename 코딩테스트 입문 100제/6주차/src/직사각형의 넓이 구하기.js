function solution(dots) {
    // 길이 구하는 방법: 전체 좌표 중 (최대−최소)=가로/세로
    const xs = dots.map(p=>p[0]);
    const ys = dots.map(p=>p[1]);

    const width = Math.max(...xs) - Math.min(...xs)
    const height = Math.max(...ys) - Math.min(...ys)

    // 정답: 직사각형의 넓이
    return width * height;
}

// 다른 사람의 풀이
function solution(dots) {
    let x = [],
        y = [];

    for (let pos of dots) {
        x.push(pos[0]);
        y.push(pos[1]);
    }

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}