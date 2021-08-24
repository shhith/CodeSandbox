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

////////////////////////////////////////////////////////////////////

// 分割代入
const myProfile = {
  name: "ito",
  age: 23
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);
// これだと数が増えたら冗長になってしまう...
// 以下が分割代入の書き方
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
// 分割代入を使うと、処理の最初の方でオブジェクトから指定のプロパティを抜き出して、自由に使うことができる
// そのためコード自体も簡潔になり、見やすくなる

// ↓分割代入はオブジェクトだけでなく、配列にも使うことができる
const myProfile2 = ["ito", 23];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message3);
const [myname, myage] = myProfile2;
const message4 = `名前は${myname}です。年齢は${myage}です。`;
console.log(message4);
// ※ 配列の分割代入は順番が大切になる
