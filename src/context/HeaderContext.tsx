import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import React from "react";

interface HeaderContextProps {
  isSearchVisible: boolean;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  toggleSearch: () => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderContextProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchVisible(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        isSearchVisible,
        setIsSearchVisible,
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        toggleSearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
