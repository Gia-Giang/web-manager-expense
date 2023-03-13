import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal_TabView from "../../../../components/Modal_Tabview";
import { fetchGetData } from "../../../../redux/actions";

const Tab_CreateEvent = () => {
  const selector = useSelector((state: any) => ({
    dataEvent: state?.dataEvent,
    totalEvent: state?.totalEvent,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchData() {
      dispatch(fetchGetData());
    }
    fetchData();
  }, []);
  return (
    <div>
      <Modal_TabView data={selector} />
    </div>
  );
};

export default Tab_CreateEvent;
