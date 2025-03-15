import useCustomHook from "../utils/useCustomHook";

const CustomHookExample = () => {
  
  const { hookInfo, error } = useCustomHook(); // Get hookInfo and error from the custom hook

  // If data is still being fetched, show the loading message
  if (!hookInfo && !error) {
    return <h2>Loading...</h2>;
  }

  // If there is an error, display it
  if (error) {
    return <h2>{error}</h2>;
  }

  // Render user data once it's fetched successfully
  return (
    <>
      <h2>Name: {hookInfo.name}</h2>
      <h3>Id: {hookInfo.id}</h3>
    </>
  );
};

export default CustomHookExample;