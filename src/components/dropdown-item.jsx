import { useState, useEffect, useRef } from "react";
import { Dropdown } from "./dropdown";
import { HashLink } from "react-router-hash-link";

export const DropdownItem = ({ submenu, depthLevel }) => {
  const onClickItem = () => {
    setSubMenuDropdown(!subMenudropdown);
  };
  const [subMenudropdown, setSubMenuDropdown] = useState(false);
  let newDepthLevel = depthLevel + 1;

  let itemRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        subMenudropdown &&
        itemRef.current &&
        !itemRef.current.contains(event.target)
      ) {
        setSubMenuDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [subMenudropdown]);

  return (
    <li className="dropdown-item" ref={itemRef}>
      {submenu.submenu ? (
        <>
          <a onClick={onClickItem}>
            {submenu.name}
            {subMenudropdown ? (
              <span className="arrow right" />
            ) : (
              <span className="arrow" />
            )}
          </a>

          <Dropdown
            submenus={submenu.submenu}
            dropdown={subMenudropdown}
            depthLevel={newDepthLevel}
          />
        </>
      ) : (
        <HashLink
          smooth
          to={`${depthLevel > 1 ? "procedure" : ""}${submenu.link}`}
          href={`${depthLevel > 1 ? "procedure" : ""}${submenu.link}`}
        >
          <a href={`${depthLevel > 1 ? "procedure" : ""}${submenu.link}`}>
            {submenu.name}
          </a>
        </HashLink>
      )}
    </li>
  );
};
