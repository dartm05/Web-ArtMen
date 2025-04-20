import { DropdownItem } from "./dropdown-item";
export const Dropdown = ({ submenus, dropdown, depthLevel }) => {

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown-menu ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <DropdownItem submenu={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
