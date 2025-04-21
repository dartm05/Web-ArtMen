import { HashLink } from "react-router-hash-link";

export const MenuItem = ({ option, isActive, setActive }) => {
  return (
    <li
      key={option.id}
      className={isActive === option.id ? "active" : ""}
      onClick={() => setActive(option.id)}
    >
      <HashLink smooth to={option.link} href={option.link}>
        <div className="nav-item">{option.name}</div>
      </HashLink>
    </li>
  );
};
