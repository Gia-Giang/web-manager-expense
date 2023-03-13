import React from "react";
import { NavLink } from "react-router-dom";

import Doremon from "../assets/imgs/doremon.png";
import { Icon } from "../assets/svgs";
import routes from "../routes/routes";

import "./style.scss";

const Layout = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="user">
          <div className="user-img">
            <img src={Doremon} />
          </div>
          <span className="user-name">Gia Giang</span>
          <span className="user-duty">Admin</span>
        </li>
        {routes.map((item) => {
          return (
            <li className="navigation__item">
              <NavLink className={"navigation__link"} to={item.path}>
                <span className="navigation__icon">
                  <item.icon />
                </span>
                <span className="navigation__name">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="log-out">
        <span className="icon-wrapper">
          <Icon.IconLogOut />
        </span>
      </div>
    </nav>
  );
};

export default Layout;
