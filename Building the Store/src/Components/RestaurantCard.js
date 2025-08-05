

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

// We will make here a higher order component which will take the RestaurantCard as input ane it will return us a new component a new enhanced component having promoted label on the resCards.
// Contract of HOC:
// input - RestaurantCard ==>RestaurantCardPromoted


export const withPromotedLabel =(RestaurantCard)=>{
return(props)=>{
  return(
    <div className="relative">
      <label className="absolute bg-gray-100 px-1 font-bold">Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  )
}
}
export default RestaurantCard;


// Body sends props to RestaurantCardPromoted

// RestaurantCardPromoted adds extra UI (Promoted label)

// Then passes all props using {...props} to the original RestaurantCard

// RestaurantCard uses them normally.


// Imagine you (Body) send a pizza order 🍕 to a waiter (RestaurantCardPromoted):

// The waiter doesn't make pizza.

// He attaches a "VIP customer" sticker (Promoted Label) on the order.

// Then he forwards the full order (props) to the kitchen (RestaurantCard).

// Result:

// The kitchen (RestaurantCard) gets the correct order.

// The pizza has a VIP label (Promoted).


