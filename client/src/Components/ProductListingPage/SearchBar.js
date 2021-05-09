import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useCart } from "../../cart-context/cart-context";
export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { cartDispatch } = useCart();
  return (
    <span className='searchbox'>
      <input
        type='search'
        placeholder='Search your products'
        className='textbox'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          cartDispatch({ type: "SEARCH_ACTION", value: e.target.value });
        }}
      />
      <FontAwesomeIcon className='search-icon' icon={faSearch} />
    </span>
  );
};
