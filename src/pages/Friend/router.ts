import { lazy } from "react";
import { Icon } from "../../assets/svgs";

const Friend = lazy(() => import("./index"));

const router = [
  {
    name: "Friend",
    path: "/Friend",
    component: Friend,
    icon:Icon.IconFriend
  },
];

export default router;
