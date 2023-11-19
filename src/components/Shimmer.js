const CardShimmer = () => {
  return (
    <div className="ShimmerCard">
      <div className="shimmer-img"></div>
      <div className="shimmer-title"></div>
      <div className="shimmer-cuisines"></div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {new Array(20).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
