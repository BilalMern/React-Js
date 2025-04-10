import useCustomHook from "../utils/useCustomHook";

import { useEffect, useState } from "react";
import useCustomHook from "../utils/useCustomHook";

import { useEffect, useState } from "react";

const CustomHookExample = () => {

  const { hookInfo, error } = useCustomHook(); // Get hookInfo and error from the custom hook

  // If data is still being fetched, show the loading message
  if (!hookInfo && !error) {
    return <h2>Loading...</h2>;
  }

  // If there is an error, display it
  if (error) {
    return <h2>{error}</h2>;
  }

  // Render user data once it's fetched successfully
  return (
    <>
      <h2>Name: {hookInfo.name}</h2>
      <h3>Id: {hookInfo.id}</h3>
    </>
  );
};

export default CustomHookExample;




// import { useEffect,useState } from "react";
// const CustomHookExample = ()=>{
//     const [userData,setUserData]=useState(null);
//     useEffect(()=>{
// fetchData();
//     },[])

//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://api.github.com/users/BilalMern"); // Fixed URL
//             if (!response.ok) {
//                 throw new Error(`API Error ${response.status} ${response.statusText}`);
//             }
//             const json = await response.json();
//             setUserData(json);
//         } catch (error) {
//             console.error("Error Fetching Data:", error.message);
//             setUserData({ error: error.message }); // Store the error in state
//         }
//     };
//    return userData === null ?
//         (<h2>Loading...</h2>) :  userData.error ? (
//             <h2 style={{ color: "red" }}>Error: {userData.error}</h2> // Display error
//         ) :

//     (
//         <>
//         <h3>Name: {userData.name}</h3>
//         <h4>Id: {userData.id}</h4>
//         </>
//     )

//  }
// export default CustomHookExample;

