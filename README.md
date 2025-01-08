# Javascript + operator and undefined/null
This repository demonstrates unexpected behavior of the + operator in JavaScript when used with undefined and null values.

The `bug.js` file contains the buggy code that showcases this behavior. The `bugSolution.js` file offers a solution that addresses the unexpected behavior, providing a more robust approach to handling undefined and null values during arithmetic operations.

The unexpected behavior stems from how JavaScript's type coercion works with the + operator and the special values of undefined and null. While null is treated as 0 during addition, undefined leads to NaN (Not a Number).  This can be unpredictable and lead to errors in calculations if not handled carefully.

The solution in `bugSolution.js` uses optional chaining and the nullish coalescing operator to handle these cases more elegantly, avoiding the implicit type coercion that could lead to unexpected NaN results.