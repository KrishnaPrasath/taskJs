let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);
let rest, month, week;
prompts.question("Enter the days :", msg => {
  let days = +msg;
  rest = days % 365;

  if (rest > 30) {
    month = months(rest);
    rest = rest / 7;

    week = weeks(rest);
  }
  console.log("Years : ", years(days));
  console.log(month, week);
  process.exit();
});

let years = days => {
  return Math.floor(days / 365);
};

let months = days => {
  return Math.floor(rest / 30);
};

let weeks = days => {
  return Math.floor(rest / 7);
};
