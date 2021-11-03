// sync.js

// function
syncAdd = (values) => {
  const total = values.reduce((prev, item) => (prev + item), 0);
  console.log(`Sync Total: ${total}`);
  return total;
}

// main thread
const numbers = [1, 2, 3, 4, 5];
const total = syncAdd(numbers);
console.log(`Main Total: ${total}`);

// result:
// Sync Total: 15
// Main Total: 15
