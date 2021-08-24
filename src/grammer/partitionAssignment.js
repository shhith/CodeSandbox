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
