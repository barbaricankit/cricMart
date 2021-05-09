import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-refuge-80947.herokuapp.com/",
});

const callServer = async ({ url, type, body }) => {
  try {
    switch (type) {
      case "GET":
        const { data: getData } = await instance.get(url);

        if (getData.success) {
          return getData;
        }
        break;
      case "POST":
        const { data: postData } = await instance.post(url, body);

        if (postData.success) {
          return postData;
        }
        break;
      default:
        break;
    }
  } catch (error) {
    return error;
  }
};
export default callServer;
