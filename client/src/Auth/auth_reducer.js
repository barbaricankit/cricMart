const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      return {
        ...state,
        userId: action.userId,
        username: action.username,
        password: action.password,
        navigate: action.navigate,
        navigateTo: action.navigateTo,
      };
    case "LOGIN":
      return { ...state, login: true };
    case "LOGOUT":
      return { ...state, login: false };
    case "SET_NAVIGATE":
      return {
        ...state,
        navigate: action.navigate,
        navigateTo: action.navigateTo,
      };
    default:
      return state;
  }
};

export default authReducer;
