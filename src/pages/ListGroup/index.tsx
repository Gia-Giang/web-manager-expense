import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import Item from "../../components/Item";
import "./style.scss";
import TabView from "./TabView";

const ListGroup = () => {
  return (
    <div className="group">
      <h3>Danh sách nhóm</h3>
      <div className="group-list">
        <div className="group-list-left">
          <div className="item">
            <p>Nhom tra da</p>
          </div>
        </div>
        <TabView />
      </div>
    </div>
  );
};

export default ListGroup;
