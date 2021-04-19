import { useEffect, useState } from "react";
import axios from "axios";
export const useAxios = (url, obj) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoader(true);
        setData([]);

        switch (obj.type) {
          case "GET":
            const { data: getData } = await axios.get(url);

            if (getData.success) {
              setData(getData);
            }
            break;
          case "POST":
            const { data: postData } = await axios.post(url, obj.body);

            if (postData.success) {
              setData(postData);
            }
            break;
          default:
            break;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    })();
  }, []);
  return { data, error, loader };
};
