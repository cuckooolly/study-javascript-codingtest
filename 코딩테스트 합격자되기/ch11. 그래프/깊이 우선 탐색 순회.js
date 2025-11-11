function solution(graph, start) {
    // 그래프를 인접 리스트로 변환
    const adjList = {};
    graph.forEach(([u, v]) => {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push(v);
    });

    // DFS 탐색 함수
    function DFS(node, visited, result) {
        visited.add(node); // 현재 노드를 방문한 노드들의 집합에 추가
        result.push(node); // 현재 노드를 결과 배열에 추가
        (adjList[node] || []).forEach((neighbor) => { // 현재 노드와 인접한 노드 순회
            if (!visited.has(neighbor)) { // 아직 방문하지 않은 노드라면
                DFS(neighbor, visited, result);
            }
        });
    }
    const visited = new Set();
    const result = [];
    DFS(start, visited, result); // 시작 노드에서 깊이 우선 탐색 시작

    return result; // DFS 탐색 결과 반환
}

console.log(solution([['a','b'],['b','c'],['c','d'],['d','e']], 'a')); // [ 'a', 'b', 'c', 'd', 'e' ]