import RestaurantCard, { withDiscount } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer"; 
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";
import useOnline from "../utils/useOnline";
import UserOffline from "./UserOffline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(API_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();

  const DiscountRestaurantCard = withDiscount(RestaurantCard);

  if (!isOnline) {
    return <UserOffline />;
  }

  const filterData = (searchText, restaurants) => {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;
  console.log(allRestaurants);

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <DiscountRestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;