function dfs(computers, visited, node) {
    visited[node] = true; // 현재 노드를 방문 처리
    for (let idx=0; idx < computers[node].length; idx++) {
        if (computers[node][idx] && !visited[idx]) { // 연결되어 있고 방문하지 않은 노드라면
            dfs(computers, visited, idx); // 재귀적으로 방문
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false); // 방문 여부를 저장할 배열

    for (let i=0; i<n; i++) {
        if (!visited[i]) { // 방문하지 않은 노드라면
            // DFS로 연결된 노드들을 모두 방문하면서 네트워크 갯수 증가
            dfs(computers, visited, i);
            answer += 1;
        }
    }

    return answer;
}