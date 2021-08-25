// mapやfilterを使った配列の処理
// これにより、従来のfor文をほぼ使わなくなった

// 従来のfor文を使った例
const nameArr = ["ito", "sato", "kato"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// mapを使った例...中にアロー関数書くと、引数の中に値が順番に入ってくる
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
// 更にこのように省略できる
nameArr.map((name) => console.log(name));

// mapの応用(自分以外の名前の語尾にさんを付ける)
const newNameArr = nameArr.map((name) => {
  if (name === "ito") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
