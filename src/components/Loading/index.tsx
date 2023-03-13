import { Spin } from "antd";
import React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Spin size="large"/>
    </div>
  );
};

export default Loading;
