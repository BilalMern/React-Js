const RestaurantCard = ({resData}) => {
  return (
    <>
      {/* <div className="RestaurantCard_div"> */}
      <div className="bg-gray-200 p-1 mb-8 hover:bg-gray-300">

        <img
          src={resData.img}
          alt=""
          className="h-50 w-[280px]"
        />
        <div className="RestaurantCard-detials">
          <h3 className="font-bold text-[20px]">
            <span className="text-rose-600">Lorem</span> Ipsum
          </h3>
          <div className="flex flex-col gap-1">
          <h6 className="text-[10px] font-bold text-gray-400 underline">{resData.cuisine}</h6>

          {/* <div className="RestaurantCard-rating-delivery-price"> */}
          <div className="flex gap-1 text-[8px] font-bold text-gray-400">

            {/* <div className="RestaurantCard-rating"> */}
            <div className="flex gap-1.5 bg-green-700 text-white w-10 font-sm text-[10px] font-bold">

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
      </div>
    </>
  );
};
export default RestaurantCard;
