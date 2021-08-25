// 三項演算子
// ES2015からではないが、React等でもよく使う文法なのでここにて練習
// 使いすぎると可読性が下がってしまうので注意

// 文法は以下
// ある条件 ? 条件がtrueの時 : 条件がfalseのとき
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = "1300";
console.log(num.toLocaleString()); // 金額表示等用に3桁区切りの表記になる

// サンプル①↓numが数値のときのみtoLocaleStringを動かす
// typeof...型が何なのか判定してくれる
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

// サンプル②関数のreturn部分で三項演算子を使用する例
// num1とnum2の合計値が100を越えているかの判定
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を越えています!" : "許容範囲内です";
};
console.log(checkSum(50, 60));
