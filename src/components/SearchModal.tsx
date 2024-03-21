import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SearchModal = () => {
  const router = useRouter();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        searchTerm: inputRef?.current?.value,
      },
    });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    toggleSearch();
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div
      className={`modal-search-header flex-c-m trans-04 ${
        isSearchVisible ? "show-modal-search" : "hide-modal-search"
      }`}
    >
      <div className="container-search-header">
        <button
          className="flex-c-m btn-hide-modal-search trans-04"
          onClick={toggleSearch}
        >
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>

        <form
          className="wrap-search-header flex-w p-l-15"
          onSubmit={handleOnSubmit}
        >
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input
            ref={inputRef}
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
