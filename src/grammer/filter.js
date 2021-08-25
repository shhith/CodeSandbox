// filter
// ある条件に一致したものだけ返却して、新しい配列を生成するような関数
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  // filterの場合はreturnのあとに条件式を書いて、一致するものだけ返す動きになる
  return num % 2 === 1;
});
console.log(newNumArr);
