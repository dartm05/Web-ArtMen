export const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown-item">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};
