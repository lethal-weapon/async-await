// async-promise.js

const DELAY_TIME = 2000; // ms

// function
asyncAdd = (values) => {
  return new Promise(
    callback => {
      setTimeout(
        () => {
          const total = values.reduce((prev, item) => (prev + item), 0);
          console.log(`Async Promise Total: ${total}`);
          callback(total);
        }, DELAY_TIME
      );
    }
  );
}

// main thread
const numbers = [1, 2, 3, 4, 5];

asyncAdd(numbers).then(
  total => console.log(`Main Total: ${total}`)
);

// result:
// (2 seconds later...)
// Async Promise Total: 15
// Main Total: 15
