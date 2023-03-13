import {
  GET_DATA,
  ADD_AMOUNT_PRODUCT,
  MINUS_AMOUNT_PRODUCT,
  REMOVE_PRODUCT,
} from "../contains";

import CaculateTotal from "../../utils/CaculateTotal";

const initialState = {
  dataEvent: [
    {
      key: "1",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
    {
      key: "2",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
    {
      key: "3",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
    {
      key: "4",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
    {
      key: "5",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
    {
      key: "6",
      user: "Gia Giang",
      product: "Bánh mì chả",
      amount: 1,
      price: 50000,
      total: 0,
    },
  ],
  totalEvent: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA:
      const newData = state.dataEvent.map((item) => {
        return {
          ...item,
          total: item.amount * item.price,
        };
      });

      return {
        dataEvent: newData,
        totalEvent: CaculateTotal(newData),
      };
    case ADD_AMOUNT_PRODUCT:
      const addAmount = state.dataEvent.map((item) => {
        if (action.payload.key === item.key) {
          return {
            ...item,
            amount: (item.amount += 1),
            total: item.amount * item.price,
          };
        }
        return item;
      });

      return {
        ...state,
        dataEvent: addAmount,
        totalEvent: CaculateTotal(addAmount),
      };
    case MINUS_AMOUNT_PRODUCT:
      const minusAmount = state.dataEvent.map((item) => {
        if (action.payload.key === item.key) {
          return {
            ...item,
            amount: item.amount <= 0 ? 0 : (item.amount -= 1),
            total: item.amount * item.price,
          };
        }
        return item;
      });

      return {
        ...state,
        dataEvent: minusAmount,
        totalEvent: CaculateTotal(minusAmount),
      };
    case REMOVE_PRODUCT:
      const update_remove = state.dataEvent.filter((item) => {
        return action.payload.key !== item.key;
      });
      return {
        ...state,
        dataEvent: update_remove,
        totalEvent: CaculateTotal(update_remove),
      };
    default:
      return { ...state };
  }
};

export default reducer;
