import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const RootRoutes = () => {
  return (
    <Routes>
      {routes.map((item) => {
        return <Route path={item.path} element={<item.component />} />;
      })}
    </Routes>
  );
};

export default RootRoutes;
