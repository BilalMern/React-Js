const RestaurantMenu = ({resMenuProps}) => {
  return (
    <>
      {/* <div className="RestaurantMenu_div"> */}
      <div className="flex justify-center mt-20">
      <div className="w-[300px] h-[450px] p-2 border-1 rounded-tl-md rounded-tr-md bg-gray-100">

        <div className="RestaurantMenu_div-details">
          <img
            src={resMenuProps.img}
            alt=""
            className="h-[330px] w-[285px] rounded-tl-md rounded-tr-md"
          />
          <div className="detials">
          <h2 className="font-bold text-2xl"><span className="text-red-500"> Lorem</span> Ipsum</h2>
          <h4 className="font-bold">{resMenuProps.cuisine}</h4>
          <h5 className="font-bold text-sm">{resMenuProps.price}</h5>
          <div className="flex justify-end font-bold text-green-700">
            <h5>Order Now</h5>
          </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};
export default RestaurantMenu;




