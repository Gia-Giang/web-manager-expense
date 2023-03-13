import {
  GET_DATA,
  ADD_AMOUNT_PRODUCT,
  MINUS_AMOUNT_PRODUCT,
  REMOVE_PRODUCT,
} from "../contains";

export const fetchGetData = () => {
  return {
    type: GET_DATA,
  };
};

export const fetch_Add_Amout_Product = (payload: any) => {
  return {
    payload,
    type: ADD_AMOUNT_PRODUCT,
  };
};

export const fetch_Minus_Amout_Product = (payload: any) => {
  return {
    payload,
    type: MINUS_AMOUNT_PRODUCT,
  };
};

export const fetch_Remove_Product = (payload: any) => {
  return {
    payload,
    type: REMOVE_PRODUCT,
  };
};
