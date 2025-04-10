const iterateWithAsyncAwait = async (arr) => {
  console.log("Logging each value with a delay of 1 second between logs.");
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(arr[i]);
        resolve();
      }, 1000)
    );
  }
};

iterateWithAsyncAwait([1, 2, 3, 4, 5]);
