// async.js

const DELAY_TIME = 2000; // ms

// function
asyncAdd = (values) => {
  setTimeout(
    () => {
      const total = values.reduce((prev, item) => (prev + item), 0);
      console.log(`Async Total: ${total}`);
      return total;
    }, DELAY_TIME
  );
}

// main thread
const numbers = [1, 2, 3, 4, 5];

// total is undefined until DELAY_TIME later
const total = asyncAdd(numbers);

// this line will run without waiting the previous line to complete
console.log(`Main Total: ${total}`);

// result:
// Main Total: undefined
// (2 seconds later...)
// Async Total: 15
