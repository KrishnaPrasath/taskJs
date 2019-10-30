// https://www.khanacademy.org/math/geometry-home/geometry-area-perimeter/advanced-area-with-triangles/v/area-of-an-equilateral-triangle

//area of equaliteral triangle

// sqrt(3)*side / 4

let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter a side :", msg => {
  let a;
  let input = msg.split(" ");
  a = +input[0];
  console.log(area(a));
  process.exit();
});

let area = side => {
  return (Math.sqrt(3) * Math.pow(side, 2)) / 4;
};
