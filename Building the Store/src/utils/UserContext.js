

import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Default User",
    setLoggedInUser: ()=>{},
})
export default UserContext;



// import { createContext } from "react";


// const UserContext = createContext({
//     useInpText: "",
//     setUseInputText: ()=>{},
// })
// export default UserContext;



