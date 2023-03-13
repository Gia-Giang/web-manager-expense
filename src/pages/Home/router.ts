import { lazy } from "react";
import { Icon } from "../../assets/svgs";

const Home = lazy(() => import("./index"));

const router = [
  {
    name:"Home",
    path: "/Home",
    component: Home,
    icon:Icon.IconHome
  },
];

export default router;
