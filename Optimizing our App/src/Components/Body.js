import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardData);
  const [copyListOfRestaurant, setCopyListOfRestaurant] = useState(resCardData);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="main">
        <div className="top_rated_center">
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

        <div className="Restaurant-search">
          <input
            type="text"
            className="Restaurant-input"
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
              setSearchText("")
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="Restaurant_container">
        {copyListOfRestaurant.map((restaurant) => {
          return (
            <Link to={`/restaurant/${restaurant.id}`}>
              <RestaurantCard resData={restaurant} key={restaurant.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;









