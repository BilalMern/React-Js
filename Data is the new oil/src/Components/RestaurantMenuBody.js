import RestaurantMenu from "./RestaurantMenu";
import resCardData from "../utils/mockData";
import { useParams } from "react-router-dom";

const RestaurantMenuBody = () => {
  const { resId } = useParams();
  const restaurant = resCardData.find((res) => res.id === resId);
  if (!restaurant) {
    return <h2>No Restaurant Found!</h2>;
  }
  return (
    <>
      <RestaurantMenu resMenuProps={restaurant} />
    </>
  );
};
export default RestaurantMenuBody;



