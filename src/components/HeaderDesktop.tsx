import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useHeaderContext } from "../context/HeaderContext";

const HeaderDesktop = () => {
  const { pathname } = useRouter();
  const router = useRouter();
  const { isSearchVisible, toggleSearch } = useHeaderContext();

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

  return (
    <>
      <nav className="menu-desktop row align-items-center">
        <Link href="/">
          <a className="logo">
            <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </Link>

        <div className="menu-desktop">
          <ul className="main-menu">
            <li className={pathname === "/" ? "active-menu" : ""}>
              <Link href="/">Home</Link>
            </li>

            <li className={pathname === "/shop" ? "active-menu" : ""}>
              <Link href="/shop">Shop</Link>
            </li>

            <li className={pathname === "/blog" ? "active-menu" : ""}>
              <Link href="/blog">Blog</Link>
            </li>

            <li className={pathname === "/about" ? "active-menu" : ""}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m h-full">
          <div className="flex-c-m h-full p-r-24">
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11"
              onClick={toggleSearch}
            >
              <i className="zmdi zmdi-search"></i>
            </div>
          </div>
        </div>
      </nav>
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
    </>
  );
};

export default HeaderDesktop;
