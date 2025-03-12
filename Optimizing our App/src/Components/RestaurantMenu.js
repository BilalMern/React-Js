const RestaurantMenu = ({resMenuProps}) => {
  return (
    <>
      <div className="RestaurantMenu_div">
        <div className="RestaurantMenu_div-details">
          <img
            src={resMenuProps.img}
            alt=""
            className="RestaurantMenu-img"
          />
          <div className="detials">
          <h2>Lorem Ipsum</h2>
          <h4>{resMenuProps.cuisine}</h4>
          <h5>{resMenuProps.price}</h5>
          <div className="order">
            <h5>Order Now</h5>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;




