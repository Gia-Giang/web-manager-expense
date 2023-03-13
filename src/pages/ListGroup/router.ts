import { lazy } from "react";
import { Icon } from "../../assets/svgs";

const ListGroup = lazy(() => import("./index"));

const router = [
  {
    name: "Group",
    path: "/ListGroup",
    component: ListGroup,
    icon:Icon.IconGroup
  },
];

export default router;
