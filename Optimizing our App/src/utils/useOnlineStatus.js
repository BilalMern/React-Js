//Online offline functinality:

import { useEffect, useState } from "react"

//To make a custom hook we should know about the contract of that utilty function means what will be the input of that hook and what will be the output.

//To check whether we are online or offline, we will use a Event Listener known as online Event Listner. Those Event Listners will keep a track of when the internet is online or when the internet is offline, so these Event Listners are super powers given to us by window object and browsers we have to just add them to our web page.
// We have to add Event Listners just once, now its the job of Event Listners is to keep tracking when the internet is on or when it is off and return the status back, so we have to keep it in useEffect hook.
// const useOnlineStatus =()=>{
//     const[onlineStatus,setOnlineStatus]= useState(true);
// useEffect(()=>{
//     window.addEventListener("offline", () => {
//         setOnlineStatus(false)
//     });
//     window.addEventListener("online", () => {
//         setOnlineStatus(true)
//     });
    
    
// },[])
// return onlineStatus; 
// }
// export default useOnlineStatus



// const useOnlineStatus = () => {
//     const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Get initial online status
  
//     useEffect(() => {
//       // Define functions to update status
//       const handleOffline = () => setOnlineStatus(false);
//       const handleOnline = () => setOnlineStatus(true);
  
//       // Add event listeners
//       window.addEventListener("offline", handleOffline);
//       window.addEventListener("online", handleOnline);
  
//       // Cleanup event listeners when the component unmounts
//       return () => {
//         window.removeEventListener("offline", handleOffline);
//         window.removeEventListener("online", handleOnline);
//       };
//     }, []);
  
//     return onlineStatus;
//   };
  
//   export default useOnlineStatus;




const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    console.log("useEffect is running"); // Debugging
    const handleStatusChange = () => {
      console.log("Status changed:", navigator.onLine); // Debugging
      setOnlineStatus(navigator.onLine); //Best Practice: Use navigator.onLine, This ensures that the correct online/offline status is set immediately: If the user is offline at the start, useState correctly initializes to false. The UI immediately reflects the correct state before useEffect even runs.
      
    };

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);
  console.log("Hook returning:", onlineStatus); // Debugging
  return onlineStatus;
};

export default useOnlineStatus;