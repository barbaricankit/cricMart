import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
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
      // case "DELETE":
      //   const { data: deletedata } = await instance.delete(`${url}`, {
      //     body: body,
      //   });
      //   if (deletedata.success) {
      //     return deletedata;
      //   }
      //   break;
      default:
        break;
    }
  } catch (error) {
    return error;
  }
};
export default callServer;
