import { useState } from "react";
import { MenuItem } from "./menu-item";

export const Navigation = (props) => {
  const [isActive, setActive] = useState({});

  const menuOptions = [
    { id: "home", name: "Home", link: "/#page-top" },
    { id: "about", name: "About Us", link: "/#about" },
    {
      id: "procedures",
      name: "Our Procedures",
      link: "/#procedures",
      submenu: [
        {
          name: "Face",
          url: "/#face",
          submenu: [
            {
              id: "lip-augmentation",
              name: "Lip Augmentation",
              link: "/lip-augmentation",
            },
            {
              id: "orofacial",
              name: "Orofacial Harmonization",
              link: "/orofacial-harmonization",
            },
            { name: "Blepharoplasty", link: "/blepharoplasty" },
            { name: "Bichectomy", link: "/bichectomy" },
            { name: "Facelift", link: "/facelift" },
            { name: "Browlift", link: "/browlift" },
          ],
        },
        {
          name: "Body",
          link: "/#body",
          submenu: [
            { name: "Tummy tuck", link: "/tummy-tuck" },
            { name: "liposuction", link: "/liposuction" },
            { name: "Brazilian Butt Lift", link: "/brazilian-butt-lift" },
            { name: "Arms Lift", link: "/arms-lift" },
            { name: "Thigh Lift", link: "/thigh-lift" },
          ],
        },
        {
          name: "Breast",
          link: "/#breast",
          submenu: [
            { name: "Breast Reduction", link: "/breast-reduction" },
            { name: "Breast Augmentation", link: "/breast-augmentation" },
            { name: "Breast Lift", link: "/breast-lift" },
            { name: "Gynecomastia", link: "/gynecomastia" },
          ],
        },
        { name: "All Featured", link: "/#procedures" },
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
              <MenuItem
                option={option}
                isActive={isActive}
                setActive={setActive}
              />
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
