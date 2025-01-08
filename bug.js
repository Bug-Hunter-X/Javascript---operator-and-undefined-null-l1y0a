function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 2)); // NaN
console.log(foo(null, 2)); // 2
console.log(foo(2, undefined)); // NaN
console.log(foo(2, null)); // 2