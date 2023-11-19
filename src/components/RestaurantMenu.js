import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  return <h1>{resId}</h1>;
};
export default RestaurantMenu;
