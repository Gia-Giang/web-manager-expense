import { Button, message, Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { useDispatch } from "react-redux";

import { Icon } from "../../assets/svgs";
import {
  fetch_Add_Amout_Product,
  fetch_Minus_Amout_Product,
  fetch_Remove_Product,
} from "../../redux/actions";
import formattedNumber from "../../utils/formattedNumber";
import "./style.scss";

interface Props {
  data?: any;
}

interface DataType {
  key: string;
  user: string;
  product: string;
  amount: number;
  price: string;
  total: number;
}

const Modal_TabView = ({ data }: Props) => {
  const dispatch = useDispatch();

  const handelMinusAmount = (record: any) => {
    dispatch(fetch_Minus_Amout_Product(record));
  };

  const handelAddAmount = (record: any) => {
    dispatch(fetch_Add_Amout_Product(record));
  };

  const Confirm = (e: React.MouseEvent<HTMLElement>, record?: any) => {
    dispatch(fetch_Remove_Product(record));
    message.success("Đã xóa thành công");
  };

  const Cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Người sử dụng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Số lượng",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      render: (value, record) => {
        return (
          <div className="amount">
            <Icon.IconMinus onClick={() => handelMinusAmount(record)} />
            <b>{value}</b>
            <Icon.IconAddPlus onClick={() => handelAddAmount(record)} />
          </div>
        );
      },
    },
    {
      title: "Giá tiền",
      dataIndex: "total",
      key: "total",
      render: (total: number) => {
        return <span>{formattedNumber(total)}</span>;
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      width: 80,
      render: (_, record) => {
        return (
          <Popconfirm
            placement="topRight"
            title="Xóa sản phẩm"
            description="Bạn có muốn xóa sản phẩm này?"
            onConfirm={(e: any) => Confirm(e, record)}
            onCancel={() => Cancel}
            okText="Xóa"
            cancelText="Không"
          >
            <div>
              <Icon.IconDelete />
            </div>
          </Popconfirm>
        );
      },
    },
  ];

  const handelAdd = () => {
    console.log("ss");
  };
  const handelSearch = () => {
    console.log("he");
  };

  return (
    <div className="modal_tabview">
      <div className="modal_heading">
        <Icon.IconAdd onClick={handelAdd} />
        <span className="modal_name">Nhóm trà đá công ty</span>
        <Icon.IconSearch onClick={handelSearch} />
      </div>
      <Table
        dataSource={data?.dataEvent.length >= 0 ? data?.dataEvent : []}
        columns={columns}
        scroll={{ y: 240 }}
        pagination={false}
        footer={() => (
          <div className="add_product">
            <span className="item">Gia Giang </span>
            <span className="item">Bánh mì trứng </span>
            <div className="item">
              <Icon.IconMinus />
              <b>1</b>
              <Icon.IconAddPlus />
            </div>
            <span className="item">50.000 đ</span>
            <Button className="btn_add">Thêm</Button>
          </div>
        )}
      />
      <div className="modal_addEvent">
        <div className="total_product">
          <h2>Tổng cộng</h2>
          <h2 className="total">{formattedNumber(data?.totalEvent)}</h2>
        </div>

        <Button className="btn_create_event">Tạo sự kiện</Button>
      </div>
    </div>
  );
};

export default Modal_TabView;
