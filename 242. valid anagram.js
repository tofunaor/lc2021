var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const resSet = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for (const i of s) {
    resSet[i.charCodeAt() - base]++;
  } // 标记次数
  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) return false; // t中出现了s中没有的
    resSet[i.charCodeAt() - base]--;
  }
  return true;
};
