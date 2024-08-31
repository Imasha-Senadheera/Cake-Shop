import axios from "axios";

// Create an Axios instance to simplify API requests
const instance = axios.create({
  // Set the base URL for all API requests
  baseURL: "http://localhost:4000", // Adjust this URL to match my backend server's URL
});

// Export the Axios instance for use in other parts of the application
export default instance;
