// Write a program to find maximum and minimum elements in array using recursion.

const rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the numbers :", ip => {
  let msg = ip.split(" ").map(i => {
    return parseInt(i, 10);
  });
  let min = msg[0];
  let max = 0;
  let len = msg.length;
  console.log("MIN :", findMin(msg, len, min));
  console.log("MAX :", findMax(msg, len, max));
  process.exit();
});

let findMin = (arr, len, min) => {
  if (len == 0) {
    return min;
  }

  if (arr[len - 1] < min) {
    min = arr[len - 1];
  }

  return findMin(arr, len - 1, min);
};

let findMax = (arr, len, max) => {
  if (len == 0) {
    return max;
  }
  if (arr[len - 1] > max) {
    max = arr[len - 1];
  }

  return findMax(arr, len - 1, max);
};
