// デフォルト値

const sayHello = (name) => console.log(`こんにちは${name}さん。`);
sayHello("ito");
// 引数なしでsayHello関数を呼び出すと、「こんにちはundefinedさん」となってしまう
// ナンセンス＆バグの温床となりかねないので、デフォルト値を設定したい...

// 以下のように「=」と書くと、初期値を設定できる
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
sayHello2();
