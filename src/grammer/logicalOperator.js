// 論理演算子の本当の意味を知ろう && ||

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// ↑実はこいつら「または」とか「かつ」という意味ではない

// 実は「または」と読んでいた||は、「左側がfalseとなるときに右側を返す」という意味になる
// jsではnullはfalse判定になるため、以下の場合だと右側の"金額未設定です"を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す(||とは逆)
// なぜif文で「かつ」という動きをするかというと、左側がtrueならそのまま右側を返す、そのためif文自体がfalse判定になる
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
