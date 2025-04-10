import { useEffect, useState } from "react";

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





// import { useEffect,useState } from "react";

// const useCustomHook =()=>{
//   const [userData,setUserData]=useState(null);
//     const [error, setError] = useState(null); // State to store error message

 
//   const fetchData = async () => {
//       try {
//         console.log("Fetching user data...");
//           const response = await fetch("https://api.github.com/users/BilalMern"); // Fixed URL
//           console.log("Response status:", response.status);
//           if (!response.ok) {
//               throw new Error(`API Error ${response.status} ${response.statusText}`);
//           }
//           const json = await response.json();
//           console.log("API Response:", json);
//           setUserData(json);
//       } catch (error) {
        
//           console.error("Error Fetching Data:", error.message);
//        setError("Failed to load user data. Please try again later.");
         
//       }
     
//   };
//   useEffect(()=>{
//     fetchData();
//       },[])
     
//   return {userData,error}
// }
// export default useCustomHook;




