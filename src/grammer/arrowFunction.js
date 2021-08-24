// アロー関数

// 従来の関数
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};
console.log(func1("func1です！"));
console.log(func2("にゃんにゃん"));

// アロー関数...=>が矢印のようなのでアロー関数と呼ばれている
// 引数を書いて、=>を書いて、その後に{}で処理を書いていく
const func3 = (str) => {
  return str;
};
console.log(func3("アロー関数っです"));

// 引数が一つの場合、()を省略できる
// 中の式が一行で終わってそれを返却するような単一式の場合、returnを省略できる

const func4 = (num1, num2) => num1 + num2;
console.log(func4(10, 20));
