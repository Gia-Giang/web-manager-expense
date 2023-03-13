import { Switch } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Doremon from "../assets/imgs/doremon.png";
import { Icon } from "../assets/svgs";
import Loading from "../components/Loading";
import Layout from "../layouts";
import RootRoutes from "../routes";
import "./style.scss";

const Navigation = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="container-navi">
          <Layout />
          <div className="content-wrapper">
            <div className="tab-bottom">
              <Icon.IconMenu />
              <div className="tab-bottom-list">
                <Switch
                  defaultChecked
                  onChange={onChange}
                  className="change-theme"
                  disabled
                />
                <div className="noti">
                  <Icon.IconNoti />
                  <span className="noti-total">99</span>
                </div>
                <div className="user">
                  <div className="user-img">
                    <img src={Doremon} />
                  </div>
                  <span className="user-name">gia giang</span>
                </div>
                <div className="setting">
                  <Icon.IconSetting />
                </div>
              </div>
            </div>
            <div className="content">
              <RootRoutes />
            </div>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
