import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Dropdown } from "./dropdown";

export const Navigation = (props) => {
  const [language, setLanguage] = useState({});
  const [isActive, setActive] = useState({});
  const [dropdown, setDropdown] = useState(false);

  const menuOptions = [
    { id: "home", name: "Home", link: "/#page-top" },
    { id: "about", name: "About Us", link: "/#about" },
    {
      id: "procedures",
      name: "Our Procedures",
      link: "/#procedures",
      submenu: [
        { title: "Face", url: "/#face" },
        { title: "Body", url: "/#body" },
        { title: "Breast", url: "/#breast" },
        { title: "Featured", url: "/#procedures" },
      ],
    },
    { id: "services", name: "Services", link: "/#services" },
    { id: "team", name: "Locations", link: "/#team" },
    { id: "contact", name: "Contact", link: "/#contact" },
  ];

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/logoFinal.png"
              alt=""
              width="139"
              height="35"
              className="inline-block"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {menuOptions.map((option) => (
              <li
                key={option.id}
                className={isActive == option.id ? "active" : ""}
                onClick={() => setActive(option.id)}
              >
                {option.submenu ? (
                  <>
                    <div
                      className="nav-item"
                      onClick={(prev) => {
                        setDropdown(!prev);
                      }}
                      aria-expanded={dropdown ? "true" : "false"}
                    >
                      {option.name}
                    </div>
                    <Dropdown submenus={option.submenu} dropdown={dropdown} />
                  </>
                ) : (
                  <HashLink smooth to={option.link} href={option.link}>
                    <div
                      className="nav-item"
                      aria-expanded={dropdown ? "true" : "false"}
                      onClick={(prev) => setDropdown(!prev)}
                    >
                      {option.name}{" "}
                    </div>
                  </HashLink>
                )}
              </li>
            ))}
            <li>
              <a href="https://www.instagram.com/drluisarteaga">
                <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
