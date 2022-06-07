

import axios from "axios";

export const ADDPRODUCT = "ADDPRODUCT";

export const addProduct = (val) => {
  return {
    type: ADDPRODUCT,
    payload: val,
  };
};

// export const postCountry = (val) => async (dispatch) => {
//     console.log(val,"helloooo")
//   axios
//     .post("https://city-country-01.herokuapp.com/add-country/", val)
//     .then(() => dispatch(getCountry()));
// };
export const getProduct = () => async (dispatch) => {
  axios
    .get("http://localhost:5000/product?sort=asc&color=Red&size=M")
    .then((res) =>{ dispatch(addProduct(res.data.product))
    console.log(res.data)});
};