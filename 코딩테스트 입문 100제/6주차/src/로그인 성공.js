function solution(id_pw, db) {
    let hasID = false;
    let hasPW = false;

    // ID 및 PW를 db와 비교 (한번에)
    for (d of db){
        id = d[0];
        pw = d[1];

        if (id === id_pw[0] && pw === id_pw[1]) return "login";
        else if (id === id_pw[0] && pw != id_pw[1]) return 'wrong pw';
    }

    return 'fail';
}

// 다른 사람의 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  // Map 객체를 사용하여, db 배열을 키-값 쌍으로 변환
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}