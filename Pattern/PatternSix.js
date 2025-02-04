function PatternSix(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let column = 0; column < n; column++) {
      if (column < n - row) {
        str += column + 1 + "";
      }
    }
    console.log(str);
    str += "";
  }
  return "";
}

console.log(PatternSix(4));
