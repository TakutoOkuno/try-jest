const sample = require("../app/fizzBuzz.js");

// FizzBuzz
// テスト容易性：高 重要度：高
// 数を文字列に変換する
  // 1を渡すと文字列 "1" に変換する
// ただし、
// 3の倍数のときは数の代わりに "Fizz" に変換する。
// 5の倍数のときは数の代わりに "Buzz" に変換する。
// 3と5両方の倍数のときは数の代わりに "FizzBuzz"  に変換する。
// テスト容易性：低 重要度：低
// 1から100までの数字を出力せよ。
test("数を文字列に変換する", () => {
  // 準備
  // 実行
  const actual = sample.fizzBuzz(1)
  // 検証
  expect(actual).toBe("1");
});
