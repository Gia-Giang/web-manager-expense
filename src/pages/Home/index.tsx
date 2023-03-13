import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGetData } from "../../redux/actions";
import Item from "../../components/Item";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container-item">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Home;
