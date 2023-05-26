import { useState, useRef, useEffect } from "react";

export const useNavbarSize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-flamingo transition ease transform duration-1000`;
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
    } else if (menuRef.current) {
      menuRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return { isOpen, setIsOpen, genericHamburgerLine, menuRef };
};
