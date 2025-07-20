// import { useState } from "react"
// export const LiftStateUp =()=>{
//     const[inpText,setInpText]=useState("")

import { useState } from "react";

//     return(
//         <>
//         <InputComponent inpText={inpText} setInpText={setInpText}/>
//         <DisplayComponent inpText={inpText}/>
//         </>
//     )
// }

// const InputComponent =(props)=>{
//     const{inpText,setInpText}=props
//     return(
//         <>
//         <input type="text" placeholder="Enter your text" value={inpText} onChange={(e)=>setInpText(e.target.value)}/>
//         </>
//     )
// }
// const DisplayComponent=({inpText})=>{
//     return(
//         <>
//         <p>The current input value is:{inpText}</p>
//         </>
//     )
// }

// const LiftStateUp =()=>{
//     const [useInpText,setUseInpText]=useState("")

//     return(
//         <>
//         <InputText textProps={useInpText} setTextProps={setUseInpText}/>
//         <DisplayText displayProps={useInpText}/>
//         </>
//     )
// }
// const InputText =({textProps,setTextProps})=>{
//     return(
//         <>
//         <input type="text" value={textProps} onChange={(e)=>{(setTextProps(e.target.value))}}/>

//         </>
//     )
// }
// const DisplayText=({displayProps})=>{
//     return(
//         <>
//         <p>Your Input is:{displayProps}</p>
//         </>
//     )
// }
// export default LiftStateUp;

// import UserContext from "../utils/UserContext";
// import { useContext } from "react";

// const LiftStateUp = () => {
//     const[useInpText,setUseInpText]=useState("")
//   return (
//     <>
//       <UserContext.Provider value={{useInpText,setUseInpText}}>
//         <InputText />
//         <DisplayText />
//       </UserContext.Provider>
//     </>
//   );
// };
// const InputText =()=>{
// const {useInpText,setUseInpText}=useContext(UserContext)
//     return(
//         <>
//         <input type="text" value = {useInpText} onChange={(e)=>{setUseInpText(e.target.value)}} />
//         </>
//     )
// }
// const DisplayText=()=>{
//     const{useInpText}=useContext(UserContext)
//     return(
//         <>
//         <p>Your Input is: {useInpText}</p>
//         </>
//     )
// }

// export default LiftStateUp;
