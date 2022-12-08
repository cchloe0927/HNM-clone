//Action Values

//Action Creator

//Initial
let initialState = {
  productList: [],
  selectedItem: null,
};

//reducer
function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}

//export
export default productReducer;
