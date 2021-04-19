import { useAxios } from "../api_calls/getData";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
const GetUserDetails = ({ username, password, navigate, navigateTo }) => {
  const [state, setState] = useState({});
  const url = "http://localhost:4000/user";
  const response = useAxios(url, {
    state,
  });
  useEffect(() => {
    setState({
      type: "POST",
      body: { userName: username, password: password },
    });
  }, [username]);
  return response;
};

export default GetUserDetails;
