// スプレッド構文(Spread syntax)
// ...と書くような構文

// 配列の展開
const arr1 = [1, 2];
console.log(arr1); //=> [1, 2]
// ↓スプレッド構文で中身を展開(順番に処理して展開してくれる)
console.log(...arr1); //=> 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
// ↓スプレッド構文
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; // 1,2以降のものを受け取る
console.log(num1);
console.log(num2);
console.log(arr3); // [3, 4, 5]

// 配列のコピー, 結合
const arr4 = [10, 20, 100];
const arr5 = [30, 40];

const arr6 = [...arr4]; // スプレッド構文で配列をこのようにコピーできる

console.log(arr6);

const arr7 = [...arr4, ...arr5]; // arr4, arr5を結合できる
console.log(arr7);

// ↓こういう風にコピーすると問題がある(参照が引き継がれてしまう, arr8を変えるとarr4も変わってしまう)
// つまり元の配列が影響を受けてしまうということ
// スプレッド構文で配列をコピーすれば、こういったことは起きずに済む
const arr8 = arr4;
arr8[0] = 100;
