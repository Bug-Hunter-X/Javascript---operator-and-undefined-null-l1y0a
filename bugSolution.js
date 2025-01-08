function foo(a, b) {
  // Use optional chaining and nullish coalescing operator
  const aValue = a ?? 0; // a ?? 0: If a is null or undefined, use 0. Otherwise use a.
  const bValue = b ?? 0; // b ?? 0: If b is null or undefined, use 0. Otherwise use b.
  return aValue + bValue;
}

console.log(foo(undefined, 2)); // 2
console.log(foo(null, 2)); // 2
console.log(foo(2, undefined)); // 2
console.log(foo(2, null)); // 2