// import RestaurantCard from "./RestaurantCard";
// import resCardData from "../utils/mockData";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus.js";
// import CustomHookExample from "./CustomHookExample.js";
// import { withPromotedLabel } from "./RestaurantCard";

// const Body = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState(resCardData);
//   const [copyListOfRestaurant, setCopyListOfRestaurant] = useState(resCardData);
//   const [searchText, setSearchText] = useState("");
//   console.log("Body component is rendering...", listOfRestaurant); // Debugging
//   const onlineStatus = useOnlineStatus();
//   console.log("Online Status:", onlineStatus); // Debugging log

//   if (onlineStatus === false) return <h1>Failed to load web!</h1>; //Online offline logic
//   //Promoted label on RestaurantCard functonality using Higher order Component:
//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // Now this component has a promoted label in it,
//   // RestaurantCard (original) --> passed to --> withPromotedLabel (function) --> gives back --> RestaurantCardPromoted (new component)
//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <div className="bg-gray-200 rounded-sm font-bold p-1.5">
//           <button
//             onClick={() => {
//               const filteredRes = listOfRestaurant.filter(
//                 (filRes) => filRes.rating >= 4.8
//               );
//               setCopyListOfRestaurant(filteredRes);
//             }}
//           >
//             Top Rated Restaurant
//           </button>
//         </div>

//         <div className="absolute right-7.5 flex gap-2">
//           <input
//             type="text"
//             className="border border-solid border-black rounded-sm"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               const searchRes = listOfRestaurant.filter((res) =>
//                 res.cuisine.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setCopyListOfRestaurant(searchRes);
//               setSearchText("");
//             }}
//           >
//             <i className="bi bi-search bg-gray-200 rounded-sm p-2"></i>
//           </button>
//         </div>
//       </div>

//       <CustomHookExample />

//       {/* <div className="Restaurant_container">   */}

//       <div className="grid grid-cols-[repeat(5,200px)] justify-center gap-12">
//         {copyListOfRestaurant.map((restaurant) => {
//           return (
//             <Link to={`/restaurant/${restaurant.id}`}>
//               {restaurant.promoted ? (
//                 <RestaurantCardPromoted
//                   resData={restaurant}
//                   key={restaurant.id}
//                 />
//               ) : (
//                 <RestaurantCard resData={restaurant} key={restaurant.id} />
//               )}
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default Body;






import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import CustomHookExample from "./CustomHookExample.js";
import { withPromotedLabel } from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardData);
  const [copyListOfRestaurant, setCopyListOfRestaurant] = useState(resCardData);
  const [searchText, setSearchText] = useState("");
  console.log("Body component is rendering...", listOfRestaurant); // Debugging
  const onlineStatus = useOnlineStatus();
  console.log("Online Status:", onlineStatus); // Debugging log
  if (onlineStatus === false) return <h1>Failed to load web!</h1>; //Online offline logic
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 rounded-sm font-bold p-1.5">
          <button
            onClick={() => {
              const filteredRes = listOfRestaurant.filter(
                (filRes) => filRes.rating >= 4.8
              );
              setCopyListOfRestaurant(filteredRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="absolute right-7.5 flex gap-2">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchRes = listOfRestaurant.filter((res) =>
                res.cuisine.toLowerCase().includes(searchText.toLowerCase())
              );
              setCopyListOfRestaurant(searchRes);
              setSearchText("");
            }}
          >
            <i className="bi bi-search bg-gray-200 rounded-sm p-2"></i>
          </button>
        </div>
      </div>

      <CustomHookExample />

      {/* <div className="Restaurant_container">   */}

      <div className="grid grid-cols-[repeat(5,200px)] justify-center gap-12">
        {copyListOfRestaurant.map((restaurant) => {
          return (
           <Link to={`/restaurant/${restaurant.id}`}>
        {restaurant.promoted ? (<RestaurantCardPromoted resData={restaurant} key={restaurant.id}/>):
                <RestaurantCard resData={restaurant} key={restaurant.id} />}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
