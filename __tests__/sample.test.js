const sample = require("../app/sample.js")

test('test 1.', () => {
    expect(sample.fizzBuzz(1)).toBe(1)
})

// FizzBuzz
// 1から100までの数字を出力せよ。
// ただし、3の倍数のときは "Fizz"、
// 5の倍数のときは "Buzz"、
// 3と5両方の倍数のときは "FizzBuzz" と出力せよ。
