import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const MenuItem = ({ option, isActive, setActive }) => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`#${option.id}`);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          setActive(option.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [option, setActive]);

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
