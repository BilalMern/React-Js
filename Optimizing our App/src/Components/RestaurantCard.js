const RestaurantCard = ({resData}) => {
  return (
    <>
      <div className="RestaurantCard_div">
        <img
          src={resData.img}
          alt=""
          className="RestaurantCard-img"
        />
        <div className="RestaurantCard-detials">
          <h3>
            <span className="lorem">Lorem</span> Ipsum
          </h3>
          <h6 className="cuisine">{resData.cuisine}</h6>
          <div className="RestaurantCard-rating-delivery-price">
            <div className="RestaurantCard-rating">
              <i className="bi bi-star-fill"></i>
              <h6>{resData.rating}</h6>
            </div>
            <div className="RestaurantCard-delivery">
                <h6>{resData.delivery}</h6>
            </div>
            <div className="RestaurantCard-price">
                <h6>{resData.price}</h6>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
