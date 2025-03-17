import { useEffect, useState } from "react";

import { useState } from "react";

 const useCustomHook = () => {

const [hookInfo, setHookInfo] = useState(null); // Initially, it’s null (not fetched yet)
   const [error, setError] = useState(null); // State to store error message
   useEffect(() => {
     fetchUser();
   }, []);
   const fetchUser = async () => {
     try {
       // Incorrect URL intentionally to test the error
       const response = await fetch("https://api.github.com/users/BilalMern");
       if (!response.ok) {
         // If the response is not ok, throw an error with the status
         throw new Error(`Error: ${response.status} - ${response.statusText}`);
       }
       const json = await response.json();
       console.log(json)
       setHookInfo(json);  // Set the fetched data to state
     } catch (error) {
       // Log the error to the console for debugging purposes
       console.error("Failed to fetch user:", error.message);
       // Set a user-friendly error message to be displayed on the page
       setError("Failed to load user data. Please try again later.");
     }
   };
   return { hookInfo, error }; // Return both hookInfo and error
 };
 export default useCustomHook;










