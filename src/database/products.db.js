import { useAxios } from "../api_calls/getData";

export const GetProductsList = () => {
  const url = "https://boiling-refuge-80947.herokuapp.com/products";
  const response = useAxios(url, { type: "GET" });
  return response;
};
