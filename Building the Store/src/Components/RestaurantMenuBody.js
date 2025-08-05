import RestaurantMenu from "./RestaurantMenu";
import resCardData from "../utils/mockData";
import { useParams } from "react-router-dom";
import ResMenuDetails from "./ResMenuDetails";


const RestaurantMenuBody = () => {
  
  const { resId } = useParams();
  const restaurant = resCardData.find((res) => res.id === resId);
  if (!restaurant) {
    return <h2>No Restaurant Found!</h2>;
  }
  return (
    <>
    

    
  <RestaurantMenu resMenuProps={restaurant} />
      <ResMenuDetails />

 {/* { restaurant.promoted ?(<ResPromotedDeatails resMenuProps={restaurant}/>):
  (<RestaurantMenu resMenuProps={restaurant} />)}
      <ResMenuDetails /> */}
    </>
  );
};
export default RestaurantMenuBody;



