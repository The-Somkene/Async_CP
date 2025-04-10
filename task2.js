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
