import { createInterface } from "readline";
let prompts = createInterface(process.stdin, process.stdout);

prompts.question("Enter the numbers :", ip => {
  let msg = ip.split(" ");
  let a = +msg[0];
  let b = +msg[1];
  let res = [];

  let ans = rcd(a, b, 2, res);
  console.log("GCD : ", ans[ans.length - 1]);
  process.exit();
});

let rcd = (x, y, n, result) => {
  if (n == x) {
    return result;
  }
  if ((x % n == 0) & (y % n == 0)) {
    result.push(n);
  }
  return rcd(x, y, ++n, result);
};

let cd = (x, y) => {
  let dict = [];
  let temp = 0;
  let n;
  if (x < y) {
    n = x;
  } else {
    n = y;
  }

  for (let i = 2; (i < x) & (i < y); i++) {
    if ((x % i == 0) & (y % i == 0)) {
      dict.push(i);
    }
  }
  return dict;
};
