const sample = require("../app/fizzBuzz.js");

test("test 1.", () => {
  expect(sample.fizzBuzz(1)).toBe(1);
});

// FizzBuzz
// テスト容易性：高 重要度：高
// 数を文字列に変換する
// ただし、
// 3の倍数のときは数の代わりに "Fizz" に変換する。
// 5の倍数のときは数の代わりに "Buzz" に変換する。
// 3と5両方の倍数のときは数の代わりに "FizzBuzz"  に変換する。
// テスト容易性：低 重要度：低
// 1から100までの数字を出力せよ。
test("これは失敗するはず", () => {
  expect("string").toBe(1);
});
