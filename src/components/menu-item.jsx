import { HashLink } from "react-router-hash-link";
import { Dropdown } from "./dropdown";
import { useState, useRef, useEffect } from "react";

export const MenuItem = ({ option, isActive, setActive }) => {
  const [dropdown, setDropdown] = useState(false);
  const depthLevel = 0;

  const onClickItem = () => {
    setDropdown(!dropdown);
  };

  let dropdownRef = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

  return (
    <li
      key={option.id}
      className={isActive === option.id ? "active" : ""}
      onClick={() => setActive(option.id)}
      ref={dropdownRef}
    >
      {option.submenu ? (
        <>
          <div
            className="nav-item"
            onClick={onClickItem}
            aria-expanded={dropdown ? "true" : "false"}
          >
            {option.name}
            {dropdown ? <span className="arrow" /> : <span className="arrow right" />}
          </div>
          <Dropdown
            submenus={option.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            key={option.id}
          />
        </>
      ) : (
        <HashLink smooth to={option.link} href={option.link}>
          <div className="nav-item">{option.name} </div>
        </HashLink>
      )}
    </li>
  );
};
