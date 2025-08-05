const ResMenuDetailsBody = ({ data }) => {
    return (
        <>
      <div className="text-left bg-gray-300 p-4 rounded flex items-center gap-4">
        {/* Left content: Text */}
        <div className="flex-1">
          <p className="text-sm mb-1">
            <strong>Lorem Ipsum -</strong> {data.price}
          </p>
          <p className="text-sm">{data.description}</p>
        </div>
  
        {/* Right content: Image */}
        <div>
          <img
            src={data.img}
            alt="dish"
            className="w-28 h-20 object-cover rounded-md shadow-lg"
          />
        </div>
    
       </div>
       <div className="flex">
       <div className="flex-1 bg-red-200">Text</div>
       <div className="bg-blue-200 w-32">Image</div>
     </div>
       </>
    );
  };
  
  export default ResMenuDetailsBody;