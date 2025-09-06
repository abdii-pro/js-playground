function fabonacci(n) {
  if (n <= 1) {  // base case 0 and 1
    return n;
  }
return fabonacci(n - 1) + fabonacci(n - 2);  // 0, 1, 1, 2, 3, 5, 8, 13
}

console.log(fabonacci(7));