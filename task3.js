// Simulate an API call using a Promise
function testApiCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a success
        resolve({ message: "Data fetched successfully!" });
  
        // Simulate an error
        reject(new Error("Failed to fetch data"));
      }, 2000); // 2 second delay
    });
  }
  
  // Async function to call the test API with error handling
  const awaitCall = async () => {
    console.log("Fetching data...");
    try {
      const data = await testApiCall(); // Wait for the test API to resolve
      console.log("Response received:", data);
    } catch (error) {
      console.error("Oops! Something went wrong while fetching data. Please try again later.");
      console.error("Error details:", error.message);
    }
  };
  
  // Call the function
  awaitCall();
  