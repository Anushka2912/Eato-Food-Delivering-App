import searchIcon from "../images/search-icon.jpg";
import { useState } from "react";

const SearchContainer = ({allRestaurants, setListOfRestaurants}) => {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setListOfRestaurants(allRestaurants);
    } else {
      const searchList = allRestaurants.filter((result) => 
        result.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(searchList);
    }
  }

  return (
    <div className="flex justify-center items-center max-w-[580px] w-full bg-white border border-[#c5c5c5] rounded-full search-Box">
      <button className="bg-white border-0 search-btn" onClick={handleSearch}>
        <img src={searchIcon} alt="search-icon-image" className="max-w-[15px]" />
      </button>
      <input 
        type="text" 
        className="w-full max-w-[500px] p-4 rounded-full border-0 focus:outline-none search-input" 
        placeholder="Search..." 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
};

export default SearchContainer;