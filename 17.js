// PTR simple interest

// Compound interest=[P(1+i)
//     n
//      ]−P
//     Compound interest=P[(1+i)
//     n
//      −1]
//     where

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter P T R :", msg => {
  let input = msg.split(" ").map(Number);
  let p = input[0];
  let t = input[1];
  let r = input[2] / 100;

  console.log("SI :", simpleInterest(p, t, r));
  console.log("CI :", compoundInterest(p, t, r));

  process.exit();
});

let simpleInterest = (P, T, R) => {
  return P * T * R;
};

let compoundInterest = (P, T, R) => {
  return P * [Math.pow(1 + R, T) - 1];
};
