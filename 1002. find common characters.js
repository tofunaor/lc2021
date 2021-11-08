var commonChars = function (words) {
  let res = [];
  let size = 26;
  let firstHash = new Array(size).fill(0);
  let a = "a".charCodeAt();
  let firstWord = word[0];
  for (let i = 0; i < firstWord.length; i++) {
    firstHash[firstWord[i].charCodeAt() - a]++;
  }
  let otherHash = new Array(size).fill(0);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      otherHash[words[i][j].charCodeAt() - a]++;
    }
    for (let i = 0; i < size; i++) {
      firstHash[i] = Math.min(firstHash[i], otherHash[i]);
    }
    otherHash.fill(0);
  }
  for (let i = 0; i < size; i++) {
    while (firstHash[i] > 0) {
      res.push(String.fromCharCode(i + a));
      firstHash[i]--;
    }
  }
  return res;
};
