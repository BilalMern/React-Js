// import useCustomHook from "../utils/useCustomHook";



// const CustomHookExample = () => {
  
//   const { hookInfo, error } = useCustomHook(); // Get hookInfo and error from the custom hook

//   // If data is still being fetched, show the loading message
//   if (!hookInfo && !error) {
//     return <h2>Loading...</h2>;
//   }

//   // If there is an error, display it
//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   // Render user data once it's fetched successfully
//   return (
//     <>
//       <h2>Name: {hookInfo.name}</h2>
//       <h3>Id: {hookInfo.id}</h3>
//     </>
//   );
// };

// export default CustomHookExample;

import useCustomHook from "../utils/useCustomHook"
const CustomHookExample = ()=>{
 const {userData,error}=useCustomHook();
if(!userData && !error){
  return(<h5>Loading...</h5>)
}
if(error){
 return <h2>{error}</h2>
}
return(
  <>
  <h3>Name:{userData.name}</h3>
  <h4>Id:{userData.id}</h4>
  </>
)
}
export default CustomHookExample;