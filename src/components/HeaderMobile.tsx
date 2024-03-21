import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useHeaderContext } from "../context/HeaderContext";

const HeaderMobile: React.FC = () => {
  const { pathname } = useRouter();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    isSearchVisible,
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    toggleSearch,
  } = useHeaderContext();
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
  return (
    <>
      <div className="menu-mobile row align-items-center justify-content-around">
        {isMenuOpen ? (
          <div className="pointer" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        ) : (
          <div className="pointer" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        <Link href="/">
          <a
            className="logo-menu"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </Link>

        <div onClick={toggleSearch}>
          <i
            style={{ fontSize: "25px" }}
            className="pointer fa-solid fa-magnifying-glass"
          ></i>
        </div>
      </div>
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
      <div
        className={`modal-search-header d-flex align-items-center justify-content-center ${
          isMenuOpen ? "show-modal-open " : "hide-modal-search"
        }`}
      >
        <div className="container-search-header">
          <ul className="main-menu-mobile">
            <li
              onClick={toggleMenu}
              className={pathname === "/" ? "active-menu" : ""}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              onClick={toggleMenu}
              className={pathname === "/shop" ? "active-menu" : ""}
            >
              <Link href="/shop">Shop</Link>
            </li>

            <li
              onClick={toggleMenu}
              className={pathname === "/blog" ? "active-menu" : ""}
            >
              <Link href="/blog">Blog</Link>
            </li>

            <li
              onClick={toggleMenu}
              className={pathname === "/about" ? "active-menu" : ""}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
