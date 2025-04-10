TASK 1

Iterating with Async/Await - Async Array Logger
This project demonstrates how to iterate over an array using async/await in JavaScript, introducing a delay between each log operation.

📄 Description
The iterateWithAsyncAwait function logs each element of an input array to the console with a 1-second delay between each log. It utilizes asynchronous programming with async/await and JavaScript's setTimeout function to simulate delay.

🧠 How It Works
The function takes an array as an argument.

It loops through the array.

For each element, it waits 1 second before logging the value to the console.

This delay is achieved using a Promise wrapped around setTimeout.

🔧 Usage
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

💡 Example Output
Logging each value with a delay of 1 second between logs.
1
2
3
4
5
Each number is logged to the console one second apart.

📁 Requirements
Node.js or a modern browser (for ES6+ support)

✅ Notes
This is useful for learning how to handle asynchronous flows and timed operations in JavaScript. It's also a great introduction to how async/await interacts with Promises.


TASK 2

Awaiting a Call - 🧪 Simulated API Call with Async/Await
This project demonstrates how to simulate an asynchronous API call using Promises and async/await in JavaScript.

📄 Description
The code simulates a basic API call that takes 2 seconds to respond. It shows how to handle asynchronous behavior using async/await, making the code easy to read and maintain.

🚀 Features
Simulated API response using a Promise

Asynchronous function that waits for the simulated response

Clear console logs to demonstrate the sequence of operations

🧠 How It Works
testApiCall() returns a Promise that resolves with a success message after 2 seconds.

awaitCall() is an asynchronous function that:

Logs "Fetching data..."

Waits for testApiCall() to complete

Logs the received response

🧪 Code Example

// Simulate an API call using a Promise
function testApiCall() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({ message: "Data fetched successfully!" });
}, 2000); // 2 second delay
});
}

// Async function to call the test API
const awaitCall = async () => {
console.log("Fetching data...");
const data = await testApiCall(); // Wait for the test API to resolve
console.log("Response received:", data);
};

// Call the function
awaitCall();

📦 Output

Fetching data...
(wait 2 seconds)
Response received: { message: 'Data fetched successfully!' }

📁 Requirements
Node.js or any modern browser that supports ES6+ features

✅ Use Cases
Teaching or learning how async/await works

Mocking API behavior in frontend or backend development

Quick prototyping for asynchronous flows


TASK 3

Handling Errors with Async/Await - 🧪 Async API Call with Error Handling
This is a basic JavaScript example that simulates an API call using a Promise and handles potential errors using try...catch.

📋 Description
The function testApiCall simulates a delayed API response.

The function awaitCall uses async/await to handle the API response.

If the API call fails, a user-friendly error message is displayed in the console.

💻 Code Example

function testApiCall() {
return new Promise((resolve, reject) => {
setTimeout(() => {
// Simulate a success
resolve({ message: "Data fetched successfully!" });

      // Simulate an error
      reject(new Error("Failed to fetch data"));
    }, 2000);

});
}

const awaitCall = async () => {
console.log("Fetching data...");
try {
const data = await testApiCall();
console.log("Response received:", data);
} catch (error) {
console.error("Oops! Something went wrong while fetching data. Please try again later.");
console.error("Error details:", error.message);
}
};

awaitCall();

🖨️ Sample Output

Fetching data...
Response received: { message: 'Data fetched successfully!' }

Or if an error occurs:

Fetching data...
Oops! Something went wrong while fetching data. Please try again later.
Error details: Failed to fetch data

📌 Note
In the current setup, both resolve and reject are called in the same block — only the first one (resolve) will run. To test the error handling, comment out the resolve() line and uncomment the reject() line.
