import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = props;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h4>{name}</h4>
      <h6>Rating {avgRating}</h6>
      <p>{cuisines.join(" ,")}</p>
    </div>
  );
};
export default RestaurantCard;
