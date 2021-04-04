const sample = require("../app/fizzBuzz.js");

// FizzBuzz
// テスト容易性：高 重要度：高
// 数を文字列に変換する
// 1を渡すと文字列 "1" に変換する
// 2を渡すと文字列 "2" に変換する
// ただし、
// 3の倍数のときは数の代わりに "Fizz" に変換する。
// 3を渡すと文字列 "Fizz" を返す
// 5の倍数のときは数の代わりに "Buzz" に変換する。
// 5を渡すと文字列 "Buzz" を返す
// 3と5両方の倍数のときは数の代わりに "FizzBuzz"  に変換する。
// 15を渡すと文字列 "FizzBuzz" を返す
// テスト容易性：低 重要度：低
// 1から100までの数字を出力せよ。
test('数を渡すと文字列に変換する', () => {
  expect(sample.fizzBuzz(1)).toBe("1");
});

test('3の倍数のときは数の代わりに "Fizz" に変換する', () => {
  expect(sample.fizzBuzz(3)).toBe("Fizz");
});

test('5の倍数のときは数の代わりに "Buzz" に変換する', () => {
  expect(sample.fizzBuzz(5)).toBe("Buzz");
});

test('3と5両方の倍数のときは数の代わりに "FizzBuzz"  に変換する', () => {
  expect(sample.fizzBuzz(15)).toBe("FizzBuzz");
  expect(sample.fizzBuzz(45)).toBe("FizzBuzz");
});
