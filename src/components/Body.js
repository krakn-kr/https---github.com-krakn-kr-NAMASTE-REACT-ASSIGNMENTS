import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const response = await fetch(swiggy_api_URL);
    const json = await response.json();
    // initialize checkJsonDate() funstion to check restaurant data
    async function checkJsonDate(jsonData) {
      for (let i = 0; i < jsonData.data?.cards.length; i++) {
        // initialize checkData for Swiggy restaurant data
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkJsonDate(json);
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
    console.log(resData);
  }
  const SearchData = (searchText, allRestaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, allRestaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData.length === 0) {
        setErrorMessage("No Restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(allRestaurants);
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant you want"
          value={searchText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              SearchData(searchText, allRestaurants);
            }
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => SearchData(searchText, allRestaurants)}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="error-container">
          <h1>{errorMessage}</h1>
        </div>
      )}
      {filteredRestaurants.length === 0 && !errorMessage ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((Restaurant) => {
            return (
              <RestaurantCard key={Restaurant.info.id} {...Restaurant.info} />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
