import { ADDPRODUCT } from "./productAction";

var init = {
  product: [],
};

export const productReducer = (store = init, { type, payload }) => {
    //console.log(type,":",payload)
  switch (type) {
    case ADDPRODUCT:
      return { ...store, country: payload };
    default:
      return { ...store };
  }
};
