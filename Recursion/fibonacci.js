let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter a number :", msg => {
  let n = +msg;

  process.exit();
});

let fibonacci = (n) => {
    let a = [0,1];
    let ans = a[0] + a[1];

    if (n > 0){
        
    }
    return 0;


};
