// Define an asynchronous function that takes an array as input
const iterateWithAsyncAwait = async (arr) => {
  // Log an initial message to indicate the start of the process
  console.log("Logging each value with a delay of 1 second between logs.");

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Await a Promise that resolves after a 1-second delay
    await new Promise((resolve) =>
      setTimeout(() => {
        // Log the current array element
        console.log(arr[i]);
        // Resolve the Promise to continue to the next iteration
        resolve();
      }, 1000)
    );
  }
};

// Call the function with an array of numbers
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
