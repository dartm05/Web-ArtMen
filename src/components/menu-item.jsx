import { HashLink } from "react-router-hash-link";
import { Dropdown } from "./dropdown";
import { useState } from "react";

export const MenuItem = ({ option, isActive, setActive }) => {
  const [dropdown, setDropdown] = useState(false);
  const depthLevel = 0;

  const onClickItem = () => {
    setDropdown(!dropdown);
  };

  return (
    <li
      key={option.id}
      className={isActive === option.id ? "active" : ""}
      onClick={() => setActive(option.id)}
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
