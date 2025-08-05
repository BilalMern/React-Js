const RestaurantMenu = ({ resMenuProps }) => {
  return (
    <>
      {/* <div className="RestaurantMenu_div"> */}
      <div className="flex justify-center mt-10 text-center">
        <div className="">
          <div className="RestaurantMenu_div-details">
            <div className="detials">
              <h2 className="font-bold text-2xl">
                <span className="text-red-500"> Lorem</span> Ipsum
              </h2>
              <h4 className="font-bold">{resMenuProps.cuisine}</h4>

              {/* ✅ Make div relative */}
              <div className="relative w-[140px] h-[50px] m-auto">
                {/* ✅ Conditionally show Promoted label */}
                {resMenuProps.promoted && (
                  <label className="absolute bg-gray-100 px-1 font-bold text-xs top-0 left-0">
                    Promoted
                  </label>
                )}

                {/* ✅ img stays normal */}
                <img
                  className="w-full h-full border-2 rounded-lg"
                  src={resMenuProps.img}
                  alt=""
                />
              </div>

              {/* <div className=""><img className="w-[140px] h-[50px] m-auto border-2 rounded-lg relative" src={resMenuProps.img} alt="" /></div> */}
              <h5 className="font-bold text-sm">{resMenuProps.price}</h5>

              <div className="font-bold text-green-700">
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
