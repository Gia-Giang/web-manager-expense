import { Tabs, TabsProps } from "antd";

import { PropTabs } from "../../../utils/type";
import "./style.scss";
import Tab_CreateEvent from "./Tab_CreateEvent";
import Tab_CurrentEvent from "./Tab_CurrentEvent";
import Tab_DebtAmount from "./Tab_DebtAmount";
import Tab_EventFinished from "./Tab_EventFinished";
import Tab_Messenger from "./Tab_Messenger";

const TabView = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: PropTabs.CREATE_EVENT,
      children: <Tab_CreateEvent />,
    },
    {
      key: "2",
      label: PropTabs.MESSENGER,
      children: <Tab_Messenger />,
    },
    {
      key: "3",
      label: PropTabs.CURRENT_EVENT,
      children: <Tab_CurrentEvent />,
    },
    {
      key: "4",
      label: PropTabs.EVENT_FINISHED,
      children: <Tab_EventFinished />,
    },
    {
      key: "5",
      label: PropTabs.DEBT_AMOUNT,
      children: <Tab_DebtAmount />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default TabView;
