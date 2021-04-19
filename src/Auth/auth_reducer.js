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
    default:
      break;
  }
};

export default authReducer;
