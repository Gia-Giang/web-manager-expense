import { lazy } from "react";
import { Icon } from "../../assets/svgs";

const Total = lazy(() => import("./index"));

const router = [
  {
    name: "Total",
    path: "/Total",
    component: Total,
    icon:Icon.IconTotal
  },
];

export default router;
