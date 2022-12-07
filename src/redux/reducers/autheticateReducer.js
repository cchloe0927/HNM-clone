//Action Values

//Action Creator

//Initial
let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

//reducer
function autheticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("login 성공");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
}

//export
export default autheticateReducer;
